import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import {Router, Link, Redirect} from 'react-router-dom'
import PokemonView from "./PokemonView.jsx"
import Oak from '../pokemonHelper.js';
import axios from 'axios'

class PokedexPage extends Component {
  constructor() {
    super();
    this.state = {
      currentPokemon: {}
      }
    }
  componentWillMount(){
    let dexNumber;
    if(this.props.fromURL){
      dexNumber = this.props.fromURL.params.dexNum;
      if(dexNumber < 0 ||dexNumber > 718)
      {
        dexNumber = Math.floor(Math.random()*721);        
      }
    } else {
      dexNumber = Math.floor(Math.random()*721);
    }
    console.log(dexNumber);
    axios.get('https://pokeapi.co/api/v1/pokemon/'+dexNumber).then((res) => {
      const baseStat = (res.data.hp + res.data.sp_atk + res.data.sp_def + res.data.speed + res.data.defense + res.data.attack)
      const type1 = res.data.types[0].name;
      let type2 = "none"
      if(res.data.types[1]){
        type2 = res.data.types[1].name;
      }
      const newPokemon = Oak.newPokemon(dexNumber,baseStat,type1,type2)
      this.setState({currentPokemon : newPokemon});
    })
    .catch((err) => {
      console.log("Error loading users. "+err);
    })
  }
  prevButton(dexNumber){
    if(dexNumber > 0){
      let newDexNumber = Number(dexNumber)-1;
      const urlString = "/dex/"+newDexNumber;
      return (<Link to={urlString}>NEXT</Link>);      
    }
  }
  nextButton(dexNumber){
    if(dexNumber < 717){
      let newDexNumber = Number(dexNumber)+1;
      const urlString = "/dex/"+newDexNumber;
      return (<Link to={urlString}>PREV</Link>);      
    }
  }
  render() {    
    return (
      <div>
        <PokemonView pokemon={this.state.currentPokemon}/>
        Add to Party<br/>
        {this.nextButton(this.state.currentPokemon.dexNumber)}
        &nbsp;-&nbsp;
        {this.prevButton(this.state.currentPokemon.dexNumber)}
      </div>
    );
  }
}
// <img src="../sprites/3.png"/>

export default PokedexPage;