const express = require('express')
const router = express.Router()
const User = require('../models/user')



router.post('/', async(req, res) => {
    try {
        var login = await User.find({username:req.body.username, password:req.body.password} )
        if(login=='')
        {
            res.json("False")
            console.log("Success")
        }
        else
        {
            res.json("True")
        }
        
           
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router