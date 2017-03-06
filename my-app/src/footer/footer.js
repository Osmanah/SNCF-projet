import React, {Component} from 'react';
import img2 from './Allianz.jpg';
import img3 from './Railteam.png';
import img1 from './voyages.png';
import img4 from './appli1.png';
import img5 from './appli2.png';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="footer-top">
                    <div><img className="footer-top-logo" src={img1} alt="logo"/></div>
                    <div className="paraph">
                        <p>Voyages-sncf.com est le distributeur de voyages en ligne de SNCF sur la France, l'Europe et le monde : préparez vos voyages, réservez vos billets de train, vol, séjour...</p>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <h3>Nos partenaires</h3>
                        <div>
                            <a href=""><img src={img2} alt=""/></a>
                            <a href=""><img src={img3} alt=""/></a>
                        </div>
                    </div>
                    <div className="button">
                        <div className="newsletter">
                            <form id="input" action="#">
                                <div className="column">
                                    <div className="newsl">
                                        <input id="" name="" value="" type="hidden"/>
                                        <span className="">NEWSLETTER</span>
                                        <br></br>
                                        <label for="">RECEVEZ NOS BONS PLANS</label>
                                    </div>
                                    <div id="input" className="input">
                                        <input id="input" className="input" maxLength="128" name="" value="" type="text"/>
                                        <input id="input" className="input" name="newsletter-submit" value="OK" type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footerrowtable">
                    <div className="column">
                        <div>
                            <div className="footer-column-header">
                                <h3>VOUS INFORMER</h3>
                            </div>
                            <ul className="footer-ul">
                                <li>
                                    <a href="">Aide et Information Voyageur</a>
                                </li>
                                <li>
                                    <a href="">Mes commandes</a>
                                </li>
                                <li>
                                    <a href="">Contactez-nous</a>
                                </li>
                                <li>
                                    <a href="">#OpenVSC</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div className="">
                            <div className="vsc_footer-social-title">
                                <h3>SUIVEZ NOUS !</h3>
                            </div>
                            <ul className="column-social">
                                <li className="social">
                                    <a href="">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="social">
                                    <a href="">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="social">
                                    <a href="">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="social">
                                    <a href="">
                                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="social">
                                    <a href="">
                                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">
                        <div>
                            <h3>NOS APPLIS MOBILES</h3>
                            <ul className="apli">
                                <li className="apli"><img src={img4} alt=""/></li>
                                <li className="apli"><img src={img5} alt=""/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="column">

                        <div className="engage">
                            <div>
                                <h3>NOS ENGAGEMENTS</h3>
                                <ul>
                                    <li>
                                        <a href="">Paiment sécurisé</a>
                                    </li>
                                    <li>
                                        <a href="">Meilleurs prix garantis</a>
                                    </li>
                                    <li>
                                        <a href="">Contact 7j/</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Footer;
