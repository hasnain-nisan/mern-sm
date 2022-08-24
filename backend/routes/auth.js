const express = require("express");
const router = express.Router();

const {
  signUp,
  signIn,
  refreshToken,
  logOut,
} = require("../controllers/authController.js");

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/refresh-token", refreshToken);
router.post("/logout", logOut);

module.exports = router;
