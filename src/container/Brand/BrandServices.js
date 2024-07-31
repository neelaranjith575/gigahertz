import PropTypes from "prop-types";
import React from 'react';
import BrandData from '../../data/brand/brandService.json';
import Brand from '../../components/Brand/Brand.jsx';
import Swiper, { SwiperSlide } from "../../components/swiper";
import { Typography, } from "@mui/material";

const BrandService = ({ classOption }) => {
    const sliderOptions = {
        spaceBetween: 30,
        slidesPerView: 6,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 6
            },
            992: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 5

            },
            576: {
                slidesPerView: 4
            },
            320: {
                slidesPerView: 2
            }
        }
    }
    return (
        <div className={`brand-section section ${classOption}`} style={{ backgroundColor: '#FAFAFA', padding: "50px", marginTop: '50px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos="fade-up">
                        <div className="brand-wrapper">
                            <div className="brand-list">
                                <Typography sx={{ textAlign: "center", marginTop: { xs: '30px', md: '30px' }, mb: { xs: '50px', md: '50px' }, fontSize: { xs: '23px', md: '40px' }, color: '#000000', fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', }}>Brands we deal with</Typography>
                                <Swiper className="brand-carousel" options={sliderOptions}>
                                    {BrandData &&
                                        BrandData.map((single, key) => {
                                            return (
                                                <SwiperSlide key={key}>
                                                    <Brand data={single} key={key} />
                                                </SwiperSlide>
                                            );
                                        })}

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BrandService.propTypes = {
    classOption: PropTypes.string
};
BrandService.defaultProps = {
    classOption: "brand-section section section-padding-bottom"
};

export default BrandService;
