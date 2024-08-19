import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="footer-section section footer-bg-color">
            <div className="container mt-5 mb-5" >
                <div className="row  mt-5 mb-5" style={{ borderTop: '1px solid white' }}>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12 col-12 mb-1 mt-5">
                        <div className="footer-widget">
                            <div className="footer-widget-content">
                                <a href="https://www.gigahertz.in/" target='_blank' style={{ color: 'white', fontFamily: 'Inter', textTransform: 'uppercase', fontSize: '16px' }} rel="noreferrer">Ecommerce</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 col-12 mb-1 mt-5">
                        <div className="footer-widget">
                            <div className="footer-widget-content">
                                <a href="https://gigahertzconsultants.com/services/cloud-giga" target='_blank' style={{ color: 'white', fontFamily: 'Inter', textTransform: 'uppercase', fontSize: '16px' }} rel="noreferrer">Cloud & Cyber Security</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 col-12 mb-1 mt-5">
                        <div className="footer-widget">
                            <div className="footer-widget-content">
                                <a href="https://geispl.in/" target='_blank' style={{ color: 'white', fontFamily: 'Inter', textTransform: 'uppercase', fontSize: '16px' }} rel="noreferrer">Renewable energy</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12 col-12 mb-1 mt-5">
                        <div className="footer-widget">
                            <div className="footer-widget-content">
                                <p style={{ color: 'white', fontFamily: 'Inter', textTransform: 'uppercase', fontSize: '16px', fontWeight: 500 }}>Help</p>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <div className="footer-widget-content">
                                <a href="https://gigahertzcomp.com/support/login.php" style={{
                                    color: 'white', fontFamily: 'Inter', fontSize: '15px', fontWeight: 'normal',
                                }} target="_blank" rel="noreferrer"
                                >Support</a>

                            </div>
                        </div>
                        <div className="footer-widget">
                            <div className="footer-widget-content">
                                <Link to="/contact" style={{ color: 'white', fontFamily: 'Inter', fontSize: '16px', fontWeight: 'normal' }}>Contact</Link>

                            </div>
                        </div>
                        <div className="footer-widget">
                            <div className="footer-widget-content">
                                <Link to="/careers" style={{ color: 'white', fontFamily: 'Inter', fontSize: '16px', fontWeight: 'normal' }}>Careers</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12 col-12 mb-6 mt-5">
                        <div className="footer-widget">
                            <div className="footer-widget-content">
                                <div className="footer-social-inline">
                                    <a href="https://x.com/GigahertzComp" style={{ padding: '5px', borderRadius: '30px', color: '#ffffff' }}><i className="fab fa-twitter-square"></i></a>
                                    <a href="https://www.facebook.com/gigahertzcomputingindiapvtltd" style={{ padding: '5px', borderRadius: '30px', color: '#ffffff' }}><i className="fab fa-facebook-square"></i></a>
                                    {/* <a href="#" style={{ padding: '5px', borderRadius: '30px', color: '#ffffff' }}><i className="fab fa-instagram"></i></a> */}
                                    <a href="https://www.linkedin.com/company/gigahertz-computing/" style={{ padding: '5px', borderRadius: '30px', color: '#ffffff' }}><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {FooterData && FooterData.map((single, key) => {
                        return (
                            <div key={key} className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 mb-6">
                                <div className="footer-social-inline">
                                    <a href="/" style={{ color: 'white', fontFamily: 'Inter' }}>HOME</a>
                                    <a href="/about" style={{ color: 'white', fontFamily: 'Inter' }}>ABOUT US</a>
                                    <a href="/blogs" style={{ color: 'white', fontFamily: 'Inter' }}>BLOGS</a>
                                    <a href="/careers" style={{ color: 'white', fontFamily: 'Inter' }}>CAREERS</a>
                                    <a href="/contact" style={{ color: 'white', fontFamily: 'Inter' }}>CONTACT US</a>
                                </div>


                            </div>
                        );
                    })} */}


                </div>

                <div className="row">
                    <div className="col">
                        <p className="copyright">&copy; {new Date().getFullYear()} <strong> - Gigahertz Computing (India) Private Limited</strong>.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
