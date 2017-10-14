import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Oak from './pokemonHelper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trainer: {}, // this is the user you are playing as
      num: 20
    };
  }
  componentWillMount(){
    axios.get('/api/users/59e1235bc18a7a42b1dbb558').then((res) => {
      this.setState({trainer : res.data});
      console.log(this.state.trainer);
      console.log(Oak.dexToName(this.state.trainer.party.team[0].dexNumber));
      console.log(Oak.nameToDex("pikachu"));
      console.log(Oak.getTypeEffectiveness("electric"));
    })
    .catch((err) => {
      console.log("Error loading users. "+err);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.trainer.username}
        </p>
      </div>
    );
  }
}

export default App;
