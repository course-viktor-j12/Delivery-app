const { Product } = require('../models/models')
const { Order } = require('../models/models')

class ProductController {
    async create(req, res) {
        try {
            const { name, price, shop } = req.body
            const product = await Product.create({ name, price, shop })
            return await res.json(product)
        } catch (err) {
            console.log(err)
        }
    }
    async getProduct(req, res) {

    }
}
class OrderController {
    async create(req, res) {
        try {
            const { username, name, shop, counter, price, productId } = req.body
            const order = await Order.create({ username, name, shop, counter, price, productId })
            return await res.json(order)
        } catch (err) {
            console.log(err)
        }
    }
}


module.exports = new ProductController()
module.exports = new OrderController()