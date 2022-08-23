import { Avatar, Button, Container, Grid, Grow, Paper, Typography } from '@mui/material';
import React, {useState} from 'react'

import classes from './style';

import { GiWolfHowl } from "react-icons/gi";
import Input from './Input';

const Auth = () => {

    const isSignUp = true
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = () => {
        console.log("submit");
    }

    const handleChange = () => {
      console.log("changed");
    };

    const handleShowPassword = () => {
      setShowPassword(!showPassword)
    };

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
                      half={true}
                      name="First name"
                      placeholder="Enter your first name"
                      label="First Name"
                      handleChange={handleChange}
                    />
                    <Input
                      half={true}
                      name="Last name"
                      placeholder="Enter your Last name"
                      label="Last Name"
                      handleChange={handleChange}
                    />
                  </>
                )}
                <Input
                  name="email"
                  placeholder="Enter your email address"
                  label="Email"
                  handleChange={handleChange}
                  type="email"
                />
                <Input
                  name="password"
                  placeholder="Enter your password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
                {isSignUp && (
                  <Input
                    name="confirmPassword"
                    placeholder="Re enter your password"
                    label="Confirm Password"
                    handleChange={handleChange}
                    type="password"
                  />
                )}
              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" style={classes.submit}>
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </form>
          </Paper>
        </Container>
      </Grow>
    );
}

export default Auth