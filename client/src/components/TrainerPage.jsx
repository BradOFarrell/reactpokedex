import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import PokemonView from "./PokemonView.jsx"

class TrainerPage extends Component {
    componentWillMount(){
        console.log()
    }
    render() {
        if(this.props.trainer.party.team[0]){
            return (
            <div>
                <PokemonView dexNumber={this.props.trainer.party.team[2].dexNumber}/>
            </div>
            );
        } else {
            return (
            <PokemonView dexNumber="0"/>
            )
        }
    }
}

// <pre>{JSON.stringify(this.props.trainer.party.team[0])}</pre>


export default TrainerPage;