const jwt = require("jsonwebtoken");
const adminModel = require("../models/adminModel");

module.exports = async (req , res , next) => {
    let token = req.cookies.token;
    if(!token){
        return res.json({ message : "Unauthorized to access admin page" , type : "warn" });
    }

    try{
        let decoded = jwt.verify(token , process.env.JWT_SECRET);
        let admin = await adminModel.findOne({ email : decoded.email})

        if(!admin){
            return res.json({ message : 'Unauthorized' , type : "warn"});
        }

        req.admin = admin;
        next();
    }catch(err){
        res.json({type : "error" , message : err.message});
    }
}