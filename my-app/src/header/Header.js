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
                                <button focus>
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
								<input type="radio" name="aller" value="allerSimple" /><label htmlFor="">Aller simple</label>
								<input type="radio" name="aller" value="allerRetour"/><label htmlFor="">Aller-retour</label>
							</form>
							<a href="">Acheter une carte ou un abonnement <i className="fa fa-chevron-right"></i></a>
						</div>
					</div>
                </div>
            </div>

        );
    }
}

export default Header;
