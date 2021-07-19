const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
// const firebase = require("firebase/app")
// import "firebase/auth";
// const auth = app.auth()


require("dotenv").config();



require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true})
.then(()=>console.log("Connected to database"))
.catch(error => console.error(error));

app.use(bodyParser.json());
app.use(cors())

const postsRoute = require("./routes/posts");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true})
.then(()=>console.log("Connected to database"))
.catch(error => console.error(error));

app.use(bodyParser.json());
const postsRoute = require("./routes/posts");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");

//routes
app.use("/signup", signupRoute);
app.use("/posts", postsRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);

//listem
app.listen(5000);
