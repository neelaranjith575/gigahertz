import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import GoogleMap from '../container/Map/GoogleMap';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const Contact = () => {
    return (
        <React.Fragment>
            <SEO title="Gigahertz || Contact Us" />
            <Header />
            <Breadcrumb
                bannerImage="images/bg/7.png"
                title="Contact Us"
                content="Home"
                contentTwo="Contact Us"
            />
            <ContactInformation />
            <GoogleMap />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Contact;

