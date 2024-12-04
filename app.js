const express = require('express')
//console.log(express)
const app =express()
const port = 3500
const web =require('./routers/web')





//importing routers or loading routers
app.use('/',web)

//creating server
app.listen(port,()=>{
    console.log('server start localhost: ${port}')
})