'use strict'

// Usar funciones de mongoDB que estan definidas en la libreria mongoose
const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3000

//const config = require('./config')
// config.db

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if(err) throw err
    console.log('Conexion a la base de datos establecida')

    app.listen(port, function () {
        console.log('http://localhost:' + port)
    })
})

