const express=require('express')
const { Login, Signup } = require('../Controllers/AuthController')
const AuthRouter=express.Router()

AuthRouter.post('/login',Login)
AuthRouter.post('/signup',Signup)

module.exports=AuthRouter