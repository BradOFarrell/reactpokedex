
import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import Oak from '../pokemonHelper.js';

const PokemonViewWrapper = styled.div`
  background-color: red;
  padding: 26px 5vw;
  width: 100vw;
  height: 75px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  p{
    font-size: 2.75rem;
    color: white;
    text-align: center;
    font-family: 'Trebuchet MS';
    margin: 0;
    svg{
      margin-bottom: 5px;
    }  
  }
  a{
    color: white;
  }
`
class PokemonView extends Component {
  render() {
    const pokemon = this.props.pokemon;
    const spriteURL = Oak.dexToSprite(pokemon.dexNumber)
    const pokemonName = Oak.dexToName(pokemon.dexNumber);
    const combatPoints = Oak.getCP(pokemon.dexNumber,pokemon.baseStat);
    const type1 = this.props.pokemon.type1
    const type2 = this.props.pokemon.type2
    
    const typeDisplay = ()=> {
      return (<span>{type1} - {type2}</span>)
    }

    if(this.props.pokemon){
        return (
            <div>
            <img src={spriteURL}/>
            <h1>{pokemonName}</h1>
            <h1>{typeDisplay()}</h1>
            <h1>{combatPoints}</h1>
            </div>
        );
    } else {
        return (<div/>);
    }
  }
}


export default PokemonView;