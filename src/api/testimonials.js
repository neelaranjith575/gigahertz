
import axios from 'axios';
import { BASE_URL } from '../configuration/url.config';

export const fetchTestimonials = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/testimonials?populate=*`);
    return response.data;
  } catch (error) {
    console.error('Fetch testimonials failed:', error);
    throw error;
  }
};
