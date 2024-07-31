import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import PageBlog from '../container/BlogGrid/PageBlog';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Banner from "../assets/images/services/blogser1.png";


const BlogGrid = () => {
    return (
        <React.Fragment>
            <SEO title="Gigahertz || Blogs" />
            <Header />
            <Breadcrumb
                bannerImage={Banner}
                title="Blogs"
                content="Home"
                contentTwo="Blog"
            />
            <PageBlog />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default BlogGrid;
