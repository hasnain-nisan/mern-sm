import axios from 'axios'

export const url = "http://localhost:5000/api/v1/posts";

export const fetchPosts = () => axios.get(url)
export const createPost = (postData) => axios.post(url, postData)