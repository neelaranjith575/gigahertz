import React, { useState, useEffect } from 'react';
import BlogItem from '../../components/Blog/BlogItem';
import { fetchBlogs } from '../../api/blogs';

const PageBlog = () => {

    const [blogs, setBlogs] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await fetchBlogs();
                setBlogs(data?.data || []);
                console.log(data, "data")
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getBlogs();
    }, []);

    return (
        <div className="section section-padding fix">
            <div className="container">

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
                {blogs.map((blog, key) => (
                        <div key={key} className="col mb-6" data-aos="fade-up">
                            <BlogItem
                                data={{
                                    id:blog?.id,
                                    Title: blog?.attributes?.Title,
                                    Long_Description: blog?.attributes?.Long_Description,
                                    Short_Description: blog?.attributes?.Short_Description,
                                    publishedAt: blog?.attributes?.publishedAt,
                                    ThumbImage: blog?.attributes?.ThumbImage?.data?.attributes?.url
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

export default PageBlog;
