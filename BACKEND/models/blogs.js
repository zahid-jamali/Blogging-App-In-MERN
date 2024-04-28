const mongoose = require("mongoose");

const schema = mongoose.Schema;

const blogSchema = schema({
    Heading: {
        type: String,
        required: true,
    },
    Subheading: {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },
    PosterName: {
        type: String,
        required: true,
    },
    PosterId: {
        type: String,
        required: true,
    },
    Article: {
        type: String,
        required: true,
    },
    Image:{
        type:String,
        required: true,
    }
});

const Blogs = mongoose.model("blogs", blogSchema);
module.exports = Blogs;
