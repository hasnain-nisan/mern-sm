const express = require('express');
const router = express.Router();

const { getAllPosts, createPost, updatePost, deletePost, likePost} = require("../controllers/postController");

const uploadMulterSingle = require('../utils/file-upload')
const fileValidate = require('../utils/file-validation');

router.get('/', getAllPosts)
router.post("/", uploadMulterSingle, fileValidate, createPost)
router.patch('/:id', uploadMulterSingle, updatePost)
router.delete('/:id', deletePost)
router.patch("/:id/likePost", likePost);

module.exports = router