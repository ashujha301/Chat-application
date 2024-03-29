const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    chatName: {type: String , trim: true},
    isGroup: {type: Boolean , default: false},
    users: [{type:mongoose.Schema.Types.ObjectId , ref: "userModel"}],
    latestmsg: {type:mongoose.Schema.Types.ObjectId, ref: "messageModel"},

},{timestamps: true});

const chatModel = mongoose.model("Chat",chatSchema);
module.exports = chatModel;