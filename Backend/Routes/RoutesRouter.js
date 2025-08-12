const express=require('express')
const { CreateRoutes } = require('../Controllers/RoutesController')
const RoutesRouter=express.Router()

RoutesRouter.post('/create',CreateRoutes)



module.exports=RoutesRouter