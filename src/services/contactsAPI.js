import axios from 'axios';
import { useDispatch } from 'react-redux';

axios.defaults.baseURL = 'http://localhost:4444';

export const fetchContacts = async () => {
    const response = await axios.get(`/contacts`);
    return response.data;
}