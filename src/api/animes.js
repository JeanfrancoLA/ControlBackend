import axios from 'axios';

export const getAnimesRequests = async() => await axios.get('/animes');
export const createAnimesRequests = async(post)=> await axios.post('/animes',post);