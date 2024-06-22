import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import BrandContainer from '../container/Brand/BrandContainer';
import ContactInformationTwo from '../container/ContactInformation/ContactInformationTwo';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import HomeSkillWithVideo from '../container/HomeSkillWithVideo/HomeSkillWithVideo';
import HomeBanner from "../container/HomeBanner/HomeBanner"
import HomeServices from '../components/HomeServices/HomeServices.jsx';
import ManageServices from '../components/HomeServices/ManageServices.jsx';
import TestimonialContainer from '../container/Testimonial/TestimonialContainer';


const HomeOne = () => {
    return (
        <React.Fragment>
            <SEO title="Home – Gigahurtz" />
            <Header />
            <HomeBanner />
            <BrandContainer classOption="section" />
            <HomeServices />
            <HomeSkillWithVideo />
            <ManageServices />
            <TestimonialContainer />
            <ContactInformationTwo />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeOne;



