import React from 'react'
import { useParams } from "react-router-dom";
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import BlogClassicData from '../data/blog/BlogClassic.json';
import BlogDetailsContainer from '../container/BlogGrid/BlogDetailsContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const BlogDetails = () => {
    let {id} = useParams();
    const blogId = parseInt(id, 10)
    const data = BlogClassicData.filter(blog => blog.id === blogId);
    console.log(data,"data")
    return (
        <React.Fragment>
            <SEO title="Exomac || Blog Details" />
            <Header />
            <Breadcrumb 
                image={data[0]?.Banner_Image}
                title={data[0]?.title}
                content="Home"
                contentTwo="Blog Classic"
            />
            <BlogDetailsContainer data={data[0]} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default BlogDetails;
