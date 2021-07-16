const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();

app.use(bodyParser.json());
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// app.use("/posts", postsRoute);
//midelleware


//routes
app.get('/',(req,res)=>{
    res.send("it is home");
});

app.get('/abc',(req,res)=>{
    res.send("it is abc");
});


//listem
app.listen(3000);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true})
.then(()=>console.log("Connected to database"))
.catch(error => console.error(error));