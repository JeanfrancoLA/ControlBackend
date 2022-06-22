import axios from 'axios';

export const getAnimesRequests = async() => await axios.get('/animes');
export const createAnimesRequests = async(post)=> await axios.post('/animes',post);
export const deleteAnimesRequests = async id => await axios.delete('/animes/'+ id);