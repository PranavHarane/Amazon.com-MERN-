const express = require("express");
const router =  express.Router();
const categoryModel = require('../models/categoryModel')

router.get("/" , async (req , res) => {
    try{
        const categories = await categoryModel.find()
        res.status(200).json({categories})
    }catch(err){
        res.json({
            type : "error" , 
            message : err.message
        })
    }
});

module.exports = router;