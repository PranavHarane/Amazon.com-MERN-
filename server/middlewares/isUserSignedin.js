const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports = async (req , res , next) => {

    let token = req.cookies.token;
    if(!token){
        return res.json({ 
            message : "Signin first." ,
            type : "info" ,
            token : token
        });
    }

    try{
        let decoded = jwt.verify(token , process.env.JWT_SECRET);
        let user = await userModel.findOne({ email : decoded.email});

        if(!user){
            return res.json({
                message : "please sign in first" ,
                type : "info"
            });
        }

        req.user = user;
        next();
    }catch(err){
        res.json({
            type : "error" , 
            message : err.message
        });
    }
}