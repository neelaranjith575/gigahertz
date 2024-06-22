import React, { useState, useEffect } from 'react';
import { fetchTestimonials } from '../../api/testimonials';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getTestimonials = async () => {
        try {
          const data = await fetchTestimonials();
          console.log('API response:', data); // Log the API response to check its structure
          // Access the array of testimonials within the data
          setTestimonials(data?.data || []);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      getTestimonials();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <h1>Testimonials</h1>
        <ul>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <h2>{testimonial.attributes.Name}</h2>
              <p>{testimonial.attributes.Designation}</p>
              <p>{testimonial.attributes.Content[0]?.children[0]?.text}</p>
              <p>Rating: {testimonial.attributes.Ratings}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
export default Testimonials;
