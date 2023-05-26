const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const UserData = sequelize.define('userData', {
    id: { type: DataTypes.INTEGER, autoIncrement: true },
    username: { type: DataTypes.STRING, primaryKey: true, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    phone: { type: DataTypes.INTEGER },
    address: { type: DataTypes.STRING }
})
const Order = sequelize.define('order', {
    username: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
    shop: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    counter: { type: DataTypes.INTEGER }
})

const Product = sequelize.define('products', {
    // order_id: { type: DataTypes.INTEGER, autoIncrement: true },
    // username: { type: DataTypes.STRING, primaryKey: true, unique:true },
    name: { type: DataTypes.STRING },
    shop: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
})

UserData.hasMany(Order)
Order.belongsTo(UserData)

Product.hasOne(Order)
Order.belongsTo(Product)


module.exports = {
    UserData, Order, Product
}