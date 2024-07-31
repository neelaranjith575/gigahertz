import React from "react";
import OurService from "../../container/Services/OurServiceNew.js";
import { Grid } from "@mui/material";
import Icon1 from "../../assets/images/PcaasServices/Turn On (16).png";
import Icon2 from "../../assets/images/PcaasServices/Turn On (17).png";
import Icon3 from "../../assets/images/PcaasServices/Turn On (18).png";
import Icon4 from "../../assets/images/PcaasServices/Turn On (19).png";
import Icon5 from "../../assets/images/PcaasServices/Turn On (20).png";
import Icon6 from "../../assets/images/PcaasServices/Turn On (21).png";
import Icon7 from "../../assets/images/PcaasServices/Turn On (22).png";
import Icon8 from "../../assets/images/PcaasServices/image 3.png";
import Icon9 from "../../assets/images/PcaasServices/Turn On (23).png";
import Icon10 from "../../assets/images/PcaasServices/Turn On (24).png";
import Icon11 from "../../assets/images/PcaasServices/Turn On (25).png";
import Icon12 from "../../assets/images/PcaasServices/Turn On (26).png";

const servicesData = [
  {
    image: Icon1,
    frontText: "Regular Maintenance Service",
    backText: "Regular maintenance to keep your devices running smoothly.",
  },
  {
    image: Icon2,
    frontText:
      "Parts Replacement RAM, Keyboard, Battery, Display, SSD, HDD, SMPS etc",
    backText: "Quality parts replacement to ensure optimal performance.",
  },
  {
    image: Icon11,
    frontText: "Software & Hardware Upgrade",
    backText:
      "Upgrades for both software and hardware to enhance your system's capabilities.",
  },
  {
    image: Icon9,
    frontText: "OS Installation",
    backText:
      "Professional OS installation services for a fresh and reliable start.",
  },
  {
    image: Icon7,
    frontText: "Data Backup & Restore",
    backText:
      "Reliable updates for Windows and drivers to keep your system current",
  },
  {
    image: Icon10,
    frontText: "Assemble & Disassemble of Computer Parts",
    backText:
      "Skilled assembly and disassembly of computer parts for upgrades and repairs.",
  },
];

export const OnSite = () => {
  return (
    <>
      {[0, 1, 2].map((_, index) => (
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
