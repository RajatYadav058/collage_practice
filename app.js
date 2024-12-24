const express = require('express')
//console.log(express)
const app =express()
const port = 3500
const web =require('./routers/web')


// ejs set for view engine
app.set('view engine','ejs')
//used for linking public folder(css & images)
app.use(express.static('public'))





//importing routers or loading routers
app.use('/',web)

//creating server
app.listen(port,()=>{
    console.log(`server start localhost: ${port}`)
})