const express=require('express')
const { Login } = require('../Controllers/AuthController')
const AuthRouter=express.Router()

AuthRouter.post('/login',Login)

module.exports=AuthRouter