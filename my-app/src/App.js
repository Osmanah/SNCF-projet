import React, { Component } from 'react';
import './App.css';
import Navbar from './top_header/navbar.js'
import Header from './header/Header';
import Section1 from './PremiereSection/Section1.js';
import SectionPre from './PremiereSection/SectionPre.css';

// PLACER ICI VOTRE LIEN D'IMPORT


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Section1></Section1>

      </div>
    );
  }
}

export default App;
