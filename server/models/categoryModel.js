const mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
    brand : String,
    heading : String,
    image : String,
    tag : String
});

module.exports = mongoose.model("category" , categorySchema);