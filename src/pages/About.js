import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import AboutFour from '../container/About/AboutFour';
import TestimonialContainer from '../container/Testimonial/TestimonialContainer';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';







const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="Gigahertz || About Us" />
            <Header />
            <Breadcrumb 
                bannerImage="images/bg/breadcrumb-bg.jpg"
                title="About Us"
            />
            <AboutFour />
            
            <TestimonialContainer classOption="bg-primary-blue" />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;



