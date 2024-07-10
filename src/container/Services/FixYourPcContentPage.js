// src/components/ContentPage.js
import React from 'react';
import { Stack, Grid, Typography, Button } from "@mui/material";
import HowWeWork from '../Services/HowWeWork';
import Icon1 from "../../assets/images/icons/submit.png"
import Icon2 from "../../assets/images/icons/technician.png"
import Icon3 from "../../assets/images/icons/delivery (1).png"
import Icon4 from "../../assets/images/icons/service (1).png"
import { Link } from "react-router-dom";



const FixYourPcContentPage = ({ title, bannerImage, mainContent1, mainContent2, mainContent3, mainContent4, mainContent5, tagLine }) => {


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
      <Stack sx={{ display: 'flex', mt: 2, ml: { xs: 1, md: 10 }, mr: { xs: 1, md: 10 } }} data-aos="fade-up" alignContent={'center'} justifyContent={'center'} alignItems={'center'}>
        < h1 className='text' style={{
          fontFamily: 'Bebas Neue',
          paddingTop: '35px',
          color: '#116FC6',
          textAlign: 'center',

        }}>{tagLine}</h1>
        <p style={{
          fontFamily: 'Inter',
          paddingTop: '16px',
          color: '#525252',
          textAlign: 'center',

        }}>
          For the first time, we&apos;re bringing our technical expertise directly to your home. Enjoy seamless and effortless solutions to your tech challenges with our comprehensive support services designed to make your life easier.
        </p>
        <Link to="/fix-your-pc-form">
          <Button variant="contained" size="large" sx={{
            backgroundColor: '#000000',
            fontFamily: "Inter",
            fontSize: '18px',
            fontWeight: 600,
            borderRadius: '30px',
          }}>
            GET PRICING
          </Button>
        </Link>




      </Stack>
      <div className="section-title-two">
        <Typography sx={{ textAlign: "center", marginTop: { xs: '30px', md: '50px' }, pb: { xs: '50px', md: '10px' }, fontSize: { xs: '25px', md: '40px' }, color: '#000000', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase' }}>How we operate</Typography>
      </div>
      <Grid container spacing={{ xs: 0, md: 5 }} sx={{ pl: { xs: 0, md: 10 }, pr: { xs: 0, md: 10 }, alignContent: 'center', justifyContent: 'center', justifyItems: 'center', marginTop: '-100px' }}>
        <Grid item xs={6} md={3}>
          <HowWeWork
            image={Icon1}
            coreHeading="SUBMIT THE QUERY"
          />

        </Grid>
        <Grid item xs={6} md={3}>
          <HowWeWork
            image={Icon2}
            coreHeading="TECHNICIAN WILL BE ASSIGNED"
          />

        </Grid>
        <Grid item xs={6} md={3}>
          <HowWeWork
            image={Icon3}
            coreHeading="FREE PICKUP & DELIVERY"
          />

        </Grid>
        <Grid item xs={6} md={3}>
          <HowWeWork
            image={Icon4}
            coreHeading="GET THE SERVICE DONE"
          />
        </Grid>
      </Grid>
      <div className="section pt-10 fix">
        <div className="container">
          <div className="row mb-n10">
            <div className="col-lg-12 col-12 order-lg-1 mb-1">
              <div className="blog-3 blog-details col" data-aos="fade-up">
                <Typography sx={{ marginTop: { xs: '0px', md: '30px' }, fontSize: { xs: '25px', md: '40px' }, color: '#000000', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', marginBottom: { xs: "30px", md: "50px", } }}>OUR PROCEDURE</Typography>
                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>1. Submit the Query</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '16px',
                  color: '#525252'
                }}>{mainContent1}</p>

                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>2. Free Phone Support</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '16px',
                  color: '#525252'
                }}>{mainContent2}</p>
                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>3. Remote Support</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '16px',
                  color: '#525252'
                }}>{mainContent3}</p>
                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>4. Expert Assistance</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '16px',
                  color: '#525252'
                }}>{mainContent4}</p>
                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>5. Complimentary Pickup and Delivery</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '16px',
                  color: '#525252'
                }}>{mainContent5}</p>

                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '18px',
                  color: '#525252',
                  textAlign: 'center',
                  fontWeight: 600
                }}>
                  Experience unparalleled convenience and expertise with Gigahertz’s community outreach initiatives. We`&apos;re committed to providing you with the best technical support, ensuring your tech issues are sorted effortlessly and efficiently.
                </p>


              </div>

              <p style={{
                fontFamily: 'Inter',
                paddingTop: '16px',
                color: '#525252'
              }}>{mainContent5}</p>
            </div>
            {/* <div className="col-lg-6 col-12 order-lg-2 mb-1" data-aos="fade-up">
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
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FixYourPcContentPage;
