const express = require("express")
const colors = require("colors")
const { errorHandler } = require("./middlewere/errorMiddlewere")
const { connectDB } = require("./config/db")
require('dotenv').config()

const app = express()

connectDB()

const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ msg: "Welcome to Suport desk" })
})

// user Routes
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/ticket', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
    console.log("server is running at Port " + PORT);
})