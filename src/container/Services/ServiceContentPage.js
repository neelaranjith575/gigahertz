// src/components/ContentPage.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Stack, Button, Typography } from "@mui/material";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { useNavigate, useLocation } from 'react-router-dom';


const ServiceContentPage = ({ title, bannerImage, mainContent, solutions, buttons, sideContent, mobileButtons, serviceImage1, serviceImage2 }) => {

  const navigate = useNavigate();
  const location = useLocation();



  const handleButtonClick = (url) => {
    navigate(url);
  };




  return (
    <React.Fragment>

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
      <Stack direction={"row"} sx={{ display: { xs: "none", md: 'flex' }, justifyContent: "space-evenly", mt: 5 }}>
        {buttons.map((button, index) => {
          const isActive = location.pathname === button.url;
          return (
            <Button
              key={index}
              variant="outlined"
              size="large"
              sx={{
                borderRadius: '30px',
                border: '2px solid',
                borderColor: isActive ? '#116FC6' : '#D9D9D9',
                color: isActive ? '#ffffff' : '#000000',
                fontWeight: 'bold',
                fontFamily: 'Inter',
                fontSize: { xs: '8px', md: '16px' },
                width: 250,
                backgroundColor: isActive ? '#116FC6' : 'transparent',
                "&:hover": {
                  backgroundColor: isActive ? '#116FC6' : '#116FC6',
                  color: isActive ? '#ffffff' : '#ffffff',

                }
              }}
              onClick={() => handleButtonClick(button.url)}
            >
              {button.label}
            </Button>
          );
        })}

      </Stack>
      <Stack direction={"row"} spacing={1} sx={{ display: { xs: "flex", md: 'none' }, justifyContent: "space-evenly", mt: 2, p: 2, }}>
        {mobileButtons.map((mobileButtons, index) => {
          const isActive = location.pathname === mobileButtons.url;
          return (
            <Button
              key={index}
              variant="outlined"
              size="large"
              sx={{
                borderRadius: '30px',
                border: '2px solid',
                borderColor: isActive ? '#116FC6' : '#D9D9D9',
                color: isActive ? '#ffffff' : '#000000',
                fontWeight: 'bold',
                fontFamily: 'Inter',
                fontSize: { xs: '10px', md: '16px' },
                width: 250,
                backgroundColor: isActive ? '#116FC6' : 'transparent',
                "&:hover": {
                  backgroundColor: isActive ? '#116FC6' : '#116FC6',
                  color: isActive ? '#ffffff' : '#ffffff',

                }
              }}
              onClick={() => handleButtonClick(mobileButtons.url)}
            >
              {mobileButtons.label}
            </Button>
          );
        })}

      </Stack>
      <div className="section section-padding fix">
        <div className="container">
          <div className="row mb-n10">
            <div className="col-lg-8 col-12 order-lg-1 mb-1">
              <div className="blog-3 blog-details col" data-aos="fade-up">
                <div className="thumbnail">
                  <img className="w-100" src={serviceImage1} alt="Blog Image" />
                </div>
                <h1 className='title' style={{
                  fontSize: 24,
                  fontWeight: 700,
                  fontFamily: 'Inter',
                  paddingTop: '20px',
                  color: '#000000'
                }}>{title}</h1>
                {mainContent.map((paragraph, index) => (
                  <p key={index} style={{
                    fontFamily: 'Inter',
                    paddingTop: '16px',
                    color: '#525252'
                  }}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-12 order-lg-2 mb-1" data-aos="fade-up">
              <h1 className='title' style={{
                fontSize: 24,
                fontWeight: 700,
                fontFamily: 'Inter',
                color: '#000000'
              }}>OUR SOLUTIONS</h1>
              <div className="thumbnail">
                <img className="w-100" src={serviceImage2} alt="Blog Image" />
              </div>
              <List>
                {solutions.map((solution, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckBoxOutlinedIcon sx={{ color: '#116FC6' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={solution}
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: 400,
                        fontFamily: 'Inter',
                        color: '#525252'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              {sideContent.map((paragraph, index) => (
                <p key={index} style={{
                  fontFamily: 'Inter',
                  paddingTop: '16px',
                  color: '#525252'
                }}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceContentPage;
