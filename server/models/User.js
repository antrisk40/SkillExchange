const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    email : {
        type:String,
        required : true,
    },   
    phoneNo : {
        type : Number,
        required : true,
    },

    password :{
        type : String,
        required : true,
    },

    domain :{
        type : String,
        required : true,
    }
})

const User = mongoose.model("User", schema);

module.exports = User;
















































