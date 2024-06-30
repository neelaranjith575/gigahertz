import React from 'react';
import { useEffect, useRef } from "react";
import Parallax from 'parallax-js';
import CareersDetails from '../../components/Careers/CareersDetail.jsx';
import CareerForm from '../../components/Careers/CarrerForm.jsx';
import SectionTitle from "../../components/SectionTitles/SectionTitle.jsx"

const CareerInfo = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-top contact-section">

            <div className="container">
                <div className="row row-cols-lg-2 row-cols-1 align-items-center">
                    <div className="col" data-aos="fade-up">
                        <div className="section-title-two mb-8">
                            {/* <span className="sub-title">Development that converts and delivers</span> */}
                            <h3 className="title" >
                                GET IN TOUCH
                            </h3>
                        </div>
                        <div className="contact-Information me-xl-7">
                            <CareersDetails />
                        </div>
                    </div>
                    <div className="col mt-lg-0 mt-md-10 mt-8" data-aos="fade-up">
                        <div className="contact-form-section section section-padding-t90-b100 bg-primary-blue">
                            <div className="container">
                                <div className="row">
                                    <div >
                                        <SectionTitle
                                            headingOption="fz-32"
                                            title="PLEASE FILL THE Details"
                                            subTitle=""
                                        />
                                        <CareerForm />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col mt-lg-0 mt-md-10 mt-8" data-aos="fade-up">

                        <div className="contact-form-area">
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                {/* <span data-depth="1">
                                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/contact-shape.png"} alt="" />
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape shape-1 scene">
                <span data-depth="1">
                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/newsletter-shape.png"} alt="" />
                </span>
            </div>

        </div>
    )
}

export default CareerInfo
