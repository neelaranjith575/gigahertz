import PropTypes from "prop-types";
import React from 'react';


const Breadcrumb = ({title, bannerImage,}) => {
    return (
       <>
       <div className="page-title-section section section-padding-top overlay-two" style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '88vh'
      }}></div>
      <div className="page-title" style={{
        backgroundColor: '#ECF2F7',
        padding: '5px',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <div className="container">
          <h1 className='text' style={{
            fontFamily: 'Bebas Neue',
            paddingTop: '35px',
            color: '#116FC6',
            textAlign: 'center',
            marginTop: '-20px'
          }}>{title}</h1>
        </div>
      </div>
       </>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    contentTwo: PropTypes.string,
    image: PropTypes.string,
    bannerImage:PropTypes.string
};

export default Breadcrumb;
