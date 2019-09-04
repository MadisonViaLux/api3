const express = require('express')
const server = express();

const productsRouter = require('../products/products-router')

server.use(express.json())

server.use('/products', productsRouter)
// server.use('/suppliers', suppliersRouter)




server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' })
});


server.get('/clients', (req, res) => {
    
});





module.exports = server;