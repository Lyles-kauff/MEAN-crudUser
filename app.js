const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const User = require('./models/user')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(bodyParser.json())

//init routes
app.use('/', routes)

mongoose.connect('mongodb+srv://admin:1234admin@node-api.rjy9dst.mongodb.net/?retryWrites=true&w=majority&appName=Node-api').then(() => {
    console.log('Greeted mongoDB SUCCESS!')
    app.listen(port, (res,req) => {
        console.log("Node app is running on Localhost:" + port)
    })
}).catch((error) => {
    console.log(error)
})


