require('dotenv').config();

const express=require('express')
const app=express()
const cors=require('cors')
const connectDB=require('./DB/Connection');
const DriversRouter = require('./Routes/DriversRouter');
const orderRouter = require('./Routes/OrdersRouter');
const RoutesRouter = require('./Routes/RoutesRouter');
const SimulationRouter = require('./Routes/SimulationRouter');
connectDB()
app.use(cors())

app.use(express.json())
app.use('/drivers',DriversRouter)
app.use('/orders',orderRouter)
app.use('/routes',RoutesRouter)
app.use('/simulation',SimulationRouter)





app.listen(8000,()=>console.log('server running at 8000 port'))