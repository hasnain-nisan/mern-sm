import React from 'react'
import { deletePost, likePost } from '../../../actions/posts';
import { useDispatch } from "react-redux";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import {MdThumbUp, MdDelete} from 'react-icons/md'
import { BsThreeDots } from "react-icons/bs";
import moment from 'moment'

import {SET_CURRENT_POST_ID} from '../../../constants/actionTypes'

import classes from './styles'

const Post = ({post}) => {

  const dispatch = useDispatch();

  const filePath = (str) => {
    const url = "http://localhost:3000/";
    const file = str.split("\\");
    return url + file[0] + '/' + file[1]
  }

  const setCurrentPostId = (id) => {
    dispatch({
      type: SET_CURRENT_POST_ID,
      payload: id,
    });
  }

  const handleDeletePost = (id) => {
    dispatch(deletePost(id))
  };

  const handleLikePost = (id) => {
    dispatch(likePost(id))
  }

  return (
    <Card style={classes.card}>
      <CardMedia
        style={classes.media}
        image={filePath(post.file)}
        title={post.title}
      />
      <div style={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div style={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentPostId(post._id)}
        >
          <BsThreeDots size={25} />
        </Button>
      </div>
      <div style={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}, `)}
        </Typography>
      </div>
      <Typography style={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions style={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => handleLikePost(post._id)}
        >
          <MdThumbUp />
          Like
          {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => handleDeletePost(post._id)}
        >
          <MdDelete />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post