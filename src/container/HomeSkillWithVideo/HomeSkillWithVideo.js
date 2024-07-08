import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Box, Stack } from "@mui/material";
import Logo1 from "../../assets/images/video/gm.png";
import Logo2 from "../../assets/images/video/mki.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const HomeSkillWithVideo = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="video-section section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="skill-with-video-content">
                            <div className="section-title-two mb-8">
                                {/* <span className="sub-title">Development that converts and delivers</span> */}
                                <h3 className="title">ABOUT US</h3>
                            </div>

                            <p style={{ color: "#525252", fontFamily: "Inter" }}>
                                Gigahertz, a thriving IT company, began by focusing on IT
                                infrastructure services, especially computer sales and services.
                                Then expanded to system integration, network security to
                                enterprise solutions with over 25 years of experience. Gigahertz
                                strives hard to thrive in its area of work and much more to find
                                supremacy in providing integrated solutions in the field of
                                Information Technology.
                            </p>
                            <p style={{ color: "#525252", fontFamily: "Inter" }}>
                                Now, Gigahertz has also expanded the business in the areas of
                                Cloud Solutions, I T Security Solutions, Back and Storage
                                Solutions and Industrial Automation with the company&apos;s
                                goals and objectives. Company mission is to provide flawless
                                integrated solutions to all the customers making it easy for to
                                implement, use, automate and secure it seamlessly.
                            </p>
                            <p style={{ color: "#525252", fontFamily: "Inter" }}>
                                Our vision is to mark a niche in the IT market, reachable to
                                every customer who are wanting flawless and seamless solution
                                for their setup
                            </p>
                        </div>
                        <Stack
                            direction="row"
                            sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}
                        >
                            <Box component={"img"} src={Logo1} alt="" sx={{ width: "50%" }} />
                            <Box component={"img"} src={Logo2} alt="" sx={{ width: "50%" }} />
                        </Stack>
                    </div>

                    <div className=" col-xl-6 col-lg-6 col-12">
                        <div className="video-popup-area">
                            <div className="skill-video">
                                <img
                                    className="image"
                                    src={process.env.PUBLIC_URL + "/images/video/banner.png"}
                                    alt="video popup"
                                />
                                <button className="icon" onClick={() => setOpen(true)}>
                                    <i className="fas fa-play"></i>
                                </button>
                                <ModalVideo
                                    channel="youtube"
                                    autoplay
                                    isOpen={isOpen}
                                    videoId="v4uJvQINGmk"
                                    onClose={() => setOpen(false)}
                                />
                            </div>

                            <div className="shape shape-1 scene">
                                <span data-depth="1">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/images/shape-animation/video-shape-1.png"
                                        }
                                        alt=""
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-" data-aos="fade-up">
                        <Stack
                            direction="row"
                            sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between", mt: 5 }}
                        >
                            <div className="section-title-two mb-8">
                                <h3 className="title" style={{ lineHeight: "150px" }}>
                                    MOVING FORWARD{" "}
                                </h3>
                                <h3 className="title">WITH MOMENTUM</h3>
                            </div>
                        </Stack>
                        <Stack
                            direction="row"
                            sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center", mt: 5 }}
                        >
                            <div className="section-title-two mb-0">
                                <h3 className="title">MOVING FORWARD{" "} WITH MOMENTUM</h3>
                            </div>
                        </Stack>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-6" data-aos="fade-up">
                        <Stack
                            direction="column"
                            sx={{ display: "flex", justifyContent: "space-between", mt: { xs: 2, md: 5 } }}
                        >
                            <List
                                sx={{
                                    width: "100%",
                                    maxWidth: 360,
                                    bgcolor: "background.paper",
                                }}
                            >
                                <ListItem>
                                    <SupportAgentIcon
                                        sx={{ fontSize: { xs: "30px", md: "50px" }, color: "#116FC6", mt: 2, mr: 2 }}
                                    />

                                    <ListItemText
                                        primary="20000+"
                                        secondary="Hours of Support"
                                        primaryTypographyProps={{
                                            sx: {
                                                fontFamily: "Inter",
                                                color: "#111827",
                                                fontSize: { xs: "25px", md: "45px" },
                                                fontWeight: "700",
                                            },
                                        }}
                                        secondaryTypographyProps={{
                                            sx: {
                                                fontFamily: "Inter",
                                                color: "#111827",
                                                fontSize: { xs: "15px", md: "18px" },
                                                fontWeight: "500",
                                                mt: { xs: 0.5, md: -2 },
                                            },
                                        }}
                                    />
                                </ListItem>
                                <ListItem>
                                    <VolunteerActivismOutlinedIcon
                                        sx={{ fontSize: { xs: "30px", md: "50px" }, color: "#116FC6", mt: 2, mr: 2 }}
                                    />

                                    <ListItemText
                                        primary="25+"
                                        secondary="years of service"
                                        primaryTypographyProps={{
                                            sx: {
                                                fontFamily: "Inter",
                                                color: "#111827",
                                                fontSize: { xs: "25px", md: "45px" },
                                                fontWeight: "700",
                                            },
                                        }}
                                        secondaryTypographyProps={{
                                            sx: {
                                                fontFamily: "Inter",
                                                color: "#111827",
                                                fontSize: { xs: "15px", md: "18px" },
                                                fontWeight: "500",
                                                mt: { xs: 0.5, md: -2 },
                                            },
                                        }}
                                    />
                                </ListItem>
                            </List>
                        </Stack>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-6" data-aos="fade-up">
                        <Stack
                            direction="column"
                            sx={{ display: "flex", justifyContent: "space-between", mt: { xs: 2, md: 5 } }}
                        >
                            <List
                                sx={{
                                    width: "100%",
                                    maxWidth: 360,
                                    bgcolor: "background.paper",
                                }}
                            >
                                <ListItem>
                                    <FactCheckOutlinedIcon
                                        sx={{ fontSize: { xs: "30px", md: "50px" }, color: "#116FC6", mt: 2, mr: 2 }}
                                    />

                                    <ListItemText
                                        primary="4000+"
                                        secondary="Project launched "
                                        primaryTypographyProps={{
                                            sx: {
                                                fontFamily: "Inter",
                                                color: "#111827",
                                                fontSize: { xs: "25px", md: "45px" },
                                                fontWeight: "700",
                                            },
                                        }}
                                        secondaryTypographyProps={{
                                            sx: {
                                                fontFamily: "Inter",
                                                color: "#111827",
                                                fontSize: { xs: "13px", md: "18px" },
                                                fontWeight: "500",
                                                mt: { xs: 0.5, md: -2 },
                                            },
                                        }}
                                    />
                                </ListItem>
                                <ListItem>
                                    <SupervisorAccountOutlinedIcon
                                        sx={{ fontSize: { xs: "30px", md: "50px" }, color: "#116FC6", mt: 2, mr: 2 }}
                                    />

                                    <ListItemText
                                        primary="2000+"
                                        secondary="Satisfied Clients"
                                        primaryTypographyProps={{
                                            sx: {
                                                fontFamily: "Inter",
                                                color: "#111827",
                                                fontSize: { xs: "25px", md: "45px" },
                                                fontWeight: "700",
                                            },
                                        }}
                                        secondaryTypographyProps={{
                                            sx: {
                                                fontFamily: "Inter",
                                                color: "#111827",
                                                fontSize: { xs: "15px", md: "18px" },
                                                fontWeight: "500",
                                                mt: { xs: 0.5, md: -2 },
                                            },
                                        }}
                                    />
                                </ListItem>
                            </List>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSkillWithVideo;
