const express=require('express')
const { SimulationRun } = require('../Controllers/SimulationController')
const SimulationRouter=express.Router()

SimulationRouter.post('/run',SimulationRun)


module.exports=SimulationRouter