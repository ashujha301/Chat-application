const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String ,
    required : [true, "Please provide your name"],
minlength: 3,
maxlength:30 },
email:{type:String,required:[true,"Email is required"],unique: true},
password: { type: String, required: [true, 'Password is required'],minlength:3},
    },
{
    timestamps: true
}
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;