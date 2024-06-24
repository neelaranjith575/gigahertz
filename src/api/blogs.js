
import axios from 'axios';
import { BASE_URL } from '../configuration/url.config';

export const fetchBlogs = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/blogs?populate=*`);
        return response.data;
    } catch (error) {
        console.error('Fetch Blogs Failed:', error);
        throw error;
    }
};


export const fetchBlogDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/blogs/${id}?populate=*`)
        console.log(response, "response")
        return response.data;
    }
    catch (error) {
        console.error('Fetch Blogs Details Failed:', error);
        throw error;
    }
}
