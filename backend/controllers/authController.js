const User = require('../models/User')

const signUp = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({
        user: newUser.getUser(),
        accessToken: newUser.generateAccessToken(),
        refreshToken: newUser.generateRefreshToken()
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    console.log(process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json("sign in route");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const refreshToken = async (req, res) => {
  try {
    console.log("Refresh token route");
    res.status(200).json("Refresh token route");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const logOut = async (req, res) => {
  try {
    console.log("Logout route");
    res.status(200).json(req.body);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  signUp,
  signIn,
  refreshToken,
  logOut
};