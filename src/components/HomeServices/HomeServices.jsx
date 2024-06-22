import { Stack, Grid, Box, Typography } from "@mui/material";
import Service1 from "../../assets/images/services/1.png";
import Service3 from "../../assets/images/services/3.png";
import Service4 from "../../assets/images/services/4.png";
import { useNavigate } from 'react-router-dom';

const HomeServices = () => {

  const navigate = useNavigate();


  

  const handleButtonClick = (url) => {
    navigate(url);
  };
  return (
    <div className="video-section section section-padding">
      <div className="">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-12" data-aos="fade-up">
            <div className="skill-with-video-content">
              <div className="section-title-two mb-8">
                {/* <span className="sub-title">Development that converts and delivers</span> */}
                <h3 className="title" style={{ textAlign: "center" }}>
                  OUR SERVICES
                </h3>
              </div>

              <p
                style={{
                  color: "#525252",
                  fontFamily: "Inter",
                  textAlign: "center",
                }}
              >
                We offers a complete and scalable range of flexible <br></br>
                solutions for outsourcing the daily management of your IT tasks
                and functions.
              </p>
              <Stack sx={{mt:5}}>
                <Grid container data-aos="fade-up" spacing={{xs:1,md:0}}>
                  {[
                    { src: Service1, label: "IT INFRASTRUCTURE", url:"/it-infrastructure" },
                    { src: Service3, label: "ENTERPRISE SOLUTIONS", url:'enterprise-solutions' },
                    { src: Service4, label: "RENTAL SERVICES", url:'/rental-services' },
                    { src: Service1, label: "MANAGED SERVICES", url:'/managed-services' },
                  ].map((item, index) => (
                    <Grid item xs={6} md={3} key={index}>
                      <Box
                        position="relative"
                        textAlign="center"
                        sx={{
                          
                          "&:hover img": {
                            transform: "scale(0.95)",
                            borderRadius: "40px 40px 0px 0px",
                          },
                          "&:hover .heading": {
                            color: "#116FC6",
                            transform: "scale(0.95)",
                          },
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        <Box
                          component="img"
                          src={item.src}
                          alt={item.label}
                          onClick={() => handleButtonClick(item.url)}
                          
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.3s ease-in-out",
                            cursor:'pointer'
                          }}
                        />
                        <Typography
                          variant="h6"
                          position="absolute"
                          top="43%"
                          transform="translate(-50%, -50%)"
                          color="#17222E"
                          bgcolor="#FFFFFF99"
                          width="100%" 
                          textAlign="center"
                          fontFamily="Bebas Neue"
                          borderRadius="30px"
                          padding="8px"
                          className="heading"
                          
                          sx={{
                            fontSize:{xs:'25px', md:'50px',
                              transition: "transform 0.3s ease-in-out",
                               cursor:'pointer'
                            }
                          }}
                          onClick={() => handleButtonClick(item.url)}
                        >
                          {item.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeServices;
