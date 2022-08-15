import { AppBar, Typography } from '@mui/material';
import React from 'react'
import classes from '../../styles';

import memories from '../../images/memories.png'

const Navbar = () => {
  return (
    <AppBar style={classes.appBar} position="static" color="inherit">
      <Typography style={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img style={classes.image} src={memories} alt="memories" height="60" />
    </AppBar>
  );
}

export default Navbar