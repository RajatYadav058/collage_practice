const express =require('express')
const FrontController = require('../controller/FrontController')
const route =express.Router()


//routing server at the starting phase
// route.get('/',(req,res)=>{
//     res.send("welcome to the main Home")
// })

// route.get('/about',(req,res)=>{
//     res.send("welcome to main About Home")
// })

route.get('/home',FrontController.home)
route.get('/about',FrontController.about)
route.get('/contact',FrontController.contact)
route.get('/',FrontController.login)
route.get('/register',FrontController.register)


module.exports=route