const express = require('express');
// const Post = require('../models/post');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log(req.body);
});

router.post('/',(req,res)=>{
    console.log(req.body);
});

module.exports = router;