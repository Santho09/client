import axios from "axios";

// Update the baseURL to your Render backend URL
const API = axios.create({
  baseURL: 'https://mern-backend-pacr.onrender.com'  // Use your Render backend URL
});

// API calls
export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);
export const createBlog = (formData) => API.post('/blog/', formData);
export const getAllBlogs = () => API.get('/blog/');
export const deleteBlog = (id) => API.delete(`/blog/${id}`);
export const editBlog = (id, formData) => API.post(`/blog/${id}`, formData);
export const getBlogBySearch = (searchQuery) => 
  API.get(`/blog/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags || 'none'}`);
