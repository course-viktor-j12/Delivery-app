const { Order, UserData } = require('../models/models')

class OrderController {
    async create(req, res) {
        try {
            const { products, ...user } = req.body
            const userData = await UserData.create(user)
            products.forEach(async (el) => {
                await Order.create({ ...el, userDatumId: userData.id })
            })
            //const order = await Order.create({ username, name, shop, counter, price, productId })
            return res.json(UserData)
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
    async getByDatumId(req, res) {
        try {
            const { id } = req.params
            const orders = await Order.findAll({
                where: { userDatumId: id  }
            });
            return res.json(orders)
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new OrderController()
