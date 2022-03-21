require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8081"
  };
  app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost/online-shop', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors())
const productsRouter = require('./routes/products')
app.use('/products', productsRouter)
const commentsRouter = require('./routes/comments')
app.use('/comments', commentsRouter)
const SalesRouter = require('./routes/saleSave')
app.use('/saleSave', SalesRouter)
const UserRouter = require('./routes/users')
app.use('/users', UserRouter)


app.listen(8000, () => console.log('Server Started'))