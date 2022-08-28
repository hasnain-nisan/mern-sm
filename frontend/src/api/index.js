import axios from 'axios'

export const url = "http://localhost:5000/api/v1";

export const register = (formData) => axios.post(`${url}/auth/signUp`, formData);
export const login = (formData) => axios.post(`${url}/auth/signIn`, formData);
// export const refreshToken = () => axios.get(`${url}/auth/refreshToken`, { withCredentials: true });
export const logout = () => axios.post(`${url}/auth/logOut`);

export const fetchPosts = () => axios.get(`${url}/posts`)
export const createPost = (postData) => axios.post(`${url}/posts`, postData)
export const updatePost = (id, postData) => axios.patch(`${url}/posts/${id}`, postData)
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);
export const likePost = (id) => axios.patch(`${url}/posts/${id}/likePost`);