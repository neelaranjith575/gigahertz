import React from "react";
import OurService from "../../container/Services/OurServiceNew.js";
import { Grid } from "@mui/material";
import Icon1 from "../../assets/images/PcaasServices/Turn On (8).png";
import Icon2 from "../../assets/images/PcaasServices/Turn On (9).png";
import Icon3 from "../../assets/images/PcaasServices/Turn On (10).png";
import Icon4 from "../../assets/images/PcaasServices/Turn On (11).png";
import Icon5 from "../../assets/images/PcaasServices/Turn On (12).png";
import Icon6 from "../../assets/images/PcaasServices/Turn On (13).png";
import Icon7 from "../../assets/images/PcaasServices/Turn On (14).png";
import Icon8 from "../../assets/images/PcaasServices/Turn On (15).png";

const servicesData = [
  {
    image: Icon1,
    frontText: "MS Office 365, Outlook Issue",
    backText:
      "Professional support for MS Office 365 and Outlook-related issues.",
  },
  {
    image: Icon3,
    frontText: "Antivirus Activation Issue",
    backText:
      "Assistance with antivirus activation to ensure your PC's protection.",
  },
  {
    image: Icon5,
    frontText: "Printer Configuration Issue",
    backText: "Expert printer configuration to streamline your printing tasks.",
  },
  {
    image: Icon6,
    frontText: "Desktop & Laptop Issue",
    backText: "Comprehensive solutions for any desktop and laptop issues.",
  },
  {
    image: Icon7,
    frontText: "Windows & Driver Updates",
    backText:
      "Reliable updates for Windows and drivers to keep your system current",
  },
  {
    image: Icon8,
    frontText: "Network Sharing Issue",
    backText:
      "Effective solutions for network sharing problems to enhance connectivity.",
  },
];

export const Remote = () => {
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
