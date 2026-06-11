const userModel = require("../models/userModel")
const productModel = require("../models/mobileModel")

let cart = async (req ,res)=>{
    try{
        const user = req.user
        const products = await productModel.find({
            _id : { $in : user.cart}
        })
        
        res.status(200).json({user , products})
    }catch(err){
        console.log(err.message)
        res.json({message : err.message})
    }
}

let addToCart = async (req , res ) => {
    try{
        let user = await userModel.findOne({ email : req.user.email});
        const productExists = user.cart.some((product)=>{
            return product._id.toString() === req.params.productId
        })
        if(productExists){
            return res.json({
                message : "Product already Exists." , 
                type : "warn"
            })
        }
        user.cart.push(req.params.productId);
        await user.save();
        res.json({
            message : "product added to cart." ,
            type : "success"
        });
    }catch(err){
        res.send({
            message : err.message ,
            type : "error"
        });
    }
}

let deleteFromCart = async (req , res ) => {
    try{
        let user = await userModel.findOne({ email : req.user.email});
        user.cart = user.cart.filter((product) => {
            if( product.toString() !== req.params.productId ){
                return product;
            }
        });
        await user.save();
        const products = await productModel.find({
            _id : { $in : user.cart}
        })
        res.json({
            message : 'Product is removed from cart' , 
            type : "success" , products
        });
    }catch(err){
        res.json({
            message : err.message , 
            type : "error"
        });
    }
}

module.exports = { cart , addToCart , deleteFromCart }