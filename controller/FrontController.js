//requiring collection to show in mongodb
const UserModel = require('../model/user')
class FrontController{
    static home =async(req,res)=>{
        try {
            //using render for view engine 
            res.render("home")
        } catch (error) {
            console.log(error);
            
        }
    }
    static about =async(req,res)=>{
        try {
            res.render("about")
        } catch (error) {
            console.log(error);
            
        }
    }
    static contact =async(req,res)=>{
        try {
            res.render('contact')
        } catch (error) {
            console.log(error);
            
        }
    }
    static login =async(req,res)=>{
        try {
            res.render("login")
        } catch (error) {
            console.log(error);
            
        }
    }
    static register =async(req,res)=>{
        try {
            res.render("register")
        } catch (error) {
            console.log(error);
            
        }
    }

}

module.exports =FrontController