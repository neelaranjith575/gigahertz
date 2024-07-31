import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { fetchBlogDetails } from "../../api/blogs";
import { IMAGE_URL } from "../../configuration/url.config";
import moment from "moment";
import { marked } from "marked";

const BlogDetails = ({ data }) => {
  const [blog, setBlog] = useState(data || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const data = await fetchBlogDetails(id);
        setBlog(data?.data || null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!data && id) {
      getBlogDetails();
    } else {
      setLoading(false);
    }
  }, [id, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  const imageUrl = `${IMAGE_URL}${blog?.attributes?.ThumbImage?.data?.attributes?.url}`;
  const images = blog?.attributes?.Images?.data || [];

  const longDescription = marked(blog.attributes.Long_Description);

  return (
    <div className="blog-3 blog-details col">
      <div className="thumbnail">
        <img className="w-100" src={imageUrl} alt="Blog Image" />
      </div>
      <div className="info">
        <h3 className="title" style={{ fontFamily: "Inter" }}>
          {blog?.attributes?.Title}
        </h3>
        <p style={{ fontFamily: "Inter" }}>
          {blog?.attributes?.Short_Description}
        </p>

        <div className="custom-layout-gallery mt-lg-5 mt-5 mb-5">
          <div className="row">
            {images.map((image, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-10"
              >
                <div className="thumbnail" data-aos="fade-up">
                  <img
                    className="w-100"
                    style={{ height: "300px" }}
                    src={`${IMAGE_URL}${image.attributes.url}`}
                    alt={image.attributes.alternativeText || "Blog Image"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div style={{ fontFamily: "Inter" }} data-aos="fade-up">
          {renderRichText(blog?.attributes?.Long_Description)}
        </div> */}
        <div
          style={{ fontFamily: "Inter" }}
          data-aos="fade-up"
          dangerouslySetInnerHTML={{ __html: longDescription }}
        />

        <div>
          <ul className="meta mb-0 mt-12" data-aos="fade-up">
            <li
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              <i className="fa fa-pencil-alt"></i>
              {blog?.attributes?.Author}
            </li>
            <li
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              <i className="far fa-calendar"></i>
              {moment(blog?.attributes?.publishedAt).format("MMMM D, YYYY")}
            </li>
          </ul>
          <p
            style={{ fontFamily: "Inter", fontStyle: "italic" }}
            data-aos="fade-up"
          >
            {blog?.attributes?.Author_Description}
          </p>
        </div>
      </div>
    </div>
  );
};

BlogDetails.propTypes = {
  data: PropTypes.shape({
    attributes: PropTypes.shape({
      PostBy: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Category: PropTypes.string.isRequired,
      Long_Description: PropTypes.array.isRequired,
      Short_Description: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      Author: PropTypes.string.isRequired,
      Author_Description: PropTypes.string.isRequired,
      Banner_Image: PropTypes.string.isRequired,
      Images: PropTypes.arrayOf(
        PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string.isRequired,
            alternativeText: PropTypes.string,
          }),
        })
      ).isRequired,
    }),
  }),
};

BlogDetails.defaultProps = {
  data: null,
};

export default BlogDetails;
