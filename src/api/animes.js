import axios from 'axios';

export const getAnimesRequests = async() => await axios.get('http://localhost:8011/animes');
export const createAnimesRequests = async(post)=> await axios.post('http://localhost:8011/animes', post);
export const deleteAnimesRequests = async id => await axios.delete('http://localhost:8011/animes/'+ id);
export const getAnimeRequests = async id => await axios.get('http://localhost:8011/animes/'+ id);
export const updateAnimeRequests = async (id, newFields) => 
  await axios.put(`http://localhost:8011/animes/${id}`, newFields);