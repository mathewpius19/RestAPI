const express = require("express");
const app=express();
const mongoose = require("mongoose");
require('dotenv/config');
const bodyParser=require('body-parser');
const cors=require("cors");

//middlewares
app.use(cors());
app.use(bodyParser.json());

//Importing routes
const postRoutes=require('./routes/posts');
app.use('/posts',postRoutes);

//route
app.get('/',(req,res)=>{
    res.send("We are at home!");
})
//connecting to database
mongoose.connect(
    process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=>{
    console.log("connected to test database");
})
//Listening at Port 3000
app.listen(3000);