const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/user",userRoute);

const port = process.env.PORT;
const uri = process.env.ATLAS_URI

app.listen(port , (req,res)=>{
    console.log(`Server is running on ${port} .....`);
});

mongoose.connect(uri ,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB connected!!");
}).catch((error)=>{
    console.log("MongoDB connection FAILED!!!");
});