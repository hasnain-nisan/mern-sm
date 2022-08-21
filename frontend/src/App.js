import { useEffect } from 'react'
import {Container} from '@mui/material'
import { useDispatch } from 'react-redux'

import {getPosts} from './actions/posts'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])


  return (
    <Container maxWidth="lg">
      <Navbar />
      <Home/>
    </Container>
  );
}

export default App;
