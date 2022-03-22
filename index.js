const express = require('express');

const mongoose = require('mongoose');
const app = express();

const bodyParser = require("body-parser");
const InitiateMongoServer = require("./bd/connect");
const controle= require('./controllers/authcontroller');
const user = require('./routes/users');
const book = require('./routes/book');
const author=require('./routes/authroute');
//const author=require('./routes/comment');

const auth = require('./middelware/auth');
const Autoris=require('./middelware/Autoris');

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});
app.use("/user", user);
app.use("/book", book);
app.use("/author",author);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});



    

