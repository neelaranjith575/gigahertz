import { Stack, Grid, Box } from "@mui/material";
import BannerImage from "../../assets/images/banner/banner.png";

const HomeServices = () => {
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

              <Stack>
                <Grid container data-aos="fade-up" spacing={0}>
                  <Grid item xs={3}>
                    <Box
                      component={"img"}
                      src={BannerImage}
                      alt=""
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      component={"img"}
                      src={BannerImage}
                      alt=""
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      component={"img"}
                      src={BannerImage}
                      alt=""
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      component={"img"}
                      src={BannerImage}
                      alt=""
                      sx={{ width: "100%" }}
                    />
                  </Grid>
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
