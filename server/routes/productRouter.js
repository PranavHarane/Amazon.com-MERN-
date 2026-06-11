const express = require("express");
const router = express.Router();
const isAdminSignedin = require("../middlewares/isAdminSignedin");
const { createProduct } = require("../controllers/createProductController");
const { createCategory } = require("../controllers/createCategoryController");
const productModel = require("../models/mobileModel");
const upload = require("../middlewares/multer");
const editProduct = require("../controllers/editProduct");
const searchProduct = require("../controllers/searchProduct");
const categoryModel = require("../models/categoryModel");

router.get("/createCategoryPage" , isAdminSignedin , (req , res) => {
    const admin = req.admin
    res.json({ admin });
});

router.post("/createCategory" , isAdminSignedin , upload.single("image") , createCategory);

router.get("/createProductPage" , isAdminSignedin , (req , res) => {
    const admin = req.admin
    res.json({ admin });
});

router.post("/createProduct" , isAdminSignedin , upload.single("image") , createProduct);

router.get("/allCreatedProductPage" , isAdminSignedin , async (req , res) => {
    try{
        let products = await productModel.find();
        res.json({ 
            message : 'products displayed successfully.', 
            products , 
            type : "success"
        });
    }catch(err){
        res.json({
            type : "error" , 
            message : err.message
        })
    }
});

router.get("/editProductPage/:productId" , isAdminSignedin , async (req , res) => {
    try{
        let product = await productModel.findOne({_id : req.params.productId});
        res.json({product});
    }catch(err){
        res.json({
            type : "error" , 
            message : err.message
        })
    }
});

router.post("/editProduct/:productId" , isAdminSignedin , upload.single("image") , editProduct);

router.get("/searchProduct" , searchProduct );

router.get("/detailedProduct/:productId" , async (req ,res)=>{
    try{
        let product = await productModel.findOne({ _id : req.params.productId});
        res.json({ 
            message : 'Product diplayed successfully.' , 
            product 
        });
    }catch(err){
        res.json({
            type : "error" , 
            message : err.message
        })
    }
});

module.exports = router;