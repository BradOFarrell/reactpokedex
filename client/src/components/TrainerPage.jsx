import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import PokemonView from "./PokemonView.jsx"

class TrainerPage extends Component {
    componentWillMount(){
    }
    removeFromParty = (pokemon) => {
        this.props.trainer.removePokemon(pokemon.dexNumber);       
    }
    removeButton(pokemon){
        if(this.props.trainer.party.team.length > 1){
            return (<a href="#" onClick={()=> this.removeFromParty(pokemon)}>
            Remove from party</a>)
        } else {
            return (<span>Can't remove last Pokemon.</span>)            
        }

    }
    renderParty(pokemon){
        return (<p><PokemonView pokemon={pokemon}/>
                {this.removeButton(pokemon)}</p>);
    }
    render() {
        if(this.props.trainer.party.team[0]){
            let party = []
            for (var i=0; i < this.props.trainer.party.team.length; i++) {
                party.push(this.renderParty(this.props.trainer.party.team[i]));
            }
            return (<div>{party}</div>);
        } else {
            return (
            <div/>
            )
        }
    }
}

// <pre>{JSON.stringify(this.props.trainer.party.team[0])}</pre>


export default TrainerPage;