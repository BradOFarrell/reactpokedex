import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import PokemonView from "./PokemonView.jsx"

class TrainerPage extends Component {
    componentWillMount(){
        console.log()
    }
    renderParty(pokemon){
        return (<p><PokemonView pokemon={pokemon}/>
                Remove from Party</p>);
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