
import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import Oak from '../pokemonHelper.js';

class PokemonView extends Component {
  render() {
    const spriteURL = Oak.dexToSprite(this.props.dexNumber)
    const pokemonName = Oak.dexToName(this.props.dexNumber);
    return (
      <div>
        <img src={spriteURL}/>
        <h1>{pokemonName}</h1>
      </div>
    );
  }
}


export default PokemonView;