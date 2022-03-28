const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text : String,
    author :{
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Users",
        },
        username : String,
    },
    
    book : {
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Book",
        },
        title : String,
    },
    
    date : {type : Date, default : Date.now()},
});

module.exports = mongoose.model("Comment", commentSchema);