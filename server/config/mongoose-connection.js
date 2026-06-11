const mongoose = require("mongoose");

mongoose
    .connect(`${process.env.MONGODB_URL}Amazoncom`)
    .then(()=>{
        console.log("Connected to mongoDB.");
    })
    .catch((err)=>{
        console.log(err.message);
    });

module.exports = mongoose.connection;