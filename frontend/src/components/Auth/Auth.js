import { Avatar, Container, Grid, Grow, Paper, Typography } from '@mui/material';
import React from 'react'

import classes from './style';

import { GiWolfHowl } from "react-icons/gi";
import Input from './Input';

const Auth = () => {

    const isSignUp = true

    const handleSubmit = () => {
        console.log("submit");
    }

    return (
      <Grow in>
        <Container component="main" maxWidth="xs">
          <Paper style={classes.paper} elevation={3}>
            <Avatar style={classes.avatar}>
              <GiWolfHowl color="black" fontSize={30} />
            </Avatar>
            <Typography variant="h5">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Typography>
            <form style={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={3} marginTop={1}>
                {isSignUp && (
                  <>
                    <Input
                      name="First name"
                      placeholder="Enter your first name"
                      label="First Name"
                    />
                    <Input
                      name="Last name"
                      placeholder="Enter your Last name"
                      label="Last Name"
                    />
                    {/* <TextField name='firstName' label="First Name" placeholder='Enter your first name' autoFocus/> */}
                    {/* <TextField name='firstName' label="First Name" placeholder='Enter your first name' autoFocus/> */}
                  </>
                )}
              </Grid>
            </form>
          </Paper>
        </Container>
      </Grow>
    );
}

export default Auth