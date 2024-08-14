const express = require("express");
const app = express();
const emailer = require("./routes/EmailGenerator");
const user = require("./routes/Login");
// const pizzaRouter = require('./routes/InterviewQuestion/pizzaApp')
// const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const projectRouter = require("./routes/projectInput");
const cors = require("cors");
const path = require('path')

require("./config/db");

const PORT = process.env.PORT || 9000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(emailer);
app.use(user);
app.use(projectRouter);


app.use(express.static(path.join(__dirname, "Portfolio", "build")))

app.use(express.static(path.join(__dirname, './Portfolio/build')))
app.get('*', (req,res)=> res.sendFile(path.join(__dirname, 'Portfolio',"build", "index.html")))


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.use(pizzaRouter)

// const bodyParser = require('body-parser');

// Middleware to parse the request body
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Route to handle form submissions

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running on Port ${PORT}`);
});
//my work email is enwiya.dev@gmail.com
