import React from 'react'
import Post from './Post/Post'
import {Grid, CircularProgress} from '@mui/material'
import classes from './styles'
import { useSelector } from 'react-redux'

const Posts = () => {

  const posts = useSelector((state) => state.postData.posts)

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid style={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts