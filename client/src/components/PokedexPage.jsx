import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import PokemonView from "./PokemonView.jsx"

class PokedexPage extends Component {
  render() {
    const dexNumber = Math.floor(Math.random()*721);
    return (
      <div>
        <PokemonView dexNumber={dexNumber} pokemon=""/>
      </div>
    );
  }
}
// <img src="../sprites/3.png"/>

export default PokedexPage;