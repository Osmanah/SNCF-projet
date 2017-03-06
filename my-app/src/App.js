import React, { Component } from 'react';
import './App.css';
import Navbar from './top_header/navbar.js'
import Header from './header/Header.js';
import Section1 from './PremiereSection/Section1.js';
import SecondeSection from './SecondeSection/SecondeSection.js';


// PLACER ICI VOTRE LIEN D'IMPORT



class App extends Component {
  render() {
    return (
      <div className="App">




      <Navbar></Navbar>
      <Header></Header>
      <Section1></Section1>
      <SecondeSection></SecondeSection>


      </div>
    );
  }
}

export default App;
