// const { request, response } = require('express');
const express = require('express');
const users = require('../models/users');
const router = express.Router();

router.post('/',(req,res)=>{
    try{
        const user = new users({
            email : req.body.email,
            password : req.body.password
    })
   
        const savedUser =  users.findOne({ email: user.email },{password:user.password});
        console.log(savedUser)
        res.status(200);
        res.json({ message: 'Success', data: { ...savedUser._doc } });

    }catch(error){
        console.log(error)
        res.status(400);
        res.json({ message: error.message });
    }
});


module.exports = router;