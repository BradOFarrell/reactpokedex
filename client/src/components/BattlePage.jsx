import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import axios from 'axios'
import Oak from '../professorOak.js';
import PokemonView from "./PokemonView.jsx"


class BattlePage extends Component {
  constructor() {
    super();
    this.state = {
      opponentPokemon: {},
      selectedPokemon: {}
    }
  }
  loadPokemon = (dexNumber) =>{
    this.state.opponentPokemon = {}
    axios.get('https://pokeapi.co/api/v2/pokemon/' + dexNumber).then((res) => {
      const baseStat = (res.data.hp + res.data.sp_atk + res.data.sp_def + res.data.speed + res.data.defense + res.data.attack)
      const type1 = res.data.types[0].name;
      let type2 = "none"
      if (res.data.types[1]) {
        type2 = res.data.types[1].name;
      }
      const opponentPokemon = Oak.newPokemon(dexNumber, baseStat, type1, type2)
      this.setState({ opponentPokemon: opponentPokemon });
    })
      .catch((err) => {
        console.log("Error loading users. " + err);
      })
  }
  getTeamPokemon = () =>{
    if(this.props.trainer.party.team[0]){
      const randomSlot = Math.floor(Math.random()*this.props.trainer.party.team.length)
      this.setState({selectedPokemon : this.props.trainer.party.team[randomSlot]})      
    }
  }
  componentWillMount() {
    let dexNumber = Math.floor(Math.random() * 718);
    this.loadPokemon(dexNumber);
  }
  getBattleResults = () =>{
  if(this.state.selectedPokemon.dexNumber && this.state.opponentPokemon.dexNumber){

    const myPokemonName = Oak.dexToName(this.state.selectedPokemon.dexNumber).toUpperCase()
    const myAdvantage = Oak.getBestAttackModifier(
      this.state.selectedPokemon.type1, this.state.selectedPokemon.type2,   
      this.state.opponentPokemon.type1, this.state.opponentPokemon.type2)
    const myAttack = this.state.selectedPokemon.baseStat * myAdvantage;

    const foePokemonName =  Oak.dexToName(this.state.opponentPokemon.dexNumber).toUpperCase()
    const foeAdvantage = Oak.getBestAttackModifier(
      this.state.opponentPokemon.type1, this.state.opponentPokemon.type2,   
      this.state.selectedPokemon.type1, this.state.selectedPokemon.type2)
    const foeAttack = this.state.opponentPokemon.baseStat * foeAdvantage;
    
    let output = []
    let battleLog = []
    battleLog.push(<p>Your {myPokemonName}'s base power is is {this.state.selectedPokemon.baseStat}</p>)
    battleLog.push(<p>Your {myPokemonName}'s type advantage is {myAdvantage}x</p>)
    battleLog.push(<p>Your {myPokemonName}'s total power is... {myAttack}!</p>)
    if(myAdvantage > 1)
      battleLog.push(<p>It's SUPER EFFECTIVE!</p>)
    if(myAdvantage < 1)
      battleLog.push(<p>It's not very effective...</p>)

    battleLog.push(<br/>)
    battleLog.push(<p>Foe's {foePokemonName}'s base power is is {this.state.opponentPokemon.baseStat}</p>)
    battleLog.push(<p>Foe's {foePokemonName}'s type advantage is {foeAdvantage}x</p>)
    battleLog.push(<p>Foe's {foePokemonName}'s total power is... {foeAttack}!</p>)
    if(foeAdvantage > 1)
      battleLog.push(<p>It's SUPER EFFECTIVE!</p>)
    if(foeAdvantage < 1)
      battleLog.push(<p>It's not very effective...</p>)

    battleLog.push(<br/>)
    battleLog.push(<div>{myPokemonName}'s {myAttack} vs {foePokemonName}'s {foeAttack}</div>)
    output.push(<pre>{battleLog}</pre>)

    if(myAttack > foeAttack){
      output.push(<h1 style={{color: "#009900"}}>Your {myPokemonName} won!</h1>)
    } else if(myAttack < foeAttack){
      output.push(<h1 style={{color: "#990000"}}>You lost to {foePokemonName}...</h1>)
    } else {
      output.push(<h1>It's a draw!</h1>)      
    }
    output.push(<br/>)      
    output.push(<br/>)      
    

    return (<div>{output}</div>)
    }
    else{
      return (<div>Please wait...</div>)    
    }
  }
  render() {
    if(!this.state.selectedPokemon.dexNumber){
      this.getTeamPokemon();      
    }
    return (
      <div>
        <table wdith="800" align="center">
        <tr>
        <td width="300" valign="top"><PokemonView pokemon={this.state.selectedPokemon} mode="battle"/></td>
        <td><h1><strong>VS</strong></h1></td>
        <td width="300" valign="top"><PokemonView pokemon={this.state.opponentPokemon} mode="battle"/></td>
        </tr>
        </table>
        <br/>
      {this.getBattleResults()}
      </div>
    );
  }
}

export default BattlePage;