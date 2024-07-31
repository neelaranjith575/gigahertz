import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BrandService = ({ data }) => {
  return (
    <div className="brand">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img src={process.env.PUBLIC_URL + data.image} alt="logo image" />
      </Link>
    </div>
  );
};

BrandService.propTypes = {
  data: PropTypes.object,
};

export default BrandService;
