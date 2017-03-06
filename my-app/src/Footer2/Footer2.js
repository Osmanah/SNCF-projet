import React, {Component} from 'react';
import './Footer2.css';

class Footer2 extends Component {
    render() {
        return (

            <footer className="Footer2">
                <hr/>

                <div className="colume1">
                    <h6>L'ENTREPRISE</h6>
                    <div id="list1">
                        <ul>
                            <li>
                                <a href="#">Qui sommes-nous ?</a>
                            </li>
                            <li>
                                <a href="#">Rejoignez-nous</a>
                            </li>
                            <li>
                                <a href="#">Avis client</a>
                            </li>
                            <li>
                                <a href="#">Charte de confidentialité et cookies</a>
                            </li>
                            <li>
                                <a href="#">Conditions Générales de vente</a>
                            </li>
                            <li>
                                <a href="#">Informations légales</a>
                            </li>
                            <li>
                                <a href="#">Droits des voyageurs ferroviaires<br/>et Règlement européen<br/>n°1371/2007</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="colume2">
                    <h6>SITES DU GROUPE</h6>
                    <div id="list2">
                        <ul>
                            <li>
                                <a href="#">csncf.com</a>
                            </li>
                            <li>
                                <a href="#">KIS, le portail des agents SNCF</a>
                            </li>
                            <li>
                                <a href="#">Rail Europe
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="colume3">
                    <h6>PARTENARIAT</h6>
                    <div id="list3">
                        <ul>
                            <li>
                                <a href="#">Devenir partenaire Hôtel</a>
                            </li>
                            <li>
                                <a href="#">Devenir partenaire Activités</a>
                            </li>
                            <li>
                                <a href="#">Annonceurs et partenariats
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="colume4">
                    <h6>VOYAGEURS HANDICAPES</h6>
                    <div id="list4">
                        <ul>
                            <li>
                                <a href="#">Accessibilité</a>
                            </li>
                            <li>
                                <a href="#">Billet de train personnes handicapées</a>
                            </li>
                            <li>
                                <a href="#">Accès plus</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer2;
