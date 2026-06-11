const mongoose = require("mongoose");

const mobileSchema = mongoose.Schema({
    image : {
        type : String ,
        required : true
    } ,
    description : {
        type : String ,
        required : true
    } ,
    brandURL : {
        type : String ,
        required : true
    } ,
    ratings : {
        type : Number,
        default : 0
    },
    bought : {
        type : Number,
        default : 0
    },
    price : {
        type : Number ,
        required : true
    } ,
    color : {
        type : Array ,
        required : true
    }
    ,
    size : {
        type : Array ,
        required : true
    },
    style : {
        type : Array ,
        required : true
    },
    patternName : {
        type : String,
        default : "Phone only"
    },
    brandName : {
        type : String ,
        required : true
    },
    operatingSystem : {
        type : String ,
        required : true
    },
    ramMemory : {
        type : String ,
        required : true
    },
    CPUModel : {
        type : String ,
        required : true
    },
    CPUSize : {
        type : String ,
        required : true
    },
    memoryStorage : {
        type : String ,
        required : true
    },
    aboutItem : {
        type : Array ,
        required : true
    }
});

mobileSchema.index({
    brandName : "text" ,
    description : "text"
    });

module.exports = mongoose.model("Mobile", mobileSchema);