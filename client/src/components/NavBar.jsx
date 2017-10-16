import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import styled from 'styled-components';
import '../App.css';

const NavWrapper = styled.div`
  background-color: red;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  a{
    font-size: 1.75rem;
    color: white;
    text-align: center;
    font-family: 'Trebuchet MS';
    margin: 0;
    svg{
      margin-bottom: 5px;
    }  
  }
`

class NavBar extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavWrapper>
      <Link to="/dex">Pokédex</Link>
      <Link to="/battle">Battle</Link>
      <Link to="/trainer">Trainer</Link>
      </NavWrapper>
      <a href="/battle"></a>
      </div>
      </Router>
    );
  }
}

/*
        <Router>
        <Link to="/dex">Pokédex</Link>
        -
        <Link to="/battle">Battle</Link>
        -
        <Link to="/trainer">Trainer</Link>
        </Router>

*/
export default NavBar;