import React, {Component} from 'react';
import './SectionPre.css';
import Section1Image from '/home/osman/SNCF-projet/my-app/img/section1.jpg';
import Section1Image2 from '/home/osman/SNCF-projet/my-app/img/section1image2.jpg';
import Section1Image3 from '/home/osman/SNCF-projet/my-app/img/section1image3.jpg';
import Section1Image4 from '/home/osman/SNCF-projet/my-app/img/section1image4.jpg';
import Section1Image5 from '/home/osman/SNCF-projet/my-app/img/section1deuxiemeP.jpg';

// PLACER ICI VOTRE LIEN D'IMPORT

class Section1 extends Component {
    render() {
        return (
            <div className="Section1">
                <article className="Section1Article">
                    <div className="Section1Content">
                        <h2 className="Section1ContentHeader">DÉCOUVREZ NOS BONS PLANS</h2>

                        <div className="Section1ContentGeneral">

                            <div className="Section1Content1">

                                <img src={Section1Image} className="Section1ContentImage" alt="image"/>
                                <div className="section1ContentDis">
                                    <h4 className="Section1ContentE-Billet">Jusqu'au 6 mars</h4>
                                    <span>
                                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="Section1ContentDiscriptionDiv"></div>
                                <h3 className="Section1ContentDiscriptionH3">OFFRE
                                    <br/>
                                    EXEPTIONELLE</h3>
                                <p className="Section1ContentDiscriptionP">Profitez du billet enfant à 10€ des
                                    <br/>
                                    l'achat d'un billet adulte TGV pour
                                    <br/>
                                    les vacances de Paques !</p>

                                <div className="Section1ContentButton">
                                    <div className="Section1ContentPDiv">
                                        <p className="Section1ContentP">J'en profite</p>
                                    </div>
                                    <div className="Section1ContentIconDiv">
                                        <span className="Section1ContentIconSpan">
                                            <i id="Section1ContentIcon" className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="Section1Content2">

                                <img src={Section1Image2} className="Section1ContentImage" alt="image"/>
                                <div className="section1ContentDis">
                                    <h4 className="Section1ContentE-Billet">Promotion</h4>
                                    <span>
                                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="Section1ContentDiscriptionDiv"></div>
                                <h3 className="Section1ContentDiscriptionH3">OUI AUX BILLETS
                                    <br/>
                                    INOUIS</h3>
                                <p className="Section1ContentDiscriptionP">Vous n'estes pas encore parti en
                                    <br/>
                                    vacences? Profitez des billets
                                    <br/>
                                    inOUIs pour voyager en France!</p>

                                <div className="Section1ContentButton">
                                    <div className="Section1ContentPDiv">
                                        <p className="Section1ContentP">A moins de 10€</p>
                                    </div>
                                    <div className="Section1ContentIconDiv">
                                        <span className="Section1ContentIconSpan">
                                            <i id="Section1ContentIcon" className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="Section1Content3">

                                <img src={Section1Image3} className="Section1ContentImage" alt="image"/>
                                <div className="section1ContentDis3">
                                    <span>
                                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="Section1ContentDiscriptionDiv3">
                                    <h3 className="Section1ContentDiscriptionH33">LOCATION DE
                                        <br/>
                                        VOITURE</h3>
                                    <p className="Section1ContentDiscriptionP">Profitez de nos tarifs négociés en
                                        <br/>France et à l'international
                                        <br/><br/></p>
                                </div>
                                <div className="Section1ContentButton">
                                    <div className="Section1ContentPDiv">
                                        <p className="Section1ContentP">Dés 35€/sem</p>
                                    </div>
                                    <div className="Section1ContentIconDiv">
                                        <span className="Section1ContentIconSpan">
                                            <i id="Section1ContentIcon" className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="Section1Content4">

                                <img src={Section1Image4} className="Section1ContentImage" alt="image"/>
                                <div className="section1ContentDis3">
                                    <span >
                                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="Section1ContentDiscriptionDiv3">
                                    <h3 className="Section1ContentDiscriptionH34">VENTE FLASH HÔTEL/
                                        <br/>
                                        VOL+HÔTEL</h3>
                                    <p className="Section1ContentDiscriptionP">Profitez de nos meilleures offres
                                        <br/>
                                        Hôtel et Vol+Hôtel dans le monde !
                                        <br/>
                                        <br/></p>
                                </div>
                                <div className="Section1ContentButton">
                                    <div className="Section1ContentPDiv">

                                        <p className="Section1ContentP">Jusqu'a -70%</p>
                                    </div>
                                    <div className="Section1ContentIconDiv">
                                        <span className="Section1ContentIconSpan">
                                            <i id="Section1ContentIcon" className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>

                <div className="section1Partie2ImageDiv">
                    <img src={Section1Image5} className="Section1DeuxiemeP" alt="image"/>
                </div>

                <article className="section1Partie3">
                    <div className="section1Partie3Div">
                        <h2 className="section1Partie3H2">
                            LAISSER-VOUS TRANSPORTER</h2>
                        <div className="section1Partie3Logos">
                            <p className="section1Partie3LogosP">
                                <img src='http://www.voyages-sncf.com/sites/default/files/tgv_11.png' className="Section1ContentImage0" alt="image"/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/idtgv_4.png' className="Section1ContentImage1" alt="image"/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/ouigo_7.png' className="Section1ContentImage2" alt="image"/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/intercites_5.png' className="Section1ContentImage3" alt="image"/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/ter_6.png' className="Section1ContentImage4" alt="image"/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/thalys_10.png' className="Section1ContentImage5" alt="image"/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/eurostar_11.png' className="Section1ContentImage6" alt="image"/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/lyria_2.png' className="Section1ContentImage7" alt="image"/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/ouibus_0.png' className="Section1ContentImage8" alt="image"/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/eurolines_0.png' className="Section1ContentImage9" alt="image"/>
                            </p>
                        </div>
                    </div>
                </article>

            </div>
        );
    }
}

export default Section1;
