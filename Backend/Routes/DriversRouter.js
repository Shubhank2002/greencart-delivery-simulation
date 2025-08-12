const express=require('express')
const DriversRouter=express.Router()
const DriversModel=require('../DB/Models/DriversModel')
const { CreateDriver } = require('../Controllers/DriverController')



DriversRouter.post('/create',CreateDriver)


module.exports=DriversRouter