// src/components/ContentPage.js
import React from 'react';
import { Stack, Grid, Typography, Box } from "@mui/material";
import HowWeWork from '../Services/HowWeWork';
import Icon1 from "../../assets/images/icons/submit.png"
import Icon2 from "../../assets/images/icons/technician.png"
import Icon3 from "../../assets/images/icons/query.png"
import Icon4 from "../../assets/images/icons/responsible.png"
import Icon5 from "../../assets/images/icons/closure.png"
import Icon6 from "../../assets/images/icons/correct.png"
import Icon7 from "../../assets/images/icons/teleworking.png"
import Icon8 from "../../assets/images/icons/consulting-service.png"
import Icon9 from "../../assets/images/icons/delivery-man.png"
import Icon10 from "../../assets/images/icons/technician.png"
import Icon11 from "../../assets/images/icons/customer-satisfaction.png"
import { useEffect, useRef } from "react";
import Parallax from 'parallax-js';
import FixYourPcForm from '../../components/FixYourPcForm/FixYourPcForm';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Call } from '../../components/Services/Call';
import { Remote } from '../../components/Services/Remote';
import { OnSite } from '../../components/Services/Onsite';
import Howwework from '../../assets/images/icons/hwwnew.webp';



const FixYourPcContentPage = ({ title, bannerImage, mainContent1, mainContent2, mainContent3, mainContent4, mainContent5, mainContent6, mainContent7, tagLine }) => {


  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();

  }, [])


  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Stack
        className="page-title-section section section-padding-top overlay-two"
        sx={{
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: { xs: '44vh', md: '88vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
        }}
      >
        <Stack
          sx={{
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
            m: 2
          }}
        >
          <Typography sx={{ fontSize: { xs: '15px', md: '25px' }, marginTop: '10px', fontFamily: 'Inter' }}>
            Experience unparalleled convenience and expertise with Gigahertz’s community outreach initiatives.

          </Typography>
        </Stack>
      </Stack>
      <Stack
        className="page-title"
        style={{
          backgroundColor: '#ECF2F7',
          padding: '5px',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Stack className="container">
          <h1
            style={{
              fontFamily: 'Inter',
              paddingTop: '35px',
              color: '#116FC6',
              textAlign: 'center',
              marginTop: '-20px',
              fontSize: '35px'
            }}
          >
            {title}
          </h1>
        </Stack>
      </Stack>


      <Grid container spacing={10} sx={{ p: { xs: 2, md: 10 } }}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Stack sx={{ display: 'flex', mt: 2, }} data-aos="fade-up" alignContent={'center'} justifyContent={'center'} alignItems={'center'}>
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

          </Stack>

        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} >
          <FixYourPcForm />

        </Grid>
      </Grid>
      <div className="section pt-5 pb-0 " style={{ backgroundColor: '#f7f7f7' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 order-lg-1 mb-1">
              <div className="blog-3 blog-details col" data-aos="fade-up">
                <Typography sx={{ marginTop: { xs: '0px', md: '30px' }, fontSize: { xs: '30px', md: '40px' }, color: '#000000', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', marginBottom: { xs: "30px", md: "30px", }, textAlign: 'center' }}>Our Services</Typography>
                <Typography sx={{
                  marginTop: { xs: '0px', md: '10px' }, fontSize: { xs: '20px', md: '25px' }, color: '#116FC6', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', marginBottom: { xs: "10px", md: "0px", }, pl: { xs: 2, md: 7 },
                  pr: { xs: 0, md: 5 },
                }}>ON-CALL SUPPORT</Typography>
                <Call />
                <Typography sx={{
                  marginTop: { xs: '0px', md: '10px' }, fontSize: { xs: '20px', md: '25px' }, color: '#116FC6', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', marginBottom: { xs: "10px", md: "0px", }, pl: { xs: 2, md: 7 },
                  pr: { xs: 0, md: 5 },
                }}>REMOTE SUPPORT</Typography>
                <Remote />
                <Typography sx={{
                  marginTop: { xs: '0px', md: '10px' }, fontSize: { xs: '20px', md: '25px' }, color: '#116FC6', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', marginBottom: { xs: "10px", md: "0px", }, pl: { xs: 2, md: 7 },
                  pr: { xs: 0, md: 5 },
                }}>ON-SITE SUPPORT</Typography>
                <OnSite />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="section section-bg-image newsletter-section overlay-two" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/newsletter.jpg)`, marginBottom: '50px', paddingTop: '100px', paddingBottom: '20px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 m-auto">
              <div className="cta-content text-center">
                <SectionTitle
                  style={{ fontFamily: 'Inter' }}
                  titleOption="color-light text-center mb-0"
                  title="Get a free consultation now, and avail free service on your first request"
                  subTitle=""
                />

                <a href="tel:6366746901" className="btn btn-primary btn-hover-secondary mt-6" data-aos="fade-up" data-aos-delay="300" target='_blank' style={{ marginRight: '10px' }} rel="noreferrer">Call - 6366746901</a>
                <a href="https://wa.me/916366746894" className="btn btn-primary btn-hover-secondary mt-6" data-aos="fade-up" data-aos-delay="300" style={{ backgroundColor: '#25d366', marginLeft: "10px", border: '1px solid #25d366' }} target='_blank' rel='noreferrer'>Whatsapp Us</a>
                <Typography sx={{ fontSize: { xs: '15px', md: '20px' }, marginTop: '30px', fontFamily: 'Inter', color: 'white', }}>We&apos;re committed to providing you with the best technical support,
                  ensuring your tech issues are sorted effortlessly and efficiently.</Typography>
                <p style={{ textAlign: 'right', color: 'white', marginLeft: '20px' }}><Button style={{ textAlign: 'right', color: 'white', paddingTop: '80px', marginLeft: 3 }} onMouseOver={handleClickOpen}  > *Terms & Conditions Apply</Button></p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape shape-1" id="scene" ref={sceneEl}>
          <span data-depth="1">
            <img src={process.env.PUBLIC_URL + '/images/shape-animation/newsletter-shape.png'} alt="" />
          </span>
        </div>
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Terms & Conditions"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>Services must be booked in advance through our customer service portal, phone, or email.</li>
              <li>Confirmation of the service appointment will be communicated to the customer via email or phone.</li>
              <li>A Service Engineer will visit the customer’s location at the scheduled time.</li>
              <li>The customer must be present during the service visit to provide necessary access and information.</li>
              <li>The customer may be asked to share their password with the technician upon request for the purpose of resolving the issue.</li>
              <li>The customer is responsible for backing up their data before handing over the device to the technician.</li>
              <li>Free pick-up and delivery within a 10 km radius.</li>
              <li>For distances beyond 10 km, free pick-up and delivery if the services are availed.</li>
              <li>Additional charges are applicable for visits where services are not availed.</li>
              <li>The warranty for all replaced parts will follow the terms and conditions set by the original equipment manufacturer (OEM).</li>
              <li>Ensure to maintain the warranty certificate as applicable for future replacement.</li>
            </ul>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus sx={{ fontFamily: 'inter', color: '#116FC6' }}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>


      <Typography sx={{ textAlign: "center", marginTop: { xs: '30px', md: '30px' }, pb: { xs: '30px', md: '10px' }, fontSize: { xs: '25px', md: '40px' }, color: '#000000', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', }}>How we operate</Typography>

      {/* <Grid container spacing={{ xs: 0, md: 2 }} sx={{ pl: { xs: 0, md: 5 }, pr: { xs: 0, md: 5 }, alignContent: 'center', justifyContent: 'center', justifyItems: 'center', marginTop: { xs: '-40px', md: '-20px' }, pb: 5 }}>
        <Grid item xs={6} md={2}>
          <HowWeWork
            image={Icon1}
            coreHeading="SUBMIT THE QUERY"
          />


        </Grid>
        <Grid item xs={6} md={2}>
          <HowWeWork
            image={Icon2}
            coreHeading=" ASSIGN TECHNICIAN"
          />

        </Grid>
        <Grid item xs={6} md={2}>
          <HowWeWork
            image={Icon3}
            coreHeading="QUERY ANALYSIS"
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <HowWeWork
            image={Icon4}
            coreHeading="SERVICE EXECUTION"
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <HowWeWork
            image={Icon5}
            coreHeading="SERVICE CLOSURE"
          />
        </Grid>

        <Grid item xs={6} md={2}>
          <HowWeWork
            image={Icon6}
            coreHeading="PAYMENT PROCESSING"
          />
        </Grid>
      </Grid> */}
      <Stack display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box component={"img"}
          src={Howwework}
          sx={{ color: '#ffffff', width: '85%', }}
        />
      </Stack>

      <div className="section pt-5 pb-5 mb-5 fix " style={{ backgroundColor: '#f7f7f7' }}>
        <div className="container">
          <div className="row mb-n10">
            <div className="col-lg-12 col-12 order-lg-1 mb-1">
              <div className="blog-3 blog-details col" data-aos="fade-up">
                <Typography sx={{ marginTop: { xs: '0px', md: '30px' }, fontSize: { xs: '25px', md: '40px' }, color: '#000000', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', marginBottom: { xs: "30px", md: "50px", } }}>EASY STEPS TO HASSLE FREE SERVICE</Typography>
                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>1. Submit the Query</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '10px',
                  color: '#525252'
                }}>{mainContent1}</p>

                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>2. Assign Technician</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '10px',
                  color: '#525252'
                }}>{mainContent2}</p>
                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>3. Query Analysis</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '10px',
                  color: '#525252'
                }}>{mainContent3}</p>
                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>4. Service Execution</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '10px',
                  color: '#525252'
                }}><b>Remote Support - </b>{mainContent4}</p>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '16px',
                  color: '#525252',
                  marginTop: '-10px'
                }}><b>On-Site support - </b>{mainContent7}</p>
                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>5. Service Closure</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '10px',
                  color: '#525252'
                }}>{mainContent5}</p>
                <h1 className='title' style={{
                  fontSize: 22,
                  fontWeight: 500,
                  fontFamily: 'Inter',
                  color: '#116FC6'
                }}>6. Payment Processing</h1>
                <p style={{
                  fontFamily: 'Inter',
                  paddingTop: '10px',
                  color: '#525252'
                }}>{mainContent6}</p>
              </div>
              {/* */}
            </div>
          </div>
        </div>
      </div>
      <div className="section-title-two ">
        <Typography sx={{ textAlign: "center", marginTop: { xs: '30px', md: '50px' }, pb: { xs: '50px', md: '10px' }, fontSize: { xs: '25px', md: '40px' }, color: '#000000', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', }}>WHY US?</Typography>
      </div>
      <Grid container spacing={{ xs: 0, md: 2 }} sx={{ pl: { xs: 0, md: 5 }, pr: { xs: 0, md: 5 }, alignContent: 'center', justifyContent: 'center', justifyItems: 'center', marginTop: { xs: '-40px', md: '-20px' }, }}>
        <Grid item xs={6} md={2.4}>
          <HowWeWork
            image={Icon7}
            coreHeading="REMOTE SUPPORT    "
          />
        </Grid>


        <Grid item xs={6} md={2.4}>
          <HowWeWork
            image={Icon8}
            coreHeading="EXPERT ASSISTANCE"
          />

        </Grid>
        <Grid item xs={6} md={2.4}>
          <HowWeWork
            image={Icon9}
            coreHeading="FREE PICK & DELIVERY"
          />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <HowWeWork
            image={Icon10}
            coreHeading="EXPERT TECHNICIANS"
          />
        </Grid>
        <Grid item xs={6} md={2.4}>
          <HowWeWork
            image={Icon11}
            coreHeading="25 + YEARS OF SERVICE"
          />
        </Grid>
      </Grid>


    </React.Fragment>
  );
};

export default FixYourPcContentPage;
