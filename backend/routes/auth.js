const express = require("express");
const router = express.Router();

const {
  signUp,
  signIn,
  refreshToken,
  logOut,
} = require("../controllers/authController.js");

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.get("/refreshToken", refreshToken);
router.post("/logOut", logOut);

module.exports = router;
