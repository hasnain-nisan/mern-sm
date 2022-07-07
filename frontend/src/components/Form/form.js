import React, {useState} from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material'
import FileBase from 'react-file-base64'
import { useDispatch } from "react-redux";
import classes from './styles'
import { createPost } from '../../actions/posts';


const Form = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(postData));
  }

  const reset = () => {

  }

  return (
    <Paper style={classes.paper}>
      <form
        style={classes.form}
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
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
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
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
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div style={classes.fileInput}>
          <FileBase
            type="file"
            multiple={true}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
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