const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: "postgres",
    password: "1111",
    host: "localhost",
    port: 5432,
    database: 'food_delivery'
})

module.exports = pool