const express = require('express');
const router = express.Router();

const { getAllPosts, createPost, updatePost} = require("../controllers/postController");

const uploadMulterSingle = require('../utils/file-upload')
const fileValidate = require('../utils/file-validation');

router.get('/', getAllPosts)
router.post("/", uploadMulterSingle, fileValidate, createPost)
router.patch('/:id', uploadMulterSingle, updatePost)

module.exports = router