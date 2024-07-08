import React from "react";
import PropTypes from "prop-types";

const Btn = (props) => {
  return (
    <React.Fragment>
      <a
        href="https://support.gigahertzcomp.com/portal/"
        className="btn btn-light btn-hover-primary"
        target="_blank"
        rel="noreferrer"
      >
        {props.name}
      </a>
    </React.Fragment>
  );
};

Btn.propTypes = {
  name: PropTypes.string,
};

export default Btn;
