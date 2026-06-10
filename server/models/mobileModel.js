const mongoose = require("mongoose");

const mobileSchema = mongoose.Schema({
    image : String,
    description : String,
    brandURL : String,
    ratings : {
        type : Number,
        default : 0
    },
    bought : {
        type : Number,
        default : 0
    },
    price : Number,
    color : {
        type : Array
    }
    ,
    size : {
        type : Array
    },
    style : {
        type : Array
    },
    patternName : {
        type : String,
        default : "Phone only"
    },
    brandName : String,
    operatingSystem : String,
    ramMemory : String,
    CPUModel : String,
    CPUSize : String,
    memoryStorage : String,
    aboutItem : {
        type : Array
    }
});

mobileSchema.index({
    brandName : "text" ,
    description : "text"
    });

module.exports = mongoose.model("Mobile", mobileSchema);