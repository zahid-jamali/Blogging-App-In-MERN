const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Password:{
        type:String,
        required:true
    }
});

const User = mongoose.model("users", userSchema);
module.exports = User;
