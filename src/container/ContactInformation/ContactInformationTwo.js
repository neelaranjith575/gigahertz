import React from 'react';
import {useEffect, useRef} from "react";
import contactDataTwo from '../../data/contactInfo/contactInfoTwo.json';
import ContactInfoItem from '../../components/ContactInfo/ContactInfoItemTwo.jsx';
import Parallax from 'parallax-js';
import GoogleMap from '../../container/Map/GoogleMap.js';

const ContactInformationTwo = () => {
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
                            

                            {contactDataTwo && contactDataTwo.map((single, key) => {
                                return(
                                    <React.Fragment key={key}>
                                        <ContactInfoItem classOption="ct-info-two" data={single} key={key} />
                                    </React.Fragment>
                                ); 
                            })}
                        </div>
                    </div>
                    <div className="col mt-lg-0 mt-md-10 mt-8" data-aos="fade-up">
                    <GoogleMap />
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

export default ContactInformationTwo
