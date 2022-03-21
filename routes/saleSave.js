const express = require('express')
const router = express.Router()
const Sales = require('../models/sales')


// Getting all
router.post('/', async(req, res) => {
    const sales = new Sales({
        user: req.body.user,
        total: req.body.total,
        date: req.body.date,

    })
    try {
        const newSales = await sales.save()
        console.log("Saved")
        res.status(201).json(newSales)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router