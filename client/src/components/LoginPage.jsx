import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
  state = {
    allUsers: []
  }

  getAllUsers = () => {
    axios.get('/api/users').then(res => {
    console.log(res)
      this.setState({allUsers: res.data})
    })
  }
  
componentWillMount = () => {
    this.getAllUsers();
}

  render () {
    return (
      <div>
        <h1>Log-In</h1>
        <h3>Please Select an Existing User</h3>
        {this.state.allUsers.map(user => {
          return (<p><Link to={`/idea/${user._id}`}>{user.username}</Link></p>)
        })}
      </div>
    )
  }
}

export default LogIn