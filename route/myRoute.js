const express = require('express')
const route = express.Router()

route.get('/product', (req, res) => {
    res.send("<h1>My Product</h1>")
})

route.get('/contact', (req, res) => {
    res.send("<h1>My Contact</h1>")
})

route.get('/setting', (req, res) => {
    res.send("<h1>My Setting</h1>")
})

module.exports = route
