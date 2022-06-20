const Post = require('../models/Post')


const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        console.log(error);
    }
}

const createPost = async (req, res) => {
  res.send("All posts fetched");
};

module.exports = {
    getAllPosts
}