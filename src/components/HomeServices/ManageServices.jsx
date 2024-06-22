import { Grid, Box, Typography, Button, Stack } from "@mui/material";
import Assesment from "../../assets/images/services/Assesments.png";
import Health from "../../assets/images/services/Healthcheck.png";

const services = [
  {
    src: Assesment,
    label: "ASSESSMENT",
    description:
      "Our IT assessments provide you with the critical insights needed to understand your systems, make intelligent decisions, and set strategic directions.",
  },
  {
    src: Health,
    label: "HEALTH CHECKUP",
    description:
      "Assess your infrastructure against leading best practices and support metrics, and benefit from our expert recommendations to boost your service quality.",
  },
];

const ServiceCard = ({ service, reverse }) => (
  <Grid
    container
    spacing={2}
    direction={reverse ? "row-reverse" : "row"}
    sx={{
      marginBottom: 4,
      background:
        "linear-gradient(180deg, #FAFAFA 0%, #D1D1D1 80.3%, #FFFFFF 105.86%)",
      borderRadius: "20px",
    }}
    data-aos="fade-up"
  >
    <Grid item xs={12} md={6}>
      <Box
        component="img"
        src={service.src}
        alt={service.label}
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: reverse ? "0px 30px 0px 0px" : "0px 0px 0px 30px",
        }}
      />
    </Grid>
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2} sx={{ml:6}}>
        <Typography
          variant="h4"
          sx={{
            color: "#000000",
            mt: 5,
            fontSize: "50px",
            fontWeight: "400",
            fontFamily: "Bebas Neue",
            lineHeight: 1.2,
            ml: 8,
          }}
        >
          {service.label}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter",
            color: "#525252",
            fontSize: { xs: "15px", md: "17px" },
            lineHeight: "30px",
            ml: 1,
            mt: 1,
            mr: 5,
          }}
        >
          {service.description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000000",
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: 600,
            borderRadius: "30px",
            width: "50%",
            mt: 3,
          }}
          size="large"
        >
          Know More
        </Button>
      </Stack>
    </Grid>
  </Grid>
);

const ManageServices = () => {
  return (
    <div className="video-section section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-12" data-aos="fade-up">
            <div className="skill-with-video-content">
              <div className="section-title-two mb-8">
                <h3 className="title" style={{ textAlign: "center" }}>
                  STRATEGIC SERVICES
                </h3>
              </div>

              <p
                style={{
                  color: "#525252",
                  fontFamily: "Inter",
                  textAlign: "center",
                }}
              >
                Our Expert Team Offers Thorough Assessments of Your IT
                Environment with Our Customized Services
              </p>
              <Stack spacing={4}>
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    service={service}
                    reverse={index % 2 !== 0}
                  />
                ))}
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
