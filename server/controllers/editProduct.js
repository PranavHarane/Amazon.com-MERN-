const productModel = require("../models/mobileModel");

module.exports = async (req , res) => {
    const body = JSON.parse(req.body.product)

    try{
        let updatedProduct = await productModel.findOneAndUpdate(
            {_id : req.params.productId},
            { $set : body },
            { new : true , runValidators : true}
        )

        res.status(200).json({message : 'Product updated successfully.' , type : "success"});

    }catch(err){
        res.json({message: err.message , type : "error"})
    }
}