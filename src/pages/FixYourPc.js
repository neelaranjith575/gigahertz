import React, { useEffect, useRef } from 'react';
import SEO from '../components/SEO.jsx';
import Header from "../partials/header/Header.jsx";
import Footer from '../container/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Banner from "../assets/images/services/fyp.webp";
import FixYourPcContentPage from '../container/Services/FixYourPcContentPage.js';
import Parallax from 'parallax-js';
import SectionTitle from "../components/SectionTitles/SectionTitle.jsx";
import TestimonialContainer from "../container/Testimonial/TestimonialContainer.js";
import { Typography } from '@mui/material';
import BrandService from '../container/Brand/BrandServices.js';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Assuming you're using Material-UI Icons

const FixYourPc = () => {

    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);

    const mainConten1 = ["Customers can submit a query via the form available on the website (or) We are just a call away! Directly contact the Service Support on the support no."];
    const mainConten2 = ["A Technician is assigned. You will receive a call from the who will offer on-call support or schedule onsite assistance based on the requirement."];
    const mainConten3 = ["Technicians determine if the issue can be resolved remotely or if onsite support is needed for system errors."];
    const mainConten4 = ["Service Engineer handles the call through Teams Meeting and the issue is resolved in the presence of the customer."];
    const mainConten7 = ["A Service Engineer will visit the site on a mutually agreed scheduled time, analyses the issue. If it can't be resolved on-site, the device will be picked up and taken for further analysis and resolution to Gigahertz Service Center. The asset will be delivered back to the customer upon resolution."];
    const mainConten5 = ["The Service call is closed post the confirmation from the customer."];
    const mainConten6 = ["An invoice is generated post service call closure. Payment is processed via multiple payment options - UPI, Bank Transfer, Cash."];

    const tagLine = "Get your Laptop and Desktop repaired with lowest prices at your doorstep and get 100% authentic service from our expert technicians."

    return (
        <React.Fragment>
            <SEO title="Gigahertz || PCaaS - Simplify your IT needs with our @Home Services" />
            <Header />
            <FixYourPcContentPage
                title="PCaaS - Simplify your IT needs with our @Home Services"
                bannerImage={Banner}
                mainContent1={mainConten1}
                mainContent2={mainConten2}
                mainContent3={mainConten3}
                mainContent4={mainConten4}
                mainContent5={mainConten5}
                mainContent6={mainConten6}
                mainContent7={mainConten7}
                tagLine={tagLine}
            />

            <BrandService classOption="section" />

            <TestimonialContainer />
            <div className="section section-padding-t110-b120 newsletter-section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 m-auto">
                            <Typography sx={{ marginTop: { xs: '30px', md: '20px' }, fontSize: { xs: '25px', md: '38px' }, color: '#116FC6', fontFamily: 'Inter', fontWeight: 700, textAlign: 'center', textTransform: 'uppercase' }}>
                                WE ARE OPERATIONAL ACROSS BANGALORE, JUST A CLICK AWAY!
                            </Typography>
                            {/* <p style={{
                                fontFamily: 'Inter',
                                color: '#525252'
                            }}>
                                Whitefield, Kundalahalli, KR Puram, Indiranagar, Mahatma Gandhi Road, Majestic, Vijayanagar,
                                Mysuru Road, Rajarajeshwari Nagar, Kengeri, Silk institute, Doddakallasandra, Jayprakash Nagar,
                                Jayanagar, Lalbagh, KR Market, Srirampura, Rajajinagar, Yeshwantpur, Peenya, Dasarahalli,
                                Nagasandra, Madavara, Doddajala, Yehlanka, Hebbal, Nagwara, HRBR Layout, Doddanekundi,
                                Marathalli, Bellandur, HSR layout, Silkboard,, BTM, Bommasandra, Electronic city, Kudlu Gate, Kalena
                                Agrahara, Dairy Circle, Langford Town, Shivaji Nagar, Venkateshpura, Nagwara, Malleshwarem , RT
                                Nagar, Sadahiv Nagar
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/newsletter.jpg)` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 m-auto">
                            <div className="cta-content text-center">
                                <SectionTitle
                                    style={{ fontFamily: 'Inter' }}
                                    titleOption="color-light text-center mb-0"
                                    title="Get a free consultation now, and avail free service on your first request"
                                    subTitle=""
                                />
                                <a href="tel:6366746901" className="btn btn-primary btn-hover-secondary mt-6" data-aos="fade-up" data-aos-delay="300" target='_blank' style={{ marginRight: '10px' }} rel="noreferrer">Call - 6366746901</a>
                                <a href="https://wa.me/916366746894" className="btn btn-primary btn-hover-secondary mt-6" data-aos="fade-up" data-aos-delay="300" style={{ backgroundColor: '#25d366', marginLeft: "10px", border: '1px solid #25d366' }} target='_blank' rel='noreferrer'>Whatsapp Us</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape shape-1" id="scene" ref={sceneEl}>
                    <span data-depth="1">
                        <img src={process.env.PUBLIC_URL + '/images/shape-animation/newsletter-shape.png'} alt="" />
                    </span>
                </div>
            </div>

            <Footer />
            <ScrollToTop />


            {/* <a href="https://wa.me/916366746894"
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer">
                <WhatsAppIcon style={{
                    fontSize: '40px',
                    color: '#ffffff'
                }} />
            </a>


            <style>
                {`
                .whatsapp_float {
                    position: fixed;
                    bottom: 20px;
                    left: 20px;
                    background-color: #25D366;
                    color: white;
                    border-radius: 50%;
                    padding: 10px;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
                    z-index: 1000;
                    transition: transform 0.3s;
                }
                .whatsapp_float:hover {
                    transform: scale(1.1);
                }
                `}
            </style> */}
        </React.Fragment>
    )
}

export default FixYourPc;
