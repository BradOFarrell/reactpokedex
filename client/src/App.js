import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import Oak from './pokemonHelper.js';
import NavBar from "./components/NavBar.jsx"
import PokedexPage from "./components/PokedexPage.jsx"
import BattlePage from "./components/BattlePage.jsx"
import TrainerPage from "./components/TrainerPage.jsx"
import './App.css';

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
      console.log(Oak.getBestAttackModifier("fire","water","dragon","flying"));

    })
    .catch((err) => {
      console.log("Error loading users. "+err);
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
      <div>
      <a href="/dex">Dex</a>
      </div>
        <Router><Switch>
        <Route path="/dex/:num" component={PokedexPage} />
        <Route path="/dex" component={PokedexPage}/>
        <Route path="/battle" component={BattlePage}/>
        <Route path="/trainer" component={TrainerPage}/>
        <Route path="/" component={PokedexPage}/>
        </Switch></Router>
      </div>
    );
  }
}

/*
    <Route path="/idea/:userId" component={IdeaPage} />
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup" component={SignUpFormPage}/>
    <Route path="/" component={HomePage}/>
*/
export default App;
