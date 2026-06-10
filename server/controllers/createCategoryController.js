const imagekit = require('../config/imagekit')
const categoryModel = require("../models/categoryModel");


module.exports.createCategory = async (req , res) => {
    try{
        let { brand , heading , tag } = req.body;
        let image = req.file
        
        const response = await imagekit.upload({
            file: image.buffer ,
            fileName : image.originalname
        })

        let category = await categoryModel.create({
            brand , 
            heading ,
            image: response.url ,
            tag
        });

        res.json({ 
            message : 'Category created successfully.' ,
            type : "success"
        });

    }catch(err){
        res.status(500).json({
            message : err.message ,
            type : "error"
        });
    }
}