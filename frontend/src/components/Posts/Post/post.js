import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import {MdThumbUp, MdDelete} from 'react-icons/md'
import { BsThreeDots } from "react-icons/bs";
import moment from 'moment'

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
      type: "SET_CURRENT_POST_ID",
      payload: id,
    });
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
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentPostId(post._id)}>
          <BsThreeDots size={25}/>
        </Button>
      </div>
      <div style={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags[0].split(",").map((tag) => `#${tag}, `)}
        </Typography>
      </div>
      <CardContent>
        <Typography style={classes.title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions style={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <MdThumbUp />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <MdDelete />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post