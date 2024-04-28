const mongoose = require("mongoose");

const schema = mongoose.Schema;

const msgSchema = schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Phone:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true,
    },
    Msg:{
        type:String,
        required:true
    }
});

const Msg = mongoose.model("msgs", msgSchema);
module.exports = Msg;
