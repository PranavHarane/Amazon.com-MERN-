const express = require("express")
const app = express();
const cookieparser = require("cookie-parser");
const cors = require("cors")

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const adminRouter = require("./routes/adminRouter");

const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cookieparser());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use("/index" , indexRouter);
app.use("/user" , userRouter);
app.use("/product" , productRouter);
app.use("/admin" , adminRouter);

app.listen(PORT , (req , res) =>{
    console.log("server is running....");
});