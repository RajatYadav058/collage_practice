const mongoose = require('mongoose')
const Local_URL ="mongodb://127.0.0.1:27017/collegePortal"

const connectDB = async() =>{
    try{
        await mongoose.connect(Local_URL)
        console.log('mongoDB Connected')
    } catch(error) {
       console.log("error occured",error)
    }
    
}

module.exports=connectDB
