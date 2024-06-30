import axios from 'axios';
import { BASE_URL } from '../configuration/url.config';

export const contactDetails = async (name, phone, email, subject, message) => {
    try {
        const response = await axios.post(`${BASE_URL}/contacts`, {
            data: {
                name,
                phone,
                email,
                subject,
                message,
            },
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Success:', response.data);
        
    } catch (error) {
        console.error('Error:', error);
    }
};
