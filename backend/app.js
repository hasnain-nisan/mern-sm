require("dotenv").config();
require("express-async-errors");

//extra security packages
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const bodyParser = require("body-parser");
const rateLimiter = require('express-rate-limit')

//db connection string
const connectDB = require('./db/connect')

const express = require("express");

const postRoutes = require('./routes/posts')


const app = express();

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(xss());


//roooutes
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
