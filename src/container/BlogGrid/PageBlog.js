import React, { useState, useEffect } from "react";
import BlogItem from "../../components/Blog/BlogItem";
import { fetchBlogs } from "../../api/blogs";

const PageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        const sortedBlogs = data?.data.sort(
          (a, b) =>
            new Date(b.attributes.publishedAt) -
            new Date(a.attributes.publishedAt)
        );
        setBlogs(sortedBlogs || []);
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
                  id: blog?.id,
                  Title: blog?.attributes?.Title,
                  Long_Description: blog?.attributes?.Long_Description,
                  Short_Description: blog?.attributes?.Short_Description,
                  publishedAt: blog?.attributes?.publishedAt,
                  ThumbImage:
                    blog?.attributes?.ThumbImage?.data?.attributes?.url,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageBlog;
