require('dotenv').config();

const express=require('express')
const app=express()
const cors=require('cors')
const connectDB=require('./DB/Connection');
const DriversRouter = require('./Routes/DriversRouter');
const orderRouter = require('./Routes/OrdersRouter');
const RoutesRouter = require('./Routes/RoutesRouter');
const SimulationRouter = require('./Routes/SimulationRouter');
const AuthRouter = require('./Routes/AuthRouter');
const cookieParser = require('cookie-parser');
connectDB()
app.use(cors({
    origin:'https://greencart-delivery-simulation-12.onrender.com',
    credentials:true
}))

app.use(express.json())
app.use('/drivers',DriversRouter)
app.use('/orders',orderRouter)
app.use('/routes',RoutesRouter)
app.use('/simulation',SimulationRouter)
app.use('/auth',AuthRouter)
app.use(cookieParser())
const PORT = process.env.PORT || 8000;






app.listen(PORT,()=>console.log('server running '))