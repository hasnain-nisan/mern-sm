const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    maxlength: 50,
  },
  message: {
    type: String,
    required: [true, "Please provide a message"],
  },
  creator: {
    type: String,
    required: [true, "Please provide a creator"],
  },
//   createdBy: {
//     type: mongoose.Types.ObjectId,
//     ref: "User",
//     required: [true, "Please provide a user"],
//   },
  tags: {
    type: [String],
    require: [true, "Please provide atleast one tag"]
  },
  file: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0
  }
}, {timestamps: true});


const Post = mongoose.model('Post', postSchema)

module.exports = Post