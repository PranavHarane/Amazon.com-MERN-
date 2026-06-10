const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname : {
        type : String,
        minlength : 6 ,
        required : true 
    },
    email : {
        type : String ,
        required : true ,
        unique : true
    },
    password : {
        type : String ,
        minlength : 8 ,
        required : true 
    },
    cart : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Mobile"
    }], 
    orders : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Mobile"
    }]
});

module.exports = mongoose.model("user" , userSchema);