const express =require('express')
const FrontController = require('../controller/FrontController')
const route =express.Router()


//routing server
// route.get('/',(req,res)=>{
//     res.send("welcome to the main Home")
// })

// route.get('/about',(req,res)=>{
//     res.send("welcome to main About Home")
// })

route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/contact',FrontController.contact)
route.get('/login',FrontController.login)
route.get('/register',FrontController.register)


module.exports=route