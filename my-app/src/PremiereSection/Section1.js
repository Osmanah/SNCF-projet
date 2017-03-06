import React, {Component} from 'react';
import './SectionPre.css'
import Section1Image0 from './section1.jpg';
import Section1Image2 from './section1image2.jpg';
import Section1Image3 from './section1image3.jpg';
import Section1Image4 from './section1image4.jpg';
import Section1Image5 from './section1deuxiemeP.jpg';

// PLACER ICI VOTRE LIEN D'IMPORT

class Section1 extends Component {
    render() {
        return (
            <div className="Section1">
                <article className="section1Article">
                    <div className="section1Content">
                        <h2 className="section1ContentHeader">DÉCOUVREZ NOS BONS PLANS</h2>

                        <div className="section1ContentGeneral">

                            <div className="section1Content1">

                                <img src={Section1Image0} className="section1ContentImage" alt=""/>
                                <div className="section1ContentDis">
                                    <h4 className="section1ContentE-Billet">Jusqu'au 6 mars</h4>
                                    <span>
                                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="section1ContentDiscriptionDiv"></div>
                                <h3 className="section1ContentDiscriptionH3">OFFRE
                                    <br/>
                                    EXEPTIONELLE</h3>
                                <p className="section1ContentDiscriptionP">Profitez du billet enfant à 10€ des
                                    <br/>
                                    l'achat d'un billet adulte TGV pour
                                    <br/>
                                    les vacances de Paques !</p>

                                <div className="section1ContentButton">
                                    <div className="section1ContentPDiv">
                                        <p className="section1ContentP">J'en profite</p>
                                    </div>
                                    <div className="section1ContentIconDiv">
                                        <span className="section1ContentIconSpan">
                                            <i id="section1ContentIcon" className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="section1Content2">

                                <img src={Section1Image2} className="section1ContentImage" alt=""/>
                                <div className="section1ContentDis">
                                    <h4 className="section1ContentE-Billet">Promotion</h4>
                                    <span>
                                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="section1ContentDiscriptionDiv"></div>
                                <h3 className="section1ContentDiscriptionH3">OUI AUX BILLETS
                                    <br/>
                                    INOUIS</h3>
                                <p className="section1ContentDiscriptionP">Vous n'estes pas encore parti en
                                    <br/>
                                    vacences? Profitez des billets
                                    <br/>
                                    inOUIs pour voyager en France!</p>

                                <div className="section1ContentButton">
                                    <div className="section1ContentPDiv">
                                        <p className="section1ContentP">A moins de 10€</p>
                                    </div>
                                    <div className="section1ContentIconDiv">
                                        <span className="section1ContentIconSpan">
                                            <i id="section1ContentIcon" className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="section1Content3">

                                <img src={Section1Image3} className="section1ContentImage" alt=""/>
                                <div className="section1ContentDis3">
                                    <span>
                                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="section1ContentDiscriptionDiv3">
                                    <h3 className="section1ContentDiscriptionH33">LOCATION DE
                                        <br/>
                                        VOITURE</h3>
                                    <p className="section1ContentDiscriptionP">Profitez de nos tarifs négociés en
                                        <br/>France et à l'international
                                        <br/><br/></p>
                                </div>
                                <div className="section1ContentButton">
                                    <div className="section1ContentPDiv">
                                        <p className="section1ContentP">Dés 35€/sem</p>
                                    </div>
                                    <div className="section1ContentIconDiv">
                                        <span className="section1ContentIconSpan">
                                            <i id="section1ContentIcon" className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="section1Content4">

                                <img src={Section1Image4} className="section1ContentImage" alt=""/>
                                <div className="section1ContentDis3">
                                    <span >
                                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="section1ContentDiscriptionDiv3">
                                    <h3 className="section1ContentDiscriptionH34">VENTE FLASH HÔTEL/
                                        <br/>
                                        VOL+HÔTEL</h3>
                                    <p className="section1ContentDiscriptionP">Profitez de nos meilleures offres
                                        <br/>
                                        Hôtel et Vol+Hôtel dans le monde !
                                        <br/>
                                        <br/></p>
                                </div>
                                <div className="section1ContentButton">
                                    <div className="section1ContentPDiv">

                                        <p className="section1ContentP">Jusqu'a -70%</p>
                                    </div>
                                    <div className="section1ContentIconDiv">
                                        <span className="section1ContentIconSpan">
                                            <i id="section1ContentIcon" className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>

                <div className="section1Partie2ImageDiv">
                    <img src={Section1Image5} className="section1DeuxiemeP" alt=""/>
                </div>

                <article className="section1Partie3">
                    <div className="section1Partie3Div">
                        <h2 className="section1Partie3H2">
                            LAISSER-VOUS TRANSPORTER</h2>
                        <div className="section1Partie3Logos">
                            <p className="section1Partie3LogosP">
                                <img src='http://www.voyages-sncf.com/sites/default/files/tgv_11.png' className="section1ContentImage0" alt=""/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/idtgv_4.png' className="section1ContentImage1" alt=""/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/ouigo_7.png' className="section1ContentImage2" alt=""/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/intercites_5.png' className="section1ContentImage3" alt=""/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/ter_6.png' className="section1ContentImage4" alt=""/>

                                <img src='http://www.voyages-sncf.com/sites/default/files/thalys_10.png' className="section1ContentImage5" alt=""/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/eurostar_11.png' className="section1ContentImage6" alt=""/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/lyria_2.png' className="section1ContentImage7" alt=""/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/ouibus_0.png' className="section1ContentImage8" alt=""/>
                                <img src='http://www.voyages-sncf.com/sites/default/files/eurolines_0.png' className="section1ContentImage9" alt=""/>
                            </p>
                        </div>
                        <div className="section1ButtonDiv">
                            <button type="button" className="section1Button">
                                <span className="section1ButtonSpan">Et bien d'autre...</span>
                            </button>
                        </div>
                    </div>
                </article>

            </div>
        );
    }
}

export default Section1;
