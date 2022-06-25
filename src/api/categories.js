import axios from "axios";

export const getCategoriesRequests = async () =>
  await axios.get("http://localhost:8011/categories");

export const createCategoriesRequest = async (post) =>
  await axios.post("http://localhost:8011/categories", post);

export const deleteCategoriesRequest = async (id) =>
  await axios.delete("http://localhost:8011/categories/" + id);

export const getCategorieRequest = async (id) =>
  await axios.get("http://localhost:8011/categories/" + id);
  
export const updateCategorieRequest = async (id, newFields) =>
  await axios.put(`http://localhost:8011/categories/${id}`, newFields);
