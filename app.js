const express = require('express')
const app = express()
const port = 8080
const route = require('./route/myRoute')

app.use(route)
app.get('/', (req, res) => {
    res.send("<h1>homepage | GapDev</h1>")
})

app.listen(port, () => {
    console.log("start server at port", port);
})