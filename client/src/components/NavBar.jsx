import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import styled from 'styled-components';
import '../App.css';

const NavWrapper = styled.div`
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
  a{
    color: white;
  }
`

class NavBar extends Component {
  render() {
    return (
      <div>
      <NavWrapper>
      <p>
      <Link to="/dex">Pokédex</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/battle">Battle</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/trainer">Trainer</Link>
      </p>
      </NavWrapper>
      </div>
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