import React, { Component } from 'react';
import logo from'./../../img/voyages-sncf-fr-FR.png';
import flagFrance from'./../../img/France-Flag.png';
import flagAll from'./../../img/flagAll.png';
import logoRespon from'./../../img/logoRespon.png';
import './navbar.css';
import './scrollfx.js';
import './containerLangues.js';



class Navbar extends Component {
 
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    console.log('start');
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() { 
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
    // inserer fonction js avec syntaxe REACT
  render() {

    return (
    <div className="navbar">
      <div className="topHeader">
        <div className="navbarLeft">  
            <div className="menuNavbar">
                <a href=""><div className="burger">
                </div> 
                <p>Menu</p>
                </a> 
            </div>
            <div className="connectionNavbar">
                <a href="">
                <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                <p>Me connecter</p>
                 </a>
            </div>
            <div className="commandeNavbar">
                <a href="">
                <i className="fa fa-folder-open-o fa-2x" aria-hidden="true"></i>
                <p>Mes Commandes</p>
                </a>
            </div>
            <img src={logo} className="logoHeader" alt="logo" />
            <img src={logoRespon} className="logoHeaderRespons" alt="logoMini" />
        </div>
      <div className="navbarRight"> 
            <div className="languesNavbar">
                <a onClick={this.handleClick} >
                <img src={flagFrance} className="flagFrance" alt="logo"/>
                <p>France</p>
                <i className="fa fa-chevron-down"  aria-hidden="true">
                </i></a>
                <div className="containerLangues"  style={{display:this.state.isToggleOn ? 'block' : 'none'}}>
                    <img src={flagAll} className="flagAll" alt="logo" />
                </div>
            </div>
        <div className="helpNavbar">
            <a href=""><i className="fa fa-question-circle fa-2x" aria-hidden="true"></i>
            <p>Aide</p>
            </a>
        </div>
      </div>
      </div>
      <div className="container1">
     </div>
    </div>
   
    );
  }


}


export default Navbar;