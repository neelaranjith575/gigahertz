import { useParams } from "react-router-dom";
import { fetchCareersDetails } from "../../api/careers";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CareersDetails = ({ data }) => {
  const [career, setCareer] = useState(data || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getCareersDetails = async () => {
      try {
        const result = await fetchCareersDetails(id);
        console.log(result, "data");
        setCareer(result?.data || null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!data && id) {
      getCareersDetails();
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

  if (!career) {
    return <div>No career found</div>;
  }

  return (
    <div className="info">
      <h3 className="title" style={{ fontFamily: "Inter" }}>
        {career.attributes.jobTitle}
      </h3>
    </div>
  );
};

CareersDetails.propTypes = {
  data: PropTypes.shape({
    attributes: PropTypes.shape({
      PostBy: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
    }),
  }),
};

CareersDetails.defaultProps = {
  data: null,
};

export default CareersDetails;
