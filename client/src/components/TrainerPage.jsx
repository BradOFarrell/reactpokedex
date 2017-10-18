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
            Release</a>)
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
            let output = []
            let row1 = []
            let row2 = []
            for (var i=0; i < this.props.trainer.party.team.length; i++) {
                const slot = (<td width="200">{this.renderParty(this.props.trainer.party.team[i])}</td>);
                if(i<3){
                    row1.push(slot)
                } else{
                    row2.push(slot)                    
                }
            }
            output.push(<tr>{row1}</tr>)
            output.push(<tr>{row2}</tr>)
            return (<div><h3>{this.props.trainer.username}'s party:</h3><table align="center" width="620">{output}</table></div>);
        } else {
            return (
            <div/>
            )
        }
    }
}

// <pre>{JSON.stringify(this.props.trainer.party.team[0])}</pre>


export default TrainerPage;