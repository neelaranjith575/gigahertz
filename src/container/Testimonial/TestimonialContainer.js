import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import SwiperSlider, { SwiperSlide } from "../../components/swiper";
import Background from "../../assets/images/testimonial/bg.png";
import { fetchTestimonials } from '../../api/testimonials'; 
import Testimonial from '../../components/Testimonial/Testimonial.jsx'; 

const TestimonialContainer = ({ classOption }) => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTestimonials = async () => {
            try {
                const data = await fetchTestimonials();
                setTestimonials(data?.data || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getTestimonials();
    }, []);

    const sliderOptions = {
        spaceBetween: 50,
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: true,
        breakpoints: {
            991: {
                slidesPerView: 1
            },
            1499: {
                slidesPerView: 1
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={`testimonial-section section section-padding-t90 ${classOption}`} style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="container-fluid ps-xl-16 ps-lg-3 ps-md-3 ps-sm-3 ps-3 pe-xl-16 pe-lg-3 pe-md-3 pe-sm-3 pe-3">
                <div className="section-title-two mb-8">
                    <h3 className="title" style={{ textAlign: "center", color: 'white' }}>
                        TESTIMONIALS
                    </h3>
                </div>
                <SwiperSlider className="testimonial-slider" data-aos="fade-up" data-aos-delay="300" options={sliderOptions} navigation={true}>
                    {testimonials.map((testimonial, key) => (
                        <SwiperSlide key={key}>
                            <Testimonial data={{
                                desc: testimonial.attributes.Content[0]?.children[0]?.text,
                                name: testimonial?.attributes?.Name,
                                position: testimonial?.attributes?.Designation,
                                ratings:testimonial?.attributes?.Ratings
                            }} />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            </div>
        </div>
    );
};

TestimonialContainer.propTypes = {
    classOption: PropTypes.string
};

TestimonialContainer.defaultProps = {
    classOption: "testimonial-section section section-padding-t90"
};

export default TestimonialContainer;
