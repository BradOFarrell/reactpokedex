import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import Oak from './professorOak.js';
import NavBar from "./components/NavBar.jsx"
import PokedexPage from "./components/PokedexPage.jsx"
import BattlePage from "./components/BattlePage.jsx"
import TrainerPage from "./components/TrainerPage.jsx"
import LoginPage from "./components/LoginPage.jsx"
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      trainer: {
        username: '',
        party: {
          winStreak: 5,
          team: []
        },
      },
      userId: ''
    }      
  }
  getTrainer = (userID) =>{
    const userURL = '/api/users/'+userID;
    axios.get(userURL).then((res) => {
      this.initializeTrainer(res.data);
    })
    .catch((err) => {
      console.log("Error loading users. "+err);
    })
  }
  updateTrainer = (updatedTrainer) =>{
    this.setState({trainer : updatedTrainer});    
    let updatedUser = {};
    updatedUser.party = updatedTrainer.party;
    updatedUser.username = updatedTrainer.username;
    updatedUser.badges = updatedTrainer.badges;
    const userURL = '/api/users/'+updatedTrainer._id;
    axios.patch(userURL, updatedUser).then((res) => {
    console.log(res);
    })
    .catch((err) => {
      console.log("Error loading users. "+err);
    })
  }
  initializeTrainer = (newTrainer) => {
    newTrainer.addPokemon = (newPokemon) =>{
      let updatedTrainer = this.state.trainer;
      if(updatedTrainer.party.team.length < 6){
        updatedTrainer.party.team.push(newPokemon)
        updatedTrainer.party.winStreak = 0;
        this.updateTrainer(updatedTrainer);
        return true;
      }
      return false;
    } 
    newTrainer.removePokemon = (dexNum) =>{
      let updatedTrainer = this.state.trainer;
      let stillSearching = true;
      if(updatedTrainer.party.team.length > 1){
        for(let i = 0; i < updatedTrainer.party.team.length && stillSearching; i++){
          if(updatedTrainer.party.team[i].dexNumber === dexNum){
            updatedTrainer.party.team.splice(i, 1);
            updatedTrainer.party.winStreak = 0;
            this.updateTrainer(updatedTrainer);
            stillSearching = false;
            return true
          }
         }
        }
      return false
    }
    newTrainer.signOut = () =>{
      const blankTrainer = ({
        username: '',
        party: {
          winStreak: 5,
          team: []
        }
      });
      localStorage.removeItem("storedId");      
      this.setState({trainer : blankTrainer})
    }
    this.setState({trainer : newTrainer});
  }
  logIn = (userId) => {
    localStorage.setItem('storedId', userId);    
    this.setState({userId : userId}, ()=>{
      this.getTrainer(this.state.userId);
    });
  }
  componentWillMount(){
    var storedId = localStorage.getItem("storedId");
    if(storedId){
      this.logIn(storedId)      
    }
  }
  render() {
    if(this.state.trainer.party.team[0]){
        return (
        <Router>
        <div className="App">
          <NavBar/>
          <Switch>
          <Route path="/dex/:dexNum" render={(props) => (<PokedexPage trainer={this.state.trainer} fromURL={props.match}/>)}/>
          <Route exact path="/dex" render={(props) => (<PokedexPage trainer={this.state.trainer}/>)}/>
          <Route path="/battle" render={() => (<BattlePage trainer={this.state.trainer}/>)}/>
          <Route path="/trainer" render={() => (<TrainerPage trainer={this.state.trainer}/>)}/>
          <Route path="/login" render={() => (<LoginPage logIn={this.logIn}/>)}/>
          <Route exact path="/" render={() => (<TrainerPage trainer={this.state.trainer} />)}/>
          </Switch>
        </div>
        </Router>
      );
    }
    else {
      return (<Router><div><LoginPage logIn={this.logIn}/></div></Router>)
    }
  }
}

/*
    <Route path="/idea/:userId" component={IdeaPage} />
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup" component={SignUpFormPage}/>
    <Route path="/" component={HomePage}/>
*/
export default App;
