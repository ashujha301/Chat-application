const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const registerUser = async(req,res) =>{
    try {
        const {name , email , password} = req.body;

        let user = await userModel.findOne({email});

        if(user){
            return res.status(400).json('Email already exists');
        }

        if(!validator.isEmail(email)){
            return res.status(400).send("Email must be valid...");
        }

        if(!validator.isStrongPassword(password)){
            return res.status(400).send("password must be strong");
        }

        user = new userModel({name,email,password});


    } catch (error) {
        
    }
}

module.exports = {registerUser}