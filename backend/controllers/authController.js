const User = require('../models/User')
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    const accessToken =  newUser.generateAccessToken()
    const refreshToken = newUser.generateRefreshToken()
    setCookieJWT(res, 'jwt', refreshToken);
    res.status(200).json({
        accessToken
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    if(!email || !password) {
      return res.status(400).json({ message: 'Email and password is required'})
    }

    const foundUser = await User.findOne({email})
    if(!foundUser) {
      return res.status(404).json({message: 'User not found'})
    }

    const isPasswordMatched = await foundUser.comparePassword(password)
    if(!isPasswordMatched) {
      return res.status(401).json({message: 'Incorrect Password'})
    }

    const accessToken = foundUser.generateAccessToken();
    const refreshToken = foundUser.generateRefreshToken();
    setCookieJWT(res, "jwt", refreshToken);
    res.status(200).json({
      accessToken,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const refreshToken = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });
    
    const refreshToken = cookies.jwt;
    
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async function(err, decoded){
        if (err) return res.status(403).json({ message: "Forbidden" });
        
        const foundUser = await User.findOne({email: decoded.email})
        if (!foundUser)
          return res.status(401).json({ message: "Unauthorized" });

        const accessToken = foundUser.generateAccessToken()
        res.status(200).json({
          accessToken,
        });
      }
    );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const logOut = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    clearCookiesJWT(res, 'jwt')
    res.status(200).json({ message: "Successfully log out"});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//create secure cookie with refresh token
const setCookieJWT = (res, name, value) => {
  res.cookie(name, value, {
    httpOnly: true, //accessible only by web server
    secure: true, //https
    sameSite: 'None', // cross site cookie
    maxAge: 1 * 24 * 60 * 60 * 1000 // cookie expiry
  })
}

//clear cookies
const clearCookiesJWT = (res, name) => {
  res.clearCookie(name, {
    httpOnly: true, //accessible only by web server
    secure: true, //https
    sameSite: "None", // cross site cookie
  });
}

module.exports = {
  signUp,
  signIn,
  refreshToken,
  logOut
};