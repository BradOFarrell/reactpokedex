
import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import Oak from '../professorOak.js';

const PokemonViewWrapper = styled.div`
  div{
    text-align: center;
    font-family: 'Trebuchet MS';
    margin: 0;
    svg{
      margin-bottom: 5px;
    }  
  }
  h1{
    text-transform: capitalize;    
  }
  h4{
    text-transform: uppercase;    
  }
`
class PokemonView extends Component {
  getTypeIcon = (typeString) =>{
    const styleString = "color: red"
    return (<span style={{color: Oak.getTypeColor(typeString)}}>{typeString}</span>)
  }
  render() {
    const pokemon = this.props.pokemon;
    const spriteURL = Oak.dexToSprite(pokemon.dexNumber)
    const pokemonName = Oak.dexToName(pokemon.dexNumber);
    const combatPoints = pokemon.baseStat;
    const type1 = this.props.pokemon.type1
    const type2 = this.props.pokemon.type2
    
    const typeDisplay = ()=> {
      if(type2 === "none"){
        return (<div>
          {this.getTypeIcon(type1)}
          </div>)
      } else {
        return (<div>
          {this.getTypeIcon(type1)}
          /
          {this.getTypeIcon(type2)}        
          </div>)
       }
    }

    if(this.props.pokemon.dexNumber){
      if(this.props.mode === "caught"){
        return (
          <div>
          <PokemonViewWrapper>
          <h1>{pokemonName}</h1>
          <img src={Oak.dexToSprite("ball")}/>
          <br/>
          <br/>The wild Pokemon was caught!
          <br/>Go to the trainer tab to check!
          </PokemonViewWrapper>
          </div>
        );
      } else {
        return (
          <div>
          <PokemonViewWrapper>
          <h1>{pokemonName}</h1>
          <img src={spriteURL}/>
          <h4>{typeDisplay()}</h4>
          <em>National Dex: #{pokemon.dexNumber}</em>
          <h4>Power: <strong>{combatPoints}</strong></h4>
          </PokemonViewWrapper>
          </div>
        );
      }
    } else {
      if(this.props.mode === "battle"){
        return (
          <div>
          <PokemonViewWrapper>
          <h1>Loading...</h1>
          <img src={Oak.dexToSprite("sub")}/>
          <br/>
          <br/>Getting ready for battle!
          </PokemonViewWrapper>
          </div>
        );
      } else {
        return (
          <div>
          <PokemonViewWrapper>
          <h1>Loading...</h1>
          <img src={Oak.dexToSprite("egg")}/>
          <h4>...</h4>
          <br/>
          <h4>Oh?</h4>
          </PokemonViewWrapper>
          </div>
        );
      }
    }
  }
}


export default PokemonView;