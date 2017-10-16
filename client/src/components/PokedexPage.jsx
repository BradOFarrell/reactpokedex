import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import PokemonView from "./PokemonView.jsx"

class PokedexPage extends Component {
  render() {
    return (
      <div>
        <PokemonView dexNum="25"/>
      </div>
    );
  }
}
// <img src="../sprites/3.png"/>

export default PokedexPage;