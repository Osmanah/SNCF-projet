import React, {Component} from 'react';
import './SecondeSection1.css';
import fond from '/home/simplonco/Documents/Projet/SNCF-projet/my-app/img/fi_mdd-romantique3.jpg';
import fond2 from '/home/simplonco/Documents/Projet/SNCF-projet/my-app/img/istock-sanjeri_vsc.jpg';
import fond3 from '/home/simplonco/Documents/Projet/SNCF-projet/my-app/img/flandre_romantique.jpg';
import fond4 from '/home/simplonco/Documents/Projet/SNCF-projet/my-app/img/couple-visuel-tetiere_vsc.jpg';

class SecondeSection extends Component {
    render() {
        return (

            <div className="SecondeSection">

                <img src={fond} className="fondroman" alt="fond"/>

                <div className="textesection2">
                    <p>
                        CITY BREAKS
                    </p>
                </div>

                <div className="buttonsection2">
                    <button className="boutonDecouvrir" type="button">Découvrir</button>
                </div>
                <hr className="Trait" size="1" width="77%" color="black"></hr>

                <div className="paragraphesection2">
                    <b>
                        Plongez-vous au coeur dune ville le temps dun week-end. Gastronomie, culture, shopping, romantisme... Vous navez
                        <br/>
                        pas didées ? Nous avons concocté pour vous une sélection de city breaks à faire selon vos envies ...</b>
                </div>

                <div className="containersection2">

                    <img src={fond2} className="week1" alt="fond2"/>
                    <img src={fond3} className="week2" alt="fond3"/>
                    <img src={fond4} className="week3" alt="fond4"/>

                    <div className="texteweek1">
                        <h3 className="description">
                            Week-end romantique à Bordeaux</h3>
                        <p className="description2">Séjourner dans une chambre d’hôtes cosy, déguster de bons petits plats, voir un ballet au Grand ...
                        </p>
                    </div>

                    <div className="texteweek2">
                        <h3 className="description">Les secrets de la gastronomie lyonnaise : visite guidée
                        </h3>
                        <p className="description2">Lyon est la capitale de la gastronomie française. Et si nous n’en sommes pas totalement ...</p>
                    </div>

                    <div className="texteweek3">
                        <h3 className="description">10 adresses shopping à Rennes</h3>
                        <p className="description2">Boutiques trendy, jeunes créateurs, magasins indépendants, bazars colorés, bons plans gourmands...</p>
                    </div>

                    <div className="Lirelasuite">
                        <p>Lire la suite</p>
                    </div>

                    <div className="Lirelasuite2">
                        <p>Lire la suite</p>
                    </div>

                    <div className="Lirelasuite3">
                        <p>Lire la suite</p>
                    </div>

                </div>

                <div className="buttonsection3">
                    <button className="boutonDecouvrir2" type="button">TOUTE LACTU DES VOYAGES</button>
                </div>

            </div>
        );
    }
}

export default SecondeSection;
