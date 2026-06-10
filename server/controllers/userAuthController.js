const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");
const jwt = require("jsonwebtoken");
 
module.exports.userSignup = async (req , res) => {
    try{
        let { fullname , email , password } = req.body;

        if(!fullname || !email || !password){
            return res.json({message : "fill all boxes" , type : "warn"});
        }

        let isUserExists = await userModel.findOne({ email });

        if(isUserExists){
            return res.json({ message : 'User already exists.' , type : "info"});
        }

        const hash = await bcrypt.hash(password , 10)
    
        let user = await userModel.create({
            fullname,
            email,
            password : hash
        });

        let token = generateToken(user);
        res.cookie("token" , token);
        res.status(201).json({message : "User created successfully." , type : "success"});
        
    }catch(err){
        res.status(500).json({
            message : err.message , type : "error"
        })
    }    
}

module.exports.userSignin = async (req , res) => {
    try{
        let { email , password} = req.body;

        if(!email || !password){
            return res.json({message : "fill all the boxes" , type : "warn"});
        }

        let user = await userModel.findOne({email});

        if(!user){
            return res.json({ message : "User does not exists" , type : "info"});
        }

        const result = await bcrypt.compare(password , user.password )
        console.log(result)

        if(result){
            let token = generateToken(user);
            res.cookie("token" , token).json({ message : "Logged in successfully" , type : "success" , token});
        }else{
            res.json({ message : "Invalid credentials" , type : "warn"});
        }

    }catch(err){
        res.json({message : err.message , type : "error"});
    }
}

module.exports.userSignout = (req , res) => {
    res.clearCookie("token");
    res.json({ message : 'Log out successfully.' , type : "success"});
}

module.exports.deleteAccount = async (req , res) => {
    try{
        let token = req.cookies.token;
        let userInfo = jwt.verify(token , process.env.JWT_SECRET);
        let user = await userModel.findOneAndDelete({email : userInfo.email});
        res.clearCookie("token");
        res.json({message : 'Your account is deleted succesfully.' , type : "success"});
    }catch(err){
        res.json({message : err.message , type : "error"})
    }
}