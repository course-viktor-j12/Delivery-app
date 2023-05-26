const Router = require('express')
const ProductController = require('../controllers')
const OrderController = require('../controllers')
const router = new Router()

router.post('/product', ProductController.create)

router.post('/order', OrderController.create)


module.exports = router