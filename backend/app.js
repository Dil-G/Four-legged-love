const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true})
.then(()=>console.log("Connected to database"))
.catch(error => console.error(error));

app.use(bodyParser.json());
app.use(cors())

const postsRoute = require("./routes/posts");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

//routes
app.use("/signup", signupRoute);
app.use("/posts", postsRoute);
app.use("/login", loginRoute);

//listem
app.listen(5000);
