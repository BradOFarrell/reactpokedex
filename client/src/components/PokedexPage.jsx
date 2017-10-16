import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import PokemonView from "./PokemonView.jsx"
import Oak from '../pokemonHelper.js';

class PokedexPage extends Component {
  render() {
    const dexNumber = Math.floor(Math.random()*721);
    const pokemon = Oak.newPokemon(dexNumber,100,"electric","none")
    return (
      <div>
        <PokemonView pokemon={pokemon}/>
      </div>
    );
  }
}
// <img src="../sprites/3.png"/>

export default PokedexPage;