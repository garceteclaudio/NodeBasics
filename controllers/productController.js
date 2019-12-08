'use strict'

const Product = require('../models/product')

function getProduct(req, res){
    console.log('GET /api/product/:id')
    let productid = req.params.productid

    Product.findById(productid, (err, product) => {
        if(err) return res.status(500).send({ message : 'Error al realizar la peticion'})

        if(!product) return res.status(404).send({ message : 'El producto no existe' })

        res.status(200).send({product: product})
    })
}

function getProducts(req, res){

    console.log('GET /api/product')

    Product.find({}, (err, products) => {
        if(err) return res.status(500).send({ message : 'Error al realizar la peticion.'})
        if(!products) return res.status(404).send({ message : 'Los productos no existen.' })

        //res.send(200, {products})

        res.status(200).send({products})
    })
}

function saveProduct(req, res){
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description


    product.save((err, productStored ) => {
        if(err) res.status(500).send({message: 'Error al salvar en la base de datos'})

        res.status(200).send({product: productStored})
    })
}

function updateProduct(req, res){
    let productid = req.params.productid
    let bodyUpdate = req.body

    Product.findByIdAndUpdate(productid, bodyUpdate, (err, productUpdated) => {
        if (err) return res.status(500).send({ message: 'Error al actualizar el producto.' })

        res.status(200).send({ product: productUpdated })
    })
}

function deleteProduct(req, res){
    let productid = req.params.productid

    Product.findById(productid , (err, product) =>{
        if (err) return res.status(500).send({ message: 'Error al borrar el producto.' })
    
        product.remove( err => {
            if (err) return res.status(500).send({ message: 'Error al borrar el producto.' })

            res.status(200).send({ message: 'El producto ha sido eliminado.' })
        })
    
    })
}


module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}