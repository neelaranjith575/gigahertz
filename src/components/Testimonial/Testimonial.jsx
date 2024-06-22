import PropTypes from "prop-types";
import React from 'react';

const Testimonial = ({ data }) => {
    return (
        <div className="static-testimonial mb-6">
            {/* <div className="testimonial-image">
                <img src={process.env.PUBLIC_URL + data.image} alt="" />
            </div> */}
            <div className="testimonial-content">
                <p style={{ fontFamily: 'Inter', fontSize: '16px', color: 'white', fontWeight: 400 }}>{data.desc}</p>
            </div>
            <hr></hr>
            <div className="author-info">
                <div className="cite">
                    <h6 className="name" style={{ fontFamily: 'Bebas Neue', fontSize: '35px', color: 'white', fontWeight: 400 }}>{data?.name}</h6>
                    <span className="position" style={{ fontFamily: 'Inter', fontSize: '12px', color: 'white' }}>{data?.position}</span>
                    <span className="position" style={{ fontFamily: 'Inter', fontSize: '12px', color: 'white' }}>{data?.ratings}</span>
                </div>
            </div>
        </div>
    );
}

Testimonial.propTypes = {
    data: PropTypes.shape({
        desc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        ratings: PropTypes.number.isRequired,
    }).isRequired,
};

export default Testimonial;
