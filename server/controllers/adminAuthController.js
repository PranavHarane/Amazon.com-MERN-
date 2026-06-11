const adminModel = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } =require("../utils/generateToken");

const adminSignup = async (req , res) => {
    try{
        let { fullname , email , password } = req.body;

        if(!fullname || !email || !password){
            return res.json({ 
                message : "fill all boxes." , 
                type : "warn"
            });
        }

        const hash = await bcrypt.hash(password , 10)
                
        let admin = await adminModel.create({
            fullname,
            email,
            password : hash
        });

        let token = generateToken(admin);
        res.cookie("token" , token);
        res.status(201).json({ 
            message : "Admin account created successfully." , 
            type : "success"
        });    
            
    }catch(err){
        res.json({
            message : err.messege , 
            type : "error"
        });
    }
}

const adminSignin = async (req , res)=> {
    try{
        let { email , password } = req.body;
        
        if(!email || !password){
            return res.json({ 
                message : 'Fill all the boxes.' , 
                type : "warn"
            });
        }

        let admin = await adminModel.findOne({email});

        if(!admin){
            return res.json({ 
                message : 'Signup first' , 
                type : "info"
            });
        }

        const isPassCorrect = await bcrypt.compare(password , admin.password )

        if(isPassCorrect === false){
            return res.json({ 
                message : "Invalid Credentials." , 
                type : "warn"
            });
        }

        let token = generateToken(admin);
        res.cookie("token" , token);
        res.status(200).json({ 
            message : "Logged in Successfully." ,
            type : "success" 
        });

    }catch(err){
        res.json({message : err.message , type : "error"});

    }
}

const adminSignout = async (req , res) => {
    res.clearCookie("token");
    res.json({ 
        message : "Log out successfully." , 
        type : "success"
    })
}

const deleteAccount = async (req , res) => {
    try{
        let token = req.cookies.token;
        let info = jwt.verify(token , process.env.JWT_SECRET);
        let email = info.email;
        let admin = await adminModel.findOneAndDelete({ email });
        res.json({ 
            message : 'Account deleted successfully.' , 
            type : "success"
        })
    }catch(err){
        res.json({
            message : err.message , 
            type : "error"
        });
    }
}

module.exports = { adminSignup , adminSignin , adminSignout , deleteAccount};