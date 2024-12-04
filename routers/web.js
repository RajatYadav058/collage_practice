const express =require('express')
const route =express.Router()


//routing server
route.get('/',(req,res)=>{
    res.send("welcome to the main Home")
})

route.get('/about',(req,res)=>{
    res.send("welcome to main About Home")
})



module.exports=route