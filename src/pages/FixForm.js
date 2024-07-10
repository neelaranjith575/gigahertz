import React from 'react'
import SEO from '../components/SEO.jsx';
import Header from "../partials/header/Header.jsx";
import Footer from '../container/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Banner from "../assets/images/services/fyp.webp"
import { useEffect, useRef } from "react";
import Parallax from 'parallax-js';
import SectionTitle from "../components/SectionTitles/SectionTitle.jsx"
import { Typography, Stack } from '@mui/material';
import FixYourPcForm from '../components/FixYourPcForm/FixYourPcForm.jsx';


const FixForm = () => {

    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])


    return (
        <React.Fragment>
            <SEO title="Gigahertz || FIX YOUR PC" />
            <Header />
            <Stack className="page-title-section section section-padding-top overlay-two" sx={{
                backgroundImage: `url(${Banner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: { xs: '44vh', md: '88vh' },
            }}></Stack>
            <Stack className="page-title" style={{
                backgroundColor: '#ECF2F7',
                padding: '5px',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <Stack className="container">
                    <h1 className='text' style={{
                        fontFamily: 'Bebas Neue',
                        paddingTop: '35px',
                        color: '#116FC6',
                        textAlign: 'center',
                        marginTop: '-20px'
                    }}>Submit Form</h1>
                </Stack>
            </Stack>
            <div className="contact-form-section section section-padding-t90-b100 bg-primary-blue">
                <div className="container">
                    <div className="row">
                        <div >
                            <SectionTitle
                                headingOption="fz-32"
                                title="FILL THE ISSUE HERE"
                                subTitle=""
                            />
                            <FixYourPcForm />
                        </div>
                    </div>
                </div>
            </div>
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

export default FixForm;
