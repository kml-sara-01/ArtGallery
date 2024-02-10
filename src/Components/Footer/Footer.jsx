import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Topbar/Logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faPaperPlane, faX } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faLinkedin, faTwitch, faTwitter, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Footer () {
    return (
        <>
            <div className="Footer">
                {/* <div className="container"> */}
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-12 ft-1">
                            <div className='row'>
                                <Link to="/" className='logo-link'><h1 className='logo'>ArtWise <span>VisionArt</span></h1></Link>  
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <div className='col-md-3 col-lg-3 sections'>
                                <Link to="/">acceuil</Link>
                                <Link to="/collections">Collections</Link>
                                <Link to="/favoris">Favoris</Link>
                                <Link to="/apropos">A propos</Link>
                                {/* <Link to="/">SignUp</Link> */}
                                <Link to="/signIn">SignIn</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <p><FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon> +212 707900954</p>
                            <p><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> kamili.sara@ensam-casa.com</p>
                            <p><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> Casablanca, Maroc</p>
                            
                        </div>
                        
                        <div className='col-md-6 col-lg-3 col-12 ft-3'>
                        <div className='contact'>
                                <button className='contact-button' type='button'>Contacter-Nous</button>
                            </div>
                            <div className="footer-icons">
                                <FontAwesomeIcon className="icons" icon={faFacebook} />
                                <FontAwesomeIcon className="icons" icon={faXTwitter} />
                                <FontAwesomeIcon className="icons" icon={faInstagram} />
                                <FontAwesomeIcon className="icons" icon={faLinkedin} />
                            </div>
                        </div>
                    </div>
                    
                {/* </div> */}
            </div>
            <div className='Last-footer'>
                <p>@2023 | Projet Web | Sara Kamili</p>
            </div>
        </>
    )
}
