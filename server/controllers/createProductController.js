const productModel = require("../models/mobileModel");
const imagekit = require("../config/imagekit")

module.exports.createProduct = async (req , res) => {
    try{
        let { description , brandURL , price , color , size , style , brandName , operatingSystem , ramMemory , CPUModel , CPUSize , memoryStorage , aboutItem} = JSON.parse(req.body.info);
        
        if(!req.file){
            return res.status(400).json({
                message : 'Image is required.' , 
                type : "warn"
            })
        }
        
        const newcolor = color.filter((val) => {
            if (val !== null){
                return val;
            }
        })

        const newsize = size.filter((val) => {
            if (val !== null){
                return val;
            }
        })

        const newstyle = style.filter((val) => {
            if (val !== null){
                return val;
            }
        })

        const response = await imagekit.upload({
            file : req.file.buffer ,
            fileName : req.file.originalname
        })
        
        let product = await productModel.create({
            image : response.url ,
            description ,
            brandURL ,
            price ,
            color : newcolor ,
            size : newsize ,
            style : newstyle ,
            brandName ,
            operatingSystem ,
            ramMemory,
            CPUModel ,
            CPUSize ,
            memoryStorage ,
            aboutItem 
        });

        res.status(201).json({ 
            message : "Product created successfully." ,
            type : "success" 
        });

    }catch(err){
        res.status(500).json({
            message : err.message ,
            type : "error"
        });
    }
}