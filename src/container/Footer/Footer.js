import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../components/logo/Logo';
import FooterData from '../../data/Footer/footerItem.json';
import FooterLinkItem from '../../components/Footer/FooterLinkItem.jsx';
import FooterLogo from "../../assets/images/logo/logofooter.png"

const Footer = () => {
    return (
        <div className="footer-section section footer-bg-color">
            <div className="container">
                <div className="row  mb-2">

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Logo 
                                    image={FooterLogo}
                                />
                            </div>
                            <div className="footer-widget-content">
                                <div className="content">


                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {FooterData && FooterData.map((single, key) => {
                            return(
                                <div key={key} className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 mb-6">
                                    <div className="footer-social-inline">
                                    <a href="/" style={{color:'white', fontFamily:'Inter'}}>HOME</a>
                                    <a href="/about"style={{color:'white', fontFamily:'Inter'}}>ABOUT US</a>
                                    {/* <a href="#"style={{color:'white',fontFamily:'Inter'}}>PRODUCTS & SERVICES</a>
                                    <a href="#"style={{color:'white', fontFamily:'Inter'}}>SUPPORT</a>
                                    <a href="#"style={{color:'white', fontFamily:'Inter'}}>RESOURCES</a> */}
                                    <a href="/blogs"style={{color:'white', fontFamily:'Inter'}}>BLOGS</a>
                                    <a href="/careers"style={{color:'white', fontFamily:'Inter'}}>CAREERS</a>
                                    <a href="/contact"style={{color:'white', fontFamily:'Inter'}}>CONTACT US</a>
                                    

                                    </div>
                                  
                                    <div className="footer-social-inline">
                                    <a href="#" style={{backgroundColor:'white', padding:'10px', borderRadius:'30px', color:'#116FC6'}}><i className="fab fa-twitter-square"></i></a>
                                    <a href="#"style={{backgroundColor:'white',  padding:'10px', borderRadius:'30px', color:'#116FC6'}}><i className="fab fa-facebook-square"></i></a>
                                    <a href="#" style={{backgroundColor:'white',  padding:'10px', borderRadius:'30px', color:'#116FC6'}}><i className="fab fa-instagram"></i></a>
                                    <a href="#" style={{backgroundColor:'white',  padding:'10px', borderRadius:'30px', color:'#116FC6' }}><i className="fab fa-linkedin"></i></a>
                                </div>
                                </div>
                            ); 
                    })}


                </div>

                <div className="row">
                    <div className="col">
                        <p className="copyright">&copy; {new Date().getFullYear()} <strong> - Gigahertz Computing (India) Private Limited</strong> Made with <i className="fas fa-heart text-danger"></i> by <a href="#"><strong>Webxinfinity</strong></a>.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
