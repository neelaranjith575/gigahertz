/* eslint-disable react/jsx-no-undef */
import { Box, Divider, Grid, Stack, Typography, Button } from "@mui/material";
import {
  MainHeading,
  SubHeading,
  Content,
  SubHeading2,
  Content2,
  Buttonstyles,
} from "./HomeBanner.styles";
import BannerImage from "../../assets/images/banner/banner.png";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import Bgimage from "../../assets/images/hero-image/bg1.png"




const HomeBanner = () => {
  return (
    <>
      <Box sx={{backgroundImage: `url(${Bgimage})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat',}}>
        <Stack display={"flex"} alignItems={"center"}>
          <Typography sx={MainHeading}>
            A MODERN APPROACH TO <br></br>
            <span style={{ color: "#000000" }}>IT SOLUTIONS</span>
          </Typography>
        </Stack>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Typography sx={SubHeading}>Comprehensive IT Solutions</Typography>
            <Divider
              sx={{
                width: "85%",
                height: "2px",
                backgroundColor: "#000000",
                color: "#000000",
                opacity: 1,
              }}
            />
            <Typography sx={Content}>
              From IT Infrastructure services to Rental Services, Gigahertz
              provide end to end support that streamline operations, enhance
              security and drive business growth.
            </Typography>
            <Stack sx={{ ml: 5, mt:5 }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <VerifiedUserOutlinedIcon sx={{color:'black'}} />
                  </ListItemIcon>
                  <ListItemText
                    primary="We are ISO certified"
                    primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: 500,
                        fontFamily:'Inter',
                        color:'#525252'

                      }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BadgeOutlinedIcon sx={{color:'black'}} />
                  </ListItemIcon>
                  <ListItemText primary="25+ years of service" 
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 500,
                    fontFamily:'Inter',
                    color:'#525252'

                  }}
                   />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SupportAgentOutlinedIcon sx={{color:'black'}}
                     />
                  </ListItemIcon>
                  <ListItemText primary="24/7 Customer support"
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 500,
                    fontFamily:'Inter',
                    color:'#525252'

                  }} />
                </ListItem>
              </List>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Box
              component={"img"}
              src={BannerImage}
              alt=""
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4} alignContent={"center"}>
            <Typography sx={SubHeading2}>
              HELP YOUR ORGANIZATION to SUCCEED
            </Typography>

            <Typography sx={Content2}>
              Schedule a call with our industry expert and talk about your
              requirements and the ways in which we can offer you assistance
            </Typography>
            <Button variant="contained" sx={Buttonstyles} size="large">
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default HomeBanner;
