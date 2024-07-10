import React from 'react'
import SEO from '../components/SEO.jsx';
import Header from "../partials/header/Header.jsx";
import Footer from '../container/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Banner from "../assets/images/services/fyp.webp"
import FixYourPcContentPage from '../container/Services/FixYourPcContentPage.js';
import BrandContainer from '../container/Brand/BrandContainer.js';
import { useEffect, useRef } from "react";
import Parallax from 'parallax-js';
import SectionTitle from "../components/SectionTitles/SectionTitle.jsx"
import TestimonialContainer from "../container/Testimonial/TestimonialContainer.js"
import { Typography } from '@mui/material';


const FixYourPc = () => {

    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])


    const mainConten1 = [
        "Report IT issues, track the status, and find the solution with lowest pricing. It's a hassle-free way to manage your tech problems without waiting in long queues.",
    ];
    const mainConten2 = [
        "Get instant, free technical assistance from our knowledgeable support team over the phone. Whether it's a minor glitch or a major issue, our experts are ready to help you resolve it quickly.",
    ];
    const mainConten3 = [
        "Receive immediate help via Microsoft Teams. Our technicians can remotely diagnose and fix issues, saving your time and providing peace of mind with expert assistance right at your fingertips.",
    ];
    const mainConten4 = [
        "Our dedicated team of professionals is available from 9:00 AM to 6:00 PM, including weekends. We ensure that you have access to top-notch support whenever you need it, so your tech problems never have to wait.",
    ];
    const mainConten5 = [
        "Take advantage of our free pickup and delivery service for any hardware repairs or upgrades. We handle the logistics so you can focus on what matters most to you.",
    ];

    const tagLine = "Get your Laptop and Desktop repaired with lower prices at your doorstep and get 100% authentic brand service with from expert technicians."

    return (
        <React.Fragment>
            <SEO title="Gigahertz || FIX YOUR PC" />
            <Header />
            <FixYourPcContentPage
                title="FIX YOUR PC"
                bannerImage={Banner}
                mainContent1={mainConten1}
                mainContent2={mainConten2}
                mainContent3={mainConten3}
                mainContent4={mainConten4}
                mainContent5={mainConten5}
                tagLine={tagLine}
            />
            <BrandContainer classOption="section" />
            <TestimonialContainer />
            <div className="section section-padding-t110-b120 newsletter-section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 m-auto">

                            <Typography sx={{ marginTop: { xs: '30px', md: '20px' }, fontSize: { xs: '25px', md: '40px' }, color: '#000000', fontFamily: 'Inter', fontWeight: 700, }}>We are operational in</Typography>
                            <p>
                                Whitefield, Kundalahalli, KR Puram, Indiranagar, Mahatma Gandhi Road, Majestic, Vijayanagar, Mysuru Road, Rajarajeshwari Nagar, Kengeri, Silkinstitute, Doddakallasandra, Jayprakash Nagar, Jaynagar, Lalbagh, KR Market, Srirampura, Rajajinagar, Yeshwantpur, Peenya, Dasarahalli, Nagasandra, Madavara, Doddajala, Yehlanka, Hebbal, Nagwara, HRBR Layout, Doddanekundi, Marathalli, Bellandur, HSR layout, Silkboard,, BTM, Bommasandra, Electronic city, Kudlu Gate, Kalena Agrahara, Dairy Circle, Langford Town, Shivaji Nagar, Venkateshpura, Nagwara
                            </p>
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
                                    title="Let’s find out how to work together"
                                    subTitle="Get a free consultation now, and get 50% off on your first repair"
                                />
                                <a href="tel:6366746901" className="btn btn-primary btn-hover-secondary mt-6" data-aos="fade-up" data-aos-delay="300">Call - 6366746901</a>
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
        </React.Fragment>
    )
}

export default FixYourPc;
