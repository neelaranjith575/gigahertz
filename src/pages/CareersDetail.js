import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import CareerForm from "../components/Careers/CarrerForm.jsx"
import SectionTitle from '../components/SectionTitles/SectionTitle.jsx';
import { fetchCareersDetails } from "../api/careers.js";
import Parallax from 'parallax-js';
import Banner from "../assets/images/services/cb.png"



const renderRichText = (content) => {
    if (Array.isArray(content)) {
        return content.map((item, index) => renderRichText(item));
    }

    if (content.type === 'paragraph') {
        return (
            <p key={Math.random()}>
                {renderRichText(content.children)}
            </p>
        );
    }

    if (content.type === 'text') {
        const style = content.bold ? { fontWeight: 'bold' } : {};
        return (
            <span key={Math.random()} style={style}>
                {content.text}
            </span>
        );
    }

    return null;
};

const CareerDetail = () => {
    const { id } = useParams();
    const [career, setCareer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const sceneEl = useRef(null);

    useEffect(() => {
        const getCareersDetails = async () => {
            try {
                const data = await fetchCareersDetails(id);
                console.log(data, "data");
                setCareer(data?.data || null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getCareersDetails();
    }, [id]);

    useEffect(() => {
        if (sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
            });

            parallaxInstance.enable();

            return () => parallaxInstance.disable();
        }
    }, [sceneEl.current]);

    const pageTitle = career ? career.attributes.jobTitle : "Careers Details";

    return (
        <React.Fragment>
            <SEO title="Gigahertz || Careers Details" />
            <Header />
            <Breadcrumb
                bannerImage={Banner}
                title={pageTitle}
                content="Home"
                contentTwo="Role Overview"
            />
            <div className="section section-padding-top contact-section">
                <div className="container">
                    <div className="row row-cols-lg-2 row-cols-1">
                        <div className="col" data-aos="fade-up">
                            {loading && <div>Loading...</div>}
                            {error && <div>Error: {error}</div>}
                            {career && (
                                <div className="contact-Information me-xl-7">
                                    <h3 className="title" style={{ fontFamily: "Bebas Neue" }}>
                                        Job Overview
                                    </h3>
                                    <p>{renderRichText(career?.attributes?.jobDescription)}</p>
                                    <h3 className="title" style={{ fontFamily: "Bebas Neue" }}>
                                        Responsibilities
                                    </h3>
                                    <p>{renderRichText(career?.attributes?.jobResponsibilities)}</p>
                                    <h3 className="title" style={{ fontFamily: "Bebas Neue" }}>
                                        Requirements
                                    </h3>
                                    <p>{renderRichText(career?.attributes?.jobRequirements)}</p>
                                    <h3 className="title" style={{ fontFamily: "Bebas Neue" }}>
                                        Education
                                    </h3>
                                    <p>{career?.attributes?.jobEducation}</p>
                                    <h3 className="title" style={{ fontFamily: "Bebas Neue" }}>
                                        Experience
                                    </h3>
                                    <p>{career?.attributes?.jobExperience}</p>
                                    <h3 className="title" style={{ fontFamily: "Bebas Neue" }}>
                                        Location
                                    </h3>
                                    <p>{career?.attributes?.jobLocation}</p>
                                    <h3 className="title" style={{ fontFamily: "Bebas Neue" }}>
                                        Industry
                                    </h3>
                                    <p>{career?.attributes?.jobIndustry}</p>

                                    <h3 className="title" style={{ fontFamily: "Bebas Neue" }}>
                                        No of Openings
                                    </h3>
                                    <p>{career?.attributes?.noOfOpenings} Openings</p>

                                </div>

                            )}
                        </div>
                        <div className="col mt-lg-0 mt-md-10 mt-8" data-aos="fade-up">
                            <div className="contact-form-section section section-padding-t90-b100 bg-primary-blue">
                                <div className="container">
                                    <div className="row">
                                        <div>
                                            <SectionTitle
                                                headingOption="fz-32"
                                                title="APPLY NOW"
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
                                <div className="shape shape-1" id="scene" ref={sceneEl}></div>
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
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    );
};

export default CareerDetail;
