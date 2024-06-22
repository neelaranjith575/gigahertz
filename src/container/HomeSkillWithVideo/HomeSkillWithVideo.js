import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Box, Stack } from "@mui/material";
import Logo1 from "../../assets/images/video/gm.png";
import Logo2 from "../../assets/images/video/mki.png";


const HomeSkillWithVideo = () => {
    const [isOpen, setOpen] = useState(false)

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


                            <p style={{ color: '#525252', fontFamily: 'Inter' }}>Gigahertz, a thriving IT company, began by focusing on IT infrastructure services,
                                especially computer sales and services. Then expanded to system integration,
                                network security to enterprise solutions with over 25 years of experience.
                                Gigahertz strives hard to thrive in its area of work and much more to find
                                supremacy in providing integrated solutions in the field of Information Technology.</p>
                            <p style={{ color: '#525252', fontFamily: 'Inter' }}>Now, Gigahertz has also expanded the business in the areas of Cloud Solutions, I
                                T Security Solutions, Back and Storage Solutions and Industrial
                                Automation with the company&apos;s goals and objectives.
                                Company mission is to provide flawless integrated solutions
                                to all the customers making it easy for to implement, use,
                                automate and secure it seamlessly.</p>
                            <p style={{ color: '#525252', fontFamily: 'Inter' }}>Our vision is to mark a niche in the IT market,
                                reachable to every customer who are wanting flawless and seamless solution for their setup</p>
                        </div>
                        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
                            <Box
                                component={"img"}
                                src={Logo1}
                                alt=""
                                sx={{ width: "50%" }}
                            />
                            <Box
                                component={"img"}
                                src={Logo2}
                                alt=""
                                sx={{ width: "50%" }}
                            />
                        </Stack>
                    </div>

                    <div className=" col-xl-6 col-lg-6 col-12">
                        <div className="video-popup-area">
                            <div className="skill-video">
                                <img className="image" src={process.env.PUBLIC_URL + "/images/video/banner.png"} alt="video popup" />
                                <button className="icon" onClick={() => setOpen(true)}><i className="fas fa-play"></i></button>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="v4uJvQINGmk" onClose={() => setOpen(false)} />
                            </div>

                            <div className="shape shape-1 scene">
                                <span data-depth="1">
                                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}



export default HomeSkillWithVideo;
