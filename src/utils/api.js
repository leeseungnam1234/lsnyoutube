import axios from "axios";

export const BASE_URL = 'https://youtube-v311.p.rapidapi.com/activities/'

const options = {
    params: {
        maxResults: '48',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}