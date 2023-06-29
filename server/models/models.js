const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const UserData = sequelize.define('userData', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
    address: { type: DataTypes.STRING },
    totalPrice: { type: DataTypes.INTEGER }
})
const Order = sequelize.define('order', {
    name: { type: DataTypes.STRING },
    shop: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    counter: { type: DataTypes.INTEGER }
})

const Product = sequelize.define('products', {
    name: { type: DataTypes.STRING },
    shop: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
})

UserData.hasMany(Order)
Order.belongsTo(UserData)

Order.sync({ alter: true })
UserData.sync({ alter: true })

module.exports = {
    UserData, Order, Product
}