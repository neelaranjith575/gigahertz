

import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import CareerInfo from '../container/Careers/CarrerrInfo.js';
import GoogleMap from '../container/Map/GoogleMap';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const careerDetail = () => {
    return (
        <React.Fragment>
            <SEO title="Gigahertz || Careers Details" />
            <Header />
            <Breadcrumb
                bannerImage="images/bg/breadcrumb-bg.jpg"
                title="Contact Us"
                content="Home"
                contentTwo="Contact Us"
            />
            <CareerInfo />
            <GoogleMap />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default careerDetail;

