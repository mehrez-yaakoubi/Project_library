const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text : String,
    user :{
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "users",
        },
        //username : String,
    },
    
    book : {
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "book",
        },
       // title : String,
    },
    
    date : {type : Date, default : Date.now()},
});

module.exports = mongoose.model("Comment", commentSchema);