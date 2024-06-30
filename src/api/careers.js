import axios from 'axios';
import { BASE_URL } from '../configuration/url.config';

export const fetchCareersList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/careers?populate=*`);
        return response.data;
    } catch (error) {
        console.error('Fetch Careers Failed:', error);
        throw error;
    }
};


export const fetchCareersDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/careers/${id}?populate=*`)
        console.log(response, "response")
        return response.data;
    }
    catch (error) {
        console.error('Fetch Careers Details Failed:', error);
        throw error;
    }
}




export const careerDetails = async (name, phone, email, jobName, message, resume) => {
    try {
        const formData = new FormData();
        formData.append('data', JSON.stringify({ name, phone, email, jobName, message }));
        formData.append('files.resume', resume[0]);

        const response = await axios.post(`${BASE_URL}/carrerforms`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Success:', response.data);
        
    } catch (error) {
        console.error('Error:', error);
    }
};


export const createCareer = async (name, phone, email, image) => {

    try {

        const sendData = new FormData();
        sendData.append('data', JSON.stringify({ name, phone, email }));
        sendData.append('file.image', image[0]);
        const response = await axios.post(`${BASE_URL}/careerforms`, sendData
            , {
                headers: {
                    "Content-Type": "multipart/form-data"
            }
        }
        );
        console.log(response, "response")
        
    } catch (error) {
        console.error("Error", error)
        
    }
}