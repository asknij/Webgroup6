const express = require('express')
const router = express.Router()
const Comment = require('../models/comment')


router.get('/', async(req, res) => {
    try {

        var comments = await Comment.find()
        res.json(comments)
        
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// Creating one
router.post('/', async(req, res) => {
    const comment = new Comment({
        user: req.body.user,
        comment: req.body.comment,
        rating: req.body.rating,
        product:req.body.product,
        
    
    })
    try {
        const newComment = await comment.save()
        res.status(201).json(newComment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router