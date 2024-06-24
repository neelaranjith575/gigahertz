import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

const Testimonial = ({ data }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FFA41B" }} />
        );
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            style={{ color: "#FFA41B" }}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarEmpty}
            style={{ color: "#FFA41B" }}
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="static-testimonial mb-6">
    
      <div className="testimonial-content">
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            color: "white",
            fontWeight: 400,
          }}
        >
          {data.desc}
        </p>
      </div>
      <hr></hr>
      <div className="author-info">
        <div className="cite">
          <span
            className="ratings"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            {renderStars(data?.ratings)}
          </span>
          <h6
            className="name"
            style={{
              fontFamily: "Bebas Neue",
              fontSize: "35px",
              color: "white",
              fontWeight: 400,
            }}
          >
            {data?.name}
          </h6>
          <span
            className="position"
            style={{ fontFamily: "Inter", fontSize: "12px", color: "white" }}
          >
            @ {data?.position}
          </span>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  data: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    ratings: PropTypes.number.isRequired,
  }).isRequired,
};

export default Testimonial;
