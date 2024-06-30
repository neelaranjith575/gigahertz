import React, { useState, useEffect } from 'react';
import CareersList from '../../components/Careers/CareersList';
import { fetchCareersList } from '../../api/careers';

const PageCareerList = () => {

    const [careers, setCareers] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        const getCareers = async () => {
            try {
                const data = await fetchCareersList();
                setCareers(data?.data || []);
                // console.log(data, "data")
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getCareers();
    }, []);

    return (
        <div className="section section-padding fix">
            <div className="container">

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                {careers.map((careers, key) => (
                        <div key={key} className="col mb-6" data-aos="fade-up">
                            <CareersList
                                data={{
                                    id:careers?.id,
                                    jobTitle: careers?.attributes?.jobTitle,
                                    jobLocation: careers?.attributes?.jobLocation,
                                    jobDescription: careers?.attributes?.jobDescription,
                                    jobExperience: careers?.attributes?.jobExperience,
                                    jobRequirements: careers?.attributes?.jobRequirements,
                                    jobResponsibilities: careers?.attributes?.jobResponsibilities,
                                    jobIndustry: careers?.attributes?.jobIndustry,
                                    jobEducation: careers?.attributes?.jobEducation,
                                    publishedAt: careers?.attributes?.publishedAt,
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* <div className="row mt-10">
                    <div className="col">

                        <ul className="pagination center">
                            <li><Link to={process.env.PUBLIC_URL + "/"} className="prev"><i className="fa fa-angle-left"></i></Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/"} className="active">1</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/"}>2</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/"}>3</Link></li>
                            <li><span className="page-numbers dots"><i className="fa fa-ellipsis-h"></i></span></li>
                            <li><Link to={process.env.PUBLIC_URL + "/"}>5</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/"} className="next"><i className="fa fa-angle-right"></i></Link></li>
                        </ul>

                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default PageCareerList;
