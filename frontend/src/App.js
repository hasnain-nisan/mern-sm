import { useEffect } from 'react'
import {Container, Grow, Grid} from '@mui/material'
import { useDispatch } from 'react-redux'

import Form from './components/Form/form'
import Posts from './components/Posts/posts'

import {getPosts} from './actions/posts'
import Navbar from './components/Navbar/Navbar'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <Navbar/>
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
