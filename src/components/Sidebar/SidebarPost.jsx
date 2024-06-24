import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fetchBlogs } from '../../api/blogs';

const SidebarPost = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await fetchBlogs();
                setBlogs(data?.data || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getBlogs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="sidebar-widget-content">
            <ul className="sidebar-widget-list-post">
                {blogs?.slice(0, 4).map((value) => (
                    <li key={value.id}>
                        {/* <span className="cate">{value.attributes.categories.slice(0, 1)}</span> */}
                        <Link to={process.env.PUBLIC_URL + `/blog-details/${value.id}`}>
                            {value.attributes.Title}
                        </Link>
                        <p>{value.attributes?.Short_Description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarPost;
