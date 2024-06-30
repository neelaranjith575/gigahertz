import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from '../../components/Blog/BlogDetails.jsx';
import SidebarWrap from '../../components/Sidebar/SidebarWrap.jsx';
import SidebarWidget from '../../components/Sidebar/SidebarWidget.jsx';
import SidebarTitle from '../../components/Sidebar/SidebarTitle';
import SidebarSearch from '../../components/Sidebar/SidebarSearch.jsx';
import SidebarCategories from '../../components/Sidebar/SidebarCategories.jsx';
import SidebarPost from '../../components/Sidebar/SidebarPost.jsx';
import SEO from '../../components/SEO.jsx';
import Header from '../../partials/header/Header.jsx';
import Breadcrumb from '../Breadcrumb/Breadcrumb.js';
import CallToAction from '../CallToAction/CallToAction.js';
import ScrollToTop from '../../components/ScrollToTop.jsx';
import Footer from '../Footer/Footer.js';
import { fetchBlogDetails } from '../../api/blogs.js';
import { IMAGE_URL } from '../../configuration/url.config.js';


const BlogDetailsContainer = ({ initialData }) => {
    const [blog, setBlog] = useState(initialData || null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams(); // Get the id from the route parameters

    useEffect(() => {
        const getBlogDetails = async () => {
            try {
                const data = await fetchBlogDetails(id);
                console.log(data, "data");
                setBlog(data?.data || null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (!initialData && id) {
            getBlogDetails();
        } else {
            setLoading(false);
        }
    }, [id, initialData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    const BannerimageUrl = `${IMAGE_URL}${blog?.attributes?.Banner_Image?.data?.attributes?.url}`;
    console.log(BannerimageUrl, "imageUrl")

    return (
        <React.Fragment>
            <SEO title={`Gigahertz || ${blog?.attributes?.Title}`} />
            <Header />
            <Breadcrumb
                bannerImage={BannerimageUrl}
                title={blog?.attributes?.Title}
                content="Home"
                contentTwo="Blog Details"
            />
            <div className="section section-padding fix">
                <div className="container">
                    <div className="row mb-n10">
                        <div className="col-lg-8 col-12 order-lg-1 mb-10">
                            <div className="row row-cols-1">
                                <BlogDetails data={initialData} />
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 order-lg-2 mb-10">
                            <SidebarWrap>
                                {/* <SidebarWidget>
                                    <SidebarSearch />
                                </SidebarWidget>
                                <SidebarWidget>
                                    <SidebarTitle title="Categories" />
                                    <SidebarCategories />
                                </SidebarWidget> */}
                                <SidebarWidget>
                                    <h1 className='text' style={{fontFamily:'Inter', }}>LATEST POSTS</h1>
                                    <hr></hr>
                                    <SidebarTitle classOption="mb-2" title="" />
                                    <SidebarPost />
                                </SidebarWidget>
                                {/* <SidebarWidget>
                                    <SidebarBanner />
                                </SidebarWidget> */}
                                {/* <SidebarWidget>
                                    <SidebarTitle title="Popular tags" />
                                    <SidebarTag />
                                </SidebarWidget> */}
                            </SidebarWrap>
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    );
};

BlogDetailsContainer.propTypes = {
    initialData: PropTypes.shape({
        attributes: PropTypes.shape({
            PostBy: PropTypes.string.isRequired,
            Title: PropTypes.string.isRequired,
            Category: PropTypes.string.isRequired,
            Long_Description: PropTypes.string.isRequired,
            Short_Description: PropTypes.string.isRequired,
            publishedAt: PropTypes.string.isRequired,
            imageUrl:PropTypes.string.isRequired,
            Author:PropTypes.string.isRequired,
            Author_Description:PropTypes.string.isRequired,
            Banner_Image:PropTypes.string.isRequired,
            Images:PropTypes.string.isRequired,

        }),
    }),
};

export default BlogDetailsContainer;
