import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
import {IMAGE_URL} from "../../configuration/url.config"




const BlogItem = ({ data }) => {

   

const date = new Date(data?.publishedAt);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString(undefined, options);


const imageUrl = `${IMAGE_URL}${data?.ThumbImage}`;


    return (
        <div className="blog">
            <div className="thumbnail">
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data?.id}`} className="image">
                <img src={imageUrl} alt="Blog Image"  width="00px" height="300px" /></Link>
            </div>
            <div className="info">
                <ul className="meta">
                <li><i className="far fa-calendar"></i>{formattedDate}</li>
                </ul>
                <h3 className="title" style={{fontFamily:'Inter',}}><Link to={process.env.PUBLIC_URL + `/blog-details/${data?.id}`}>{data.Title}</Link></h3>
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data?.id}`} className="link"> <mark>Read More</mark> </Link>
            </div>
        </div>
    )
}

BlogItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        Title: PropTypes.string.isRequired,
        Long_Description: PropTypes.string.isRequired,
        Short_Description: PropTypes.string.isRequired,
        publishedAt:PropTypes.string.isRequired,
        ThumbImage:PropTypes.string.isRequired,
      }).isRequired,
};

export default BlogItem
