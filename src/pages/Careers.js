import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import PageCareerList from '../container/Careers/PageCareerList.js';


const Careers = () => {
    return (
        <React.Fragment>
            <SEO title="Gigahertz || Careers" />
            <Header />
            <Breadcrumb 
                bannerImage="images/bg/breadcrumb-bg.jpg"
                title="Careers"
                content="Home"
                contentTwo="Careers"
            />
            <PageCareerList />
          
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Careers;

