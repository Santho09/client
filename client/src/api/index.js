import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const API = axios.create({
  baseURL: backendUrl  // Use your Render backend URL
});

// Add request interceptor to include the JWT token (author) in the headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('author'); // Get the token from localStorage

  if (token) {
    req.headers.Authorization = `Bearer ${token}`; // Set the Authorization header with the token
  }

  return req;
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
