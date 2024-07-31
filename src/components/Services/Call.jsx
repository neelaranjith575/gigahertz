import React from "react";
import { Grid } from "@mui/material";
import Icon1 from "../../assets/images/PcaasServices/Turn On.png";
import Icon2 from "../../assets/images/PcaasServices/Turn On (1).png";
import Icon3 from "../../assets/images/PcaasServices/Turn On (2).png";
import Icon4 from "../../assets/images/PcaasServices/Turn On (3).png";
import Icon5 from "../../assets/images/PcaasServices/Turn On (4).png";
import Icon6 from "../../assets/images/PcaasServices/Turn On (5).png";
import Icon7 from "../../assets/images/PcaasServices/Turn On (6).png";
import Icon8 from "../../assets/images/PcaasServices/Turn On (7).png";
import OurService from "../../container/Services/OurServiceNew.js";

const servicesData = [
  {
    image: Icon1,
    frontText: "Powering ON issue",
    backText:
      "Swift resolution for powering ON issues to get your PC back in action.",
  },
  {
    image: Icon2,
    frontText: "Hard Reset Support",
    backText: "Expert hard reset support for seamless device troubleshooting.",
  },
  {
    image: Icon3,
    frontText: "OS Repair & Recovery Issue",
    backText:
      "Comprehensive OS repair and recovery solutions to restore your system.",
  },
  {
    image: Icon4,
    frontText: "Power Cable Issue",
    backText:
      "Reliable fixes for power cable problems to ensure uninterrupted usage.",
  },
  {
    image: Icon5,
    frontText: "VGA & Network Issue",
    backText:
      "Efficient troubleshooting for VGA and network connectivity issues.",
  },
  {
    image: Icon6,
    frontText: "Adaptor Issue",
    backText:
      "Quick solutions for adaptor issues to keep your devices powered.",
  },
  {
    image: Icon7,
    frontText: "Installation (Chrome, Adobe, MS Office) Issue",
    backText: "Hassle-free installation of essential software for your needs.",
  },
  {
    image: Icon8,
    frontText: "Login ID & Password reset Issue",
    backText: "Secure assistance with login ID and password resets.",
  },
];

export const Call = () => {
  return (
    <>
      {[0, 1].map((_, index) => (
        <Grid
          container
          spacing={{ xs: 0, md: 5 }}
          sx={{
            pl: { xs: 0, md: 5 },
            pr: { xs: 0, md: 5 },
            alignContent: "center",
            justifyContent: "center",
            justifyItems: "center",
            backgroundColor: "#f7f7f7",
          }}
          key={index}
        >
          {servicesData.slice(index * 4, (index + 1) * 4).map((service, i) => (
            <Grid item xs={6} md={3} key={i}>
              {/* <OurServices
                image={service.image}
                coreHeading={service.coreHeading}
              /> */}
              <OurService
                image={service.image}
                frontText={service.frontText}
                backText={service.backText}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
};
