import { useState, useEffect, useRef } from "react";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import FlipCard from "./Flipcard";
import { Stack, Grid } from "@mui/material";
import VissionMission from "./VissionMission";
import CoreValues from "./CoreValues"




const AboutFour = () => {

    const [scale] = useState(1.04);
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <>

            <div className="video-section section section-padding-t90 section-padding-bottom-80">

                <div className="container">

                    <div className="row align-items-center">


                        <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                            <div className="skill-with-video-content">
                                <div className="about-image-area about-shape-animation right-0 me-0">
                                    <div className="about-image js-tilt">
                                        <Tilt scale={scale} transitionSpeed={4000}>
                                            <img src={process.env.PUBLIC_URL + "images/about/about-1.jpg"} alt="" />
                                        </Tilt>
                                    </div>
                                    <div className="about-image js-tilt">
                                        <Tilt scale={scale} transitionSpeed={4000}>
                                            <img src={process.env.PUBLIC_URL + "images/about/about-2.jpg"} alt="" />
                                        </Tilt>
                                    </div>
                                    <div className="shape shape-1" id="scene" ref={sceneEl}>
                                        <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="" /></span>
                                    </div>
                                    <div className="shape shape-1 scene">
                                        <span data-depth="1">
                                            <img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" col-xl-6 col-lg-6 col-12">
                            <div className="video-popup-area">
                                <div className="skill-video">
                                    <h3 style={{ fontFamily: 'Inter', fontSize: '35px' }}>ABOUT US</h3>
                                    <p style={{ color: '#525252', fontFamily: 'Inter' }}>Gigahertz Computing&apos;s story began in Bangalore in 1999, a fresh start under proprietorship. They drove headfirst into the world of computers and peripherals, offering sales and services. The IT revolution was in full swing, and Gigahertz quickly established itself as a leader in computer hardware and services, leveraging their deep knowledge and expertise to build a large and loyal customer base. Their reach expanded to include public sectors, government organizations, multinational corporations, and educational institutions.</p>
                                    <p style={{ color: '#525252', fontFamily: 'Inter' }}>Gigahertz didn&apos;t stop there. They saw an opportunity to expand by partnering with Original Equipment Manufacturers (OEMs). By undergoing rigorous training, they became certified to not only sell, but also service and support these OEM products. Today, Gigahertz proudly holds registered partnership status with some of the world&apos;s leading OEMs, such as AWS, Dell, HP, Acronics, Sophos and so on.</p>
                                    <p style={{ color: '#525252', fontFamily: 'Inter' }}>The company has witnessed remarkable growth since its inception. From a finger counting team members to over three digit headcount. Their service offerings have also diversified significantly, now encompassing not only Infrastructure hardware and services, but also networking solutions, CCTV surveillance, email security, software development, and more.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-12 col-lg-12 col-12" data-aos="fade-up" style={{ marginTop: '50px' }}>
                        <p style={{ color: '#525252', fontFamily: 'Inter' }}>In 2002, Gigahertz landed a prestigious project - developing a ticketing software system for the Bangalore Metropolitan Transport Corporation (BMTC) to be implemented citywide. This marked a significant milestone in their journey.</p>
                        <p style={{ color: '#525252', fontFamily: 'Inter' }}>Recognizing the evolving business landscape, Gigahertz Computing took a strategic step in 2013 by incorporating as Gigahertz Computing India Pvt. Ltd. This move opened doors to even more challenging and exciting business verticals, including Automation, Cloud Solutions, Data Backup, Storage, Resource Placements, and Security Solutions.</p>
                    </div>
                </div>
                <Stack direction={"row"} sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}>
                    <div className="card-container">
                        <FlipCard
                            frontText="Beyond Hardware: Building Integrated Systems"
                            backText="Gigahertz Computing Solutions doesn't just sell computer parts; they offer a comprehensive service. They act as IT consultants, helping clients design and build customized computing systems that perfectly meet their needs. This involves combining hardware and software products from various vendors to create a seamless, integrated solution."
                        />
                        <FlipCard
                            frontText="Integration: Achieving More for Less"
                            backText="Gigahertz's integration services prioritize cost-effectiveness. Instead of expensive, custom-built solutions, they leverage pre-configured components and readily available hardware and software to achieve your business goals. This approach is often more cost-effective than developing entirely new systems from scratch."
                        />
                        <FlipCard
                            frontText="Crafting Information Systems: Tailored Solutions"
                            backText="The creation of these information systems can involve a variety of tasks. Gigahertz can design and build a customized Optical Mark Recognition (OMR) application architecture, integrate it with existing or new hardware and software, and ensure seamless communication within your infrastructure."
                        />
                        <FlipCard
                            frontText="Beyond Products: IT Consulting Expertise"
                            backText="Gigahertz goes beyond simply selling products. They act as trusted advisors, guiding businesses on how to leverage information technology to achieve their strategic objectives. Their services encompass not just consulting, but also project estimation, management, implementation, deployment, and ongoing system administration, ensuring your IT infrastructure runs smoothly and efficiently."
                        />
                    </div>
                </Stack>
                <VissionMission
                    vissionHeading="OUR VISION"
                    vissionContent="Our vision is to mark a niche in the IT market, reachable to every customer who are wanting flawless and seamless solution for their setup."
                    missionHeading="OUR MISSION"
                    missionContent="Gigahertz is working towards expanding the businesses in the areas of Automation, Cloud Solutions, Resource Placements and Security solutions in alignment with the company’s goals and objectives. Company’s mission is to provide flawless integrated solutions to all our customers making it easy for them to implement, automate and secure it seamlessly."
                />

                <div className="container" >
                    <h3 style={{ fontFamily: 'Inter', fontSize: '35px', textAlign: 'center' }}>OUR CORE VALUES</h3>
                    <p style={{ color: '#525252', fontFamily: 'Inter', textAlign: 'center' }}>Gigahertz is built on four core values that inspire us to work together every day toward improving the world.</p>
                </div>


                <Grid container spacing={{ xs: 0, md: 5 }} sx={{ p: { xs: 0, md: 10 } }}>

                    <Grid item xs={6} md={3}>
                        <CoreValues
                            coreHeading="GROWTH AND EXPANSION"
                            coreContent='We’re obsessed with our customers’ success and take pride in their achievements.' />

                    </Grid>
                    <Grid item xs={6} md={3}>
                        <CoreValues
                            coreHeading="PATIENCE AND TRUST"
                            coreContent='We communicate openly with our customers, and do what it takes to keep their data secure.' />

                    </Grid>
                    <Grid item xs={6} md={3}>
                        <CoreValues
                            coreHeading="INNOVATION & EXECUTION"
                            coreContent='We pursue ideas that could change our company, our country — and maybe even the world.' />

                    </Grid>
                    <Grid item xs={6} md={3}>
                        <CoreValues
                            coreHeading="UNITY IN DIVERSITY"
                            coreContent='We respect and value employees from every background, and we thrive as a result.' />

                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default AboutFour;
