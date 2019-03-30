'use strict'

const express = require('express')
const api = express.Router()
const productController = require('../controllers/productController')

api.get('/product', productController.getProducts)
api.get('/product/:productid', productController.getProduct)
api.post('/product', productController.saveProduct)
api.put('/product/:productid', productController.updateProduct)
api.delete('/product/:productid', productController.deleteProduct)

module.exports = api