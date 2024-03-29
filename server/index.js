require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const router = require('./routes/index')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname + "/public")))
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })
    } catch (e) {
        console.log(e)
    }
}
start()