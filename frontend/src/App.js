import { useEffect } from 'react'
import {Container} from '@mui/material'
import { useDispatch } from 'react-redux'

import {getPosts} from './actions/posts'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

import { Routes, Route, Link } from "react-router-dom";
import Auth from './components/Auth/Auth'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])


  return (
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Container>
  );
}

export default App;
