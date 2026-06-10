const mongoose = require("mongoose");
const config = require("config");

mongoose
    .connect(`${config.get("mongoURL")}${config.get("appname")}`)
    .then(()=>{
        console.log("Connected to mongoDB.");
    })
    .catch((err)=>{
        console.log(err.message);
    });

module.exports = mongoose.connection;