const fs = require("fs");
const { request } = require("express");
const { mongoose } = require("mongoose");
const { reset } = require("nodemon");
const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort('-createdAt');
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  let imageName = req.file.path;
  //adding imageName to req.body
  req.body.file = imageName;

  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const { title, message, creator, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: `No post available with the id: ${_id}` });
  }

  const post = await Post.findOne({ _id });
  post.title = title;
  post.message = message;
  post.creator = creator;
  post.tags = tags;

  if (req.file) {
    let newFilePath = req.file.path;
    let oldFilePath = post.file
    //unlink old image
    fs.unlinkSync(oldFilePath);
    post.file = newFilePath;
  }

  try {
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: `No post available with the id: ${_id}` });
  }
  try {
    const post = await Post.findByIdAndRemove(_id)
    let oldFilePath = post.file;
    //unlink old image
    fs.unlinkSync(oldFilePath);
    res.status(200).json({message: `Successfully deleted`})
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const likePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: `No post available with the id: ${_id}` });
  }
  try {
    const post = await Post.findById(_id);
    post.likeCount = Number(post.likeCount) + 1;
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  likePost
};
