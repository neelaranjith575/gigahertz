import PropTypes from "prop-types";
import React from 'react';
import { Stack } from "@mui/material";


const Breadcrumb = ({ title, bannerImage, }) => {
  return (
    <>
      <Stack className="page-title-section section section-padding-top overlay-two" sx={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: { xs: '44vh', md: '88vh' },
      }}></Stack>
      <Stack className="page-title" style={{
        backgroundColor: '#ECF2F7',
        padding: '5px',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <Stack className="container">
          <h1 className='text' style={{
            fontFamily: 'Bebas Neue',
            paddingTop: '35px',
            color: '#116FC6',
            textAlign: 'center',
            marginTop: '-20px'
          }}>{title}</h1>
        </Stack>
      </Stack>
    </>
  )
}

Breadcrumb.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentTwo: PropTypes.string,
  image: PropTypes.string,
  bannerImage: PropTypes.string
};

export default Breadcrumb;
