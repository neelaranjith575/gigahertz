import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";




const CareersList = ({data}) => {

const date = new Date(data?.publishedAt);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString(undefined, options);

// console.log(data , "data")




    return(
        <>
        <div className="blog" style={{border:'1px solid #575757', paddingLeft:'15px', borderRadius:'10px'}}>
            <div className="thumbnail">
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data?.id}`} className="image">
               </Link>
            </div>
            <div className="info">
                <ul className="meta">
                <li><i className="far fa-calendar"></i>{formattedDate}</li>
                </ul>
                <h3 className="title" style={{fontFamily:'Inter',}}><Link to={process.env.PUBLIC_URL + `/careers-details/${data?.id}`}>{data.jobTitle}</Link></h3>
                <ul className="meta">
                <li><i className="far fa-map"></i>{data?.jobLocation}</li>
                </ul>
                <Link to={process.env.PUBLIC_URL + `/careers-details/${data?.id}`} className="link"> <mark>Apply Now</mark> </Link>
            </div>
        </div>
        </>
    )
}

CareersList.propTypes = {
    data: PropTypes.shape({

        id: PropTypes.number.isRequired,
        jobTitle: PropTypes.string.isRequired,
        jobLocation: PropTypes.string.isRequired,
        jobDescription: PropTypes.string.isRequired,
        jobExperience: PropTypes.string.isRequired,
        jobRequirements: PropTypes.string.isRequired,
        jobResponsibilities: PropTypes.string.isRequired,
        jobIndustry: PropTypes.string.isRequired,
        jobEducation: PropTypes.string.isRequired,
        publishedAt:PropTypes.string.isRequired,
        
      }).isRequired,
};

export default CareersList;



