import { Avatar, Button, Container, Grid, Grow, Paper, Typography } from '@mui/material';
import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from './style';

import { GiWolfHowl } from "react-icons/gi";
import Input from './Input';
import { login, register } from '../../actions/auth';
import { toast } from 'react-toastify';

const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isSignUp){
          if(formData.password === formData.confirmPassword){
            dispatch(register(formData, navigate))
          } else {
            toast.error('Password dont matched');
          }
        } else {
          dispatch(login(formData, navigate));
        }
    }

    const handleChange = (e) => {
      if(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
      }
    };

    const handleShowPassword = () => {
      setShowPassword(!showPassword)
    };

    const switchMode = () => {
      setIsSignUp(!isSignUp);
      setShowPassword(false);
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
                      half={true}
                      name="firstName"
                      placeholder="Enter your first name"
                      label="First Name"
                      handleChange={handleChange}
                      autoFocus={true}
                    />
                    <Input
                      half={true}
                      name="lastName"
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
                  autoFocus={!isSignUp}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={classes.submit}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
              <Grid container justifyContent="center">
                <Grid item marginTop={2}>
                  <Button onClick={switchMode} style={classes.switch}>
                    {isSignUp
                      ? "Already have an account? Sign In"
                      : "Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Grow>
    );
}

export default Auth