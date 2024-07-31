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
        <>
            <div className="section section-padding fix" style={{ backgroundColor: '#ecf2f7' }}>
                <div className="container">
                    <div className="row row-cols-lg-12 row-cols-md-12 row-cols-sm-12 row-cols-1 mb-n6">
                        <div className="section-title-two mb-8">
                            <h3 className="title" style={{ textAlign: 'center' }}>Transform Your World</h3>
                        </div>
                        <p style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', color: '#525252' }}>
                            Join us to work alongside a diverse and motivated team on impactful global projects. Embrace the chance to learn, grow, and achieve your aspirations.
                        </p>
                    </div>
                </div>
            </div>


            <div className="section section-padding fix">
                <div className="container">
                    <div className="section-title-two mb-8">
                        <h3 className="title" style={{ fontSize: "50px" }}>Job Openings</h3>
                    </div>
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">

                        {careers.map((careers, key) => (
                            <div key={key} className="col mb-6" data-aos="fade-up">
                                <CareersList
                                    data={{
                                        id: careers?.id,
                                        jobTitle: careers?.attributes?.jobTitle,
                                        jobLocation: careers?.attributes?.jobLocation,
                                        jobDescription: careers?.attributes?.jobDescription,
                                        jobExperience: careers?.attributes?.jobExperience,
                                        jobRequirements: careers?.attributes?.jobRequirements,
                                        jobResponsibilities: careers?.attributes?.jobResponsibilities,
                                        jobIndustry: careers?.attributes?.jobIndustry,
                                        jobEducation: careers?.attributes?.jobEducation,
                                        noOfOpenings: careers?.attributes?.noOfOpenings,
                                        publishedAt: careers?.attributes?.publishedAt,
                                    }}
                                />
                            </div>
                        ))}
                    </div>



                </div>
            </div>
            <div className="section section-padding fix" style={{ backgroundColor: '#FAFAFA' }}>
                <div className="container">
                    <div className="row row-cols-lg-12 row-cols-md-12 row-cols-sm-12 row-cols-1 mb-n6">
                        <div className="section-title-two mb-8">
                            <h3 className="title" style={{ textAlign: 'center' }}>Life at Gigahertz</h3>
                        </div>
                        <p style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '16px', color: '#525252' }}>
                            Life at Gigahertz is dynamic and inspiring. Our team of passionate professionals collaborates on cutting-edge projects that push the boundaries of technology. We foster a culture of innovation and continuous learning, where every voice is valued and every idea has the potential to make a difference. From flexible work arrangements to wellness programs, we prioritize work-life balance and employee well-being. Join us to be part of a supportive community that celebrates achievements and encourages personal and professional growth. At Gigahertz, your career is more than just a job &lsquo; it&apos;s a journey of endless possibilities.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageCareerList;
