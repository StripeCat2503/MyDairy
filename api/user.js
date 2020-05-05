const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')

router.get('/', (req, res) =>{
   User.find({}, (err, result) =>{
       if(err) throw err

       res.send(result)
   })
})


router.post('/register', (req, res) =>{
    let username = req.body.username
    let password = req.body.password
    let fullName = req.body.fullName
    if(!username || !password || !fullName){
        res.status(400).send('Invalid user data!')
        return;
    }

    let user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: username,
        password: password,
        fullName: fullName
    })

    user.save().then(result => {
        console.log(result)
        res.status(200).send('Account has been created!')
    })
    .catch(err =>{
        console.log(err)
    })

})

module.exports = router