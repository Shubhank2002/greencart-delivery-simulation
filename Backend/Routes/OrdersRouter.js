const express=require('express')
const { CreateOrder } = require('../Controllers/OrderController')
const orderRouter=express.Router()

orderRouter.post('/create',CreateOrder)


module.exports=orderRouter