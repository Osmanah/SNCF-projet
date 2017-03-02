import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (

      <div className="Header">
        <div className="Header-background"></div>
        <div className="Header-form-container">
          <div className="Header-form-header">

            <ul className="Header-transports-choice">
              <li>
                <button>
                  <i className="fa fa-train"></i>
                  <span>
                    Train</span>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa fa-plane"></i>
                  <span>
                    Vol</span>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa fa-bus"></i>
                  <span>
                    Bus</span>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa fa-car"></i>
                  <span>
                    Voiture</span>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa fa-bed"></i>
                  <span>
                    Hôtel</span>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa fa-sun-o"></i>
                  <span>
                    Séjour</span>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa fa-suitcase"></i>
                  <span>
                    Vol + Hôtel</span>
                </button>
              </li>
            </ul>
            <a className="Header-btn-promo" href="">
              <span className="devise">
                <i className="fa fa-euro"></i>
              </span>Les petits prix</a>
          </div>
          <div className="Header-form-content">
            <div className="Header-form-content-header">
              <form>
                <input type="radio" name="aller" value="allerSimple"/>
                <label htmlFor="">Aller simple</label>
                <input type="radio" name="aller" value="allerRetour"/>
                <label htmlFor="">Aller-retour</label>
              </form>
              <a href="">Acheter une carte ou un abonnement
                <i className="fa fa-chevron-right"></i>
              </a>
            </div>
            <div className="Header-form-content-main">
              <form action="">
                <p>
                  <span>Départ</span>
                  <input type="text" value=""/>
                </p>
                <hr/>
                <p>
                  <span>Arrivée</span>
                  <input type="text" value=""/>
                </p>
              </form>
              <form action="">
                <p>
                  <input type="text" placeholder="01/03/17"/>
                  <span>
                    <i className="fa fa-calendar"></i>
                  </span>
                </p>
                <hr/>
                <p>
                  <input type="text" placeholder="Retour"/>
                  <span>
                    <i className="fa fa-calendar"></i>
                  </span>
                </p>
              </form>
              <form action="">
                <select name="" id="">
                  <option value="">00h</option>
                  <option value="">01h</option>
                  <option value="">02h</option>
                  <option value="">03h</option>
                  <option value="">04h</option>
                  <option value="">05h</option>
                  <option value="">06h</option>
                  <option value="">07h</option>
                  <option value="">08h</option>
                  <option value="">09h</option>
                  <option value="">10h</option>
                  <option value="">11h</option>
                  <option value="" selected>12h</option>
                  <option value="">13h</option>
                  <option value="">14h</option>
                  <option value="">15h</option>
                  <option value="">16h</option>
                  <option value="">17h</option>
                  <option value="">18h</option>
                  <option value="">19h</option>
                  <option value="">20h</option>
                  <option value="">21h</option>
                  <option value="">22h</option>
                  <option value="">23h</option>
                </select>
                <hr/>
                <select name="" id="">
                  <option value="">00h</option>
                  <option value="">01h</option>
                  <option value="">02h</option>
                  <option value="">03h</option>
                  <option value="">04h</option>
                  <option value="">05h</option>
                  <option value="">06h</option>
                  <option value="" selected>07h</option>
                  <option value="">08h</option>
                  <option value="">09h</option>
                  <option value="">10h</option>
                  <option value="">11h</option>
                  <option value="">12h</option>
                  <option value="">13h</option>
                  <option value="">14h</option>
                  <option value="">15h</option>
                  <option value="">16h</option>
                  <option value="">17h</option>
                  <option value="">18h</option>
                  <option value="">19h</option>
                  <option value="">20h</option>
                  <option value="">21h</option>
                  <option value="">22h</option>
                  <option value="">23h</option>
                </select>
              </form>
            </div>
            <div className="Header-form-additional-content">
              <div className="Header-form-travel-class">
                <form action="">
                  <p>
                    <input type="checkbox"/>
                    <label>Trajets directs</label>
                  </p>
                  <p>
                    <input type="radio"/>
                    <label htmlFor="">2ème classe</label>
                  </p>
                  <p>
                    <input type="radio"/>
                    <label htmlFor="">1ère classe</label>
                  </p>
                </form>
                <form action="">
                  <input type="checkbox"/>
                  <label htmlFor="">Flexible? Voir le calendrier des prix</label>
                </form>
              </div>
              <div className="Header-form-additional-voyager">
                <div className="Header-form-additional-voyager-control">
                  <div>
                    <p>Nombre de voyageurs</p>
                    <div className="Header-voyager-number">
                      <button id="Voyager-minus">
                        <i className="fa fa-minus"></i>
                      </button>
                      <p id="Voyager-number-container">1</p>
                      <button id="Voyager-plus">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
					<a href="">Plus de 9 voyageurs jusqu'à -65%</a>
                  </div>
				  <a href=""><i className="fa fa-wheelchair"></i> Voyageurs handicapés</a>
                </div>
                <div className="Header-form-additional-voyager-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Header;
