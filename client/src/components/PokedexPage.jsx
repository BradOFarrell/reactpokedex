import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import PokemonView from "./PokemonView.jsx"
import Oak from '../professorOak.js';
import axios from 'axios'

class PokedexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: {},
      isCatchable: true
    }
  }
  loadPokemon = (dexNumber) =>{
    this.state.currentPokemon = {}
    this.state.isCatchable = true    
    axios.get('https://pokeapi.co/api/v2/pokemon/' + dexNumber).then((res) => {
      console.log(res.data);
      const loadedPokemon = Oak.parsePokemonFromAPI(res.data);
      console.log(loadedPokemon);      
      this.setState({ currentPokemon: loadedPokemon });
    })
      .catch((err) => {
        console.log("Error loading users. " + err);
      })
  }
  componentWillMount() {
    let dexNumber;
    if (this.props.fromURL) {
      dexNumber = this.props.fromURL.params.dexNum;
      if (dexNumber < 1 || dexNumber > 718) {
        dexNumber = Math.floor(Math.random() * 718);
      }
    } else {
      dexNumber = Math.floor(Math.random() * 718);
    }
    this.loadPokemon(dexNumber);
  }
  prevButton = () => {
    const dexNumber = this.state.currentPokemon.dexNumber
    if (dexNumber > 1) {
      let newDexNumber = Number(dexNumber) - 1;
      const urlString = "/dex/" + newDexNumber;
      return (<a href="#" onClick={
        ()=> this.loadPokemon(newDexNumber)}>
        PREV</a>)
}
  }
  nextButton = () => {
    const dexNumber = this.state.currentPokemon.dexNumber
    if (dexNumber < 718) {
      let newDexNumber = Number(dexNumber) + 1;
      return (<a href="#" onClick={
              ()=> this.loadPokemon(newDexNumber)}>
              NEXT</a>)

    }
  }
  addButton = () => {
    if (this.props.trainer.party.team.length < 6) {
      return (<a href="#" onClick={this.addToParty}> Throw Pokéball</a>);
    } else {
      return (<strong>Your party is full.</strong>)
    }
  }
  addToParty = () => {
    if (this.props.trainer.addPokemon) {
      const added = this.props.trainer.addPokemon(this.state.currentPokemon);
      if(added){
        this.setState({isCatchable: false})
      }
    }
  }
  dexButtons = () => {
    if(this.state.currentPokemon.dexNumber){
      return (<div>{this.addButton()}
      <br/>
      {this.prevButton()}
      &nbsp;-&nbsp;
      {this.nextButton()}</div>)  
    }
  }
  render() {
    if(this.state.isCatchable){
      return (
        <div>
          <PokemonView pokemon={this.state.currentPokemon}/>
          {this.dexButtons()}
        </div>
      );
    }
    else {
      return (
        <div>
          <PokemonView pokemon={this.state.currentPokemon} mode="caught"/>
        </div>
      );
    }
  }
}
// <img src="../sprites/3.png"/>

export default PokedexPage;