var express = require('express')
var app = express()
var cors = require('cors')
const PORT = 3030
const teachers = require('./teachers')

app.use(cors())

app.get('/', function (req, res, next) {
    res.send(teachers)
    next();
})

app.get('/teachers', function (req, res, next) {
    res.send(teachers)
    next();
})

app.get('/teachers/:id', function (req, res, next) {
    console.log('Lärare med id:' + req.params.id)

    res.send(teachers[req.params.id])
    next();
})

app.listen(process.env.PORT || PORT, function () {
    console.log(`Server running on port: ${PORT}`)
})