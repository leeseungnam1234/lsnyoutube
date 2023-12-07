import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: 'https://youtube-v311.p.rapidapi.com/activities/',
  params: {
    part: 'snippet',
    channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
    maxResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '73987edad4mshb1994089811ef36p1ae50bjsn2169bf579e4f',
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    console.log(data)
    return data
}