require("dotenv").config();
require("express-async-errors");

//extra security packages
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const rateLimiter = require('express-rate-limit')

//db connection string
const connectDB = require('./db/connect')

const express = require("express");

const postRoutes = require('./routes/posts')
const authRoutes = require("./routes/auth.js");


const app = express();

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "100mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(helmet());
app.use(cors());
app.use(xss());


app.use("/files", express.static("files"));

//roooutes
app.use("/api/v1/auth", authRoutes);
app.use('/api/v1/posts', postRoutes)


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
