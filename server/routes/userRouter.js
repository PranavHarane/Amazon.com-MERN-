const express = require("express");
const router =  express.Router();
const isUserSignedin = require("../middlewares/isUserSignedin");
const { cart , addToCart , deleteFromCart } = require("../controllers/cartCotroller");
const userModel = require("../models/userModel");
const { userSignup , userSignin , userSignout , deleteAccount} = require("../controllers/userAuthController");

router.post("/userSignup" , userSignup);

router.post("/userSignin" , userSignin);

router.get("/userSignout" , userSignout);

router.get("/deleteAccount" , deleteAccount);

router.get("/account" , isUserSignedin , (req ,res)=>{
    const user = req.user
    res.status(200).json({user});
});

router.get("/cart" , isUserSignedin , cart);

router.get("/addToCart/:productId" , isUserSignedin , addToCart);

router.get("/deleteFromCart/:productId" , isUserSignedin , deleteFromCart );

module.exports = router;