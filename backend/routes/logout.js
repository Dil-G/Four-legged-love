
const express = require('express');
const router = express.Router();
const Users = require('../models/UsersModel');


router.post('/logout', async (req, res) => {
    try {
        const email = req.body.email;
     
        console.log(email)
        const loginUpdate = await Users.findOneAndUpdate({ email: email }, { $set: { token: null } })
        const savedUser = await Users.findOne({ email: email });
        console.log(savedUser)
        res.status(200);
        res.json({ message: 'Successfully logged out' });

    }
    catch (err) {

        console.log(err)
        res.status(400);
        res.json({ message: err.message });
    }
})

module.exports = router;