import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';

const NavWrapper = styled.div`
  background-color: red;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  p{
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
      <div>
      <NavWrapper>
        <p>Pokedex - Battle - User</p>
      </NavWrapper>
      </div>
    );
  }
}

export default NavBar;