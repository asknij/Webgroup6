const express = require('express')
const router = express.Router()
const Product = require('../models/products')


// Getting all
router.get('/', async(req, res) => {
    try {
        const product = await Product.find()
        res.json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})




module.exports = router