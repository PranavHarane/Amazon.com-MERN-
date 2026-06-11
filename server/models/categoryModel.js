const mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
    brand : {
        type : String ,
        required : true
    } ,
    heading : {
        type : String ,
        required : true 
    } ,
    image : {
        type : String ,
        required : true 
    } ,
    tag : {
        type : String ,
        required : true
    } 
});

module.exports = mongoose.model("category" , categorySchema);