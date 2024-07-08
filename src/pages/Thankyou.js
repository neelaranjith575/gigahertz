


import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const Thankyou = () => {
    return (
        <React.Fragment>
            <SEO title="Gigahertz || Thank you for Submitting" />
            <Header />
            <Breadcrumb
                bannerImage="images/bg/7.png"
                title="Thank you"
                content="Home"
                contentTwo="Thank you"
            />
            {/* <h1 className='text'>Thank you for Submitting</h1> */}
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Thankyou;

