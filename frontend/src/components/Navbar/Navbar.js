import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import classes from '../../styles';
import {Link, useNavigate} from 'react-router-dom'

import memories from '../../images/memories.png'

const Navbar = () => {

  const user = null;
  const navigate = useNavigate();

  return (
    <AppBar style={classes.appBar} position="static" color="inherit">
      <div style={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          style={classes.heading}
          variant="h2"
          align="center"
          display={{ xs: "none", sm: "block" }}
        >
          Memories
        </Typography>
        <img
          style={classes.image}
          src={memories}
          alt="memories"
          height="60"
          onClick={() => navigate('/')}
        />
      </div>
      <Toolbar style={classes.toolbar}>
        {user ? (
          <div style={classes.profile}>
            <Avatar style={classes.avatar} alt={user.name} src={user.avatar}>
              {user.name.charAt(0)}
            </Avatar>
            <Typography style={classes.username} variant="h6">
              {user.name}
            </Typography>
            <Button
              variant="contained"
              style={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            style={classes.signIn}
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar