import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import Oak from '../professorOak.js';
import styled from 'styled-components';

const Header = styled.div`
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
`
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

    axios.post("/api/users/new/", newUser).then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("Error loading users. "+err);
    })

//    alert(JSON.stringify(newUser));
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
        <Header>
        <p>React Pokédex</p>
        </Header>
        <img src={Oak.dexToSprite(4)}/>
        <img src={Oak.dexToSprite(1)}/>
        <img src={Oak.dexToSprite(25)}/>
        <img src={Oak.dexToSprite(7)}/>
        <p>This is a react-based Pokédex app created by <a href="https://github.com/BradOFarrell">Brad O'Farrell</a>.
        <br/>It uses a <a href="https://pokeapi.co/">public API by Paul Hallet</a> and the MERN stack.</p>
        <br/>
        <h3>Sign in as an existing user:</h3>
        {this.state.allUsers.map(user => {
          return (this.signInButton(user.username, user._id));
        })}
        <br/>
        <h3>Or make a new account:</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" id="user-input" 
        placeholder="your_user_name" maxLength="25"
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