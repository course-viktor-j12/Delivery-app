const { Order } = require('../models/models')

class OrderController {
    async create(req, res) {
        try {
            const { username, name, shop, counter, price, productId } = req.body
            const order = await Order.create({ username, name, shop, counter, price, productId })
            return res.json(order)
        } catch (e) {
            console.log(e)
        }
    }
    async getAll(req, res) {
        try {
            const orders = await Order.findAll()
            return res.json(orders)
        } catch (e) {
            console.log(e)
        }
    }
    async getByName(req, res) {
        try {
            const { username } = req.params
            const orders = await Order.findAll({
                where: { username }
            });
            return res.json(orders)
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new OrderController()
