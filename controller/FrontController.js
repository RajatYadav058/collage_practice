class FrontController{
    static home =async(req,res)=>{
        try {
            res.send('welcome to home page')
        } catch (error) {
            console.log(error);
            
        }
    }
    static about =async(req,res)=>{
        try {
            res.send('welcome to about page')
        } catch (error) {
            console.log(error);
            
        }
    }
    static contact =async(req,res)=>{
        try {
            res.send('welcome to contact page')
        } catch (error) {
            console.log(error);
            
        }
    }
    static login =async(req,res)=>{
        try {
            res.send('welcome to login page')
        } catch (error) {
            console.log(error);
            
        }
    }
    static register =async(req,res)=>{
        try {
            res.send('welcome to register page')
        } catch (error) {
            console.log(error);
            
        }
    }

}

module.exports =FrontController