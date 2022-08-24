const signUp = async (req, res) => {
  try {
    console.log('sign up route');
    res.status(200).json("sign up route");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    console.log("sign in route");
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
    res.status(200).json("Logout route");
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