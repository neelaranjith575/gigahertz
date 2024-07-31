import React from "react";
import PropTypes from "prop-types";

const Btn = (props) => {
  return (
    <React.Fragment>
      <a
        href="https://gigahertzcomp.com/support/login.php"
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
