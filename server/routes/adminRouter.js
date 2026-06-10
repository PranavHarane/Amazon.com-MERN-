const express = require("express");
const router = express.Router();
const { adminSignup , adminSignin , adminSignout , deleteAccount}= require("../controllers/adminAuthController");
const adminModel = require("../models/adminModel");

router.post("/adminSignup", adminSignup);

router.post("/adminSignin" , adminSignin);

router.get("/adminSignout" , adminSignout);

router.get("/deleteAccount" , deleteAccount);

module.exports = router;