import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import Oak from '../professorOak.js';

class LogIn extends Component {
  state = {
    allUsers: [],
    newNameInput: ''
  }
  makeNewTrainer = (inputUsername) =>{
    return ({
        username: inputUsername,
        badges: 0,
        party: {
            team: [{
                dexNumber: 25,
                baseStat: 320,        
                type1: "electric",
                type2: "none"
            }],
            winStreak: 0
            }
        });        
  }
  handleSubmit = () => {
    const newUser = this.makeNewTrainer(this.state.newNameInput)
    alert(JSON.stringify(newUser));
  }    
  handleInput = (e) => {
      this.setState({newNameInput: e.target.value})
  }    
  getAllUsers = () => {
    axios.get('/api/users').then(res => {
    console.log(res)
      this.setState({allUsers: res.data})
    })
  }
  signInButton = (username, userId) =>{
    
    return (<p><a href="#" onClick={
            ()=>{this.props.logIn(userId);}
            }>{username}</a></p>)    
  }
  componentWillMount = () => {
    this.getAllUsers();
  }
  render () {
    return (
      <div align="center">
        <h1>React Pokedex</h1>
        <p>This is a react-based Pokédex app created by Brad O'Farrell.
        <br/>It uses a <a href="https://pokeapi.co/">public API by Paul Hallet</a> and the MERN stack.</p>
        <img src={Oak.dexToSprite(4)}/>
        <img src={Oak.dexToSprite(1)}/>
        <img src={Oak.dexToSprite(25)}/>
        <img src={Oak.dexToSprite(7)}/>
        <h3>Sign in as an existing user:</h3>
        {this.state.allUsers.map(user => {
          return (this.signInButton(user.username, user._id));
        })}
        <h3>Or make a new account:</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" id="user-input" 
        placeholder="your_user_name" maxlength="25"
        onChange={ this.handleInput }/>
        <button type="submit">Go</button>    
        </form>
        <br/>
        <img src={Oak.dexToSprite(151)}/>
    </div>
    )
  }
}

export default LogIn