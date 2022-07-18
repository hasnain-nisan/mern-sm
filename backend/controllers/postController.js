const { request } = require('express')
const Post = require('../models/Post')


const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createPost = async (req, res) => {
    let imageName = req.file.path
    //adding imageName to req.body
    req.body.file = imageName

    const post = req.body
    const newPost = new Post(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
  getAllPosts,
  createPost,
};