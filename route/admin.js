const express = require('express')
const admin = express.Router()

admin.route('/').get((req,res) => {
    res.send({username : "gap" , password : "1234"})
})

module.exports = admin