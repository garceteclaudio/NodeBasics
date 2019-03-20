'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
    res.send(200, {products: []})
})

app.get('/api/product/:productid', (req, res) => {

})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: 'El producto se ha recibido'})
})



app.listen(port, function () {
    console.log('http://localhost:' + port)
})