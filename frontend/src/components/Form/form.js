import React, {useEffect, useState} from 'react'
import { TextField, Button, Typography, Paper, Input } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import classes from './styles'
import { createPost, updatePost } from '../../actions/posts';

import { toast } from "react-toastify";


const Form = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    image: ''
  })

  const currentPostID = useSelector((state) => state.postData.currentPostId);

  const post = useSelector((state) => currentPostID ? state.postData.posts.find((p) => p._id === currentPostID) : null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let notAllowedfileType = false;
    let data = new FormData()
    data.append("creator", postData.creator);
    data.append("title", postData.title);
    data.append("message", postData.message);
    data.append("tags", postData.tags);
    data.append('image', postData.image)

    if(postData.image !== ""){
      notAllowedfileType = checkFileType(postData.image);
    }
    if (!notAllowedfileType) {
      if (currentPostID) {
        dispatch(updatePost(currentPostID, data));
      } else {
        dispatch(createPost(data));
      }
    } else {
      toast.error("File type must be an image");
    }
  }

  const reset = () => {

  }

  const checkFileType = (file) => {
    if (!file.type.includes("image/")) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  useEffect(() => {
    if (!currentPostID){
      setPostData({
        creator: "",
        title: "",
        message: "",
        tags: "",
        image: "",
      });
      document.getElementById('image').value = ""
    }
  }, [currentPostID]);

  return (
    <Paper style={classes.paper}>
      <form
        style={classes.form}
        onSubmit={handleSubmit}
        autoComplete="off"
        encType="multipart/form-data"
      >
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          required
          style={{ margin: '5px' }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          required
          style={{ margin: '5px' }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          required
          style={{ margin: '5px' }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          required
          style={{ margin: '5px' }}
        />
        <div style={classes.fileInput}>
          <Input
            id="image"
            type="file"
            name="file"
            onChange={(e) =>
              setPostData({ ...postData, image: e.target.files[0] })
            }
            required
            accept="image/*"
            style={{ margin: '5px' }}
          />
        </div>
        <Button
          style={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
        >
          Submit
        </Button>
        <Button
          style={classes.buttonReset}
          variant="contained"
          size="large"
          onClick={reset}
        >
          Reset
        </Button>
      </form>
    </Paper>
  );
}

export default Form