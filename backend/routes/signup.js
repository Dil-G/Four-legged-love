// const { request, response } = require('express');
const express = require('express');
const users = require('../models/users');
const router = express.Router();

router.post('/',(req,res)=>{
    const user = new users({
        name : req.body.name,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    })
    user.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
});


module.exports = router;