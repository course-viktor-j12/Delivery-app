const Router = require('express')
const { ProductController, OrderController } = require('../controllers')

const router = new Router()

router.post('/product', ProductController.create)
router.get('/product', ProductController.getAll)
router.get('/product/:shop', ProductController.getByShop)

router.post('/order', OrderController.create)
router.get('/order', OrderController.getAll)
router.get('/order/:username', OrderController.getByName)

module.exports = router