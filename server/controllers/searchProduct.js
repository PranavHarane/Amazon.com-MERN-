let productModel = require("../models/mobileModel");
let generateProducts = require("../utils/geminiSearch")

let findProducts = (searchValue) => {
    let result = productModel.find(
        { $text : 
            { 
                $search: searchValue ,
                $caseSensitive: false 
            }
        },
    ).sort({ 
        score : { $meta : "textScore"}
    }).limit(3)

    return result
}

module.exports = async (req , res ) => {
    try{
        let searchValue = req.query.searchValue; 
        
        let products = await findProducts(searchValue)
        
        if(products.length == 0){
            products = await generateProducts(searchValue)
        }

        res.json({ products : products });
    }catch(err){
        res.json({
            message : err.message , 
            type : "error"
        });
    }
}