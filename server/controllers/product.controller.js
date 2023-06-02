const { Product } = require('../models/models')

class ProductController {
    async create(req, res) {
        try {
            const { name, price, shop } = req.body
            const product = await Product.create({ name, price, shop })
            return res.json(product)
        } catch (e) {
            console.log(e)
        }
    }
    async getAll(req, res) {
        try {
            const products = await Product.findAll()
            return res.json(products)
        } catch (e) {
            console.log(e)
        }
    }
    async getByShop(req, res) {
        try {
          const { shop } = req.params
          const products = await Product.findAll({
              where: { shop }
          })
          return res.json(products)
        } catch (e) {
            console.log(e);
        }
      }
      
}

module.exports = new ProductController()
