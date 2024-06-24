import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchBlogDetails } from '../../api/blogs';
import { IMAGE_URL } from '../../configuration/url.config';


const BlogDetails = ({ data }) => {
    const [blog, setBlog] = useState(data || null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const getBlogDetails = async () => {
            try {
                const data = await fetchBlogDetails(id);
                setBlog(data?.data || null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (!data && id) {
            getBlogDetails();
        } else {
            setLoading(false);
        }
    }, [id, data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blog) {
        return <div>No blog found</div>;
    }


    const imageUrl = `${IMAGE_URL}${blog?.attributes?.ThumbImage?.data?.attributes?.url}`;
    // console.log(imageUrl, "imageUrl")
    

    return (
        <div className="blog-3 blog-details col" >
            <div className="thumbnail">
                <img className="w-100"  src={imageUrl} alt="Blog Image"  />
            </div>
            <div className="info">
                <h3 className="title" style={{fontFamily:'Inter', }}>{blog?.attributes?.Title}</h3>
                <p>{blog?.attributes?.Long_Description}</p>
                <ul className="meta mb-0 mt-12">
                    <li><i className="fa fa-pencil-alt"></i>By Gigaherts Admin</li>
                    <li><i className="far fa-calendar"></i>{blog?.attributes?.publishedAt}</li>
                </ul>
            </div>
        </div>
    );
};

BlogDetails.propTypes = {
    data: PropTypes.shape({
        attributes: PropTypes.shape({
            PostBy:PropTypes.string.isRequired,
            Title: PropTypes.string.isRequired,
            Category:PropTypes.string.isRequired,
            Long_Description: PropTypes.string.isRequired,
            Short_Description: PropTypes.string.isRequired,
            publishedAt: PropTypes.string.isRequired,
            imageUrl:PropTypes.string.isRequired,
        }),
    }),
};

BlogDetails.defaultProps = {
    data: null,
};

export default BlogDetails;
