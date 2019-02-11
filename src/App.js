import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar} from 'reactstrap';
import {NavbarBrand} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar dark color="primary">
      <div className="container">
      <NavbarBrand href="/">Restore Confusion</NavbarBrand>
      </div>
      </Navbar> 
        
      </div>
    );
  }
}

export default App;
