const mongoose = require("mongoose");



const bookSchema = mongoose.Schema({

    Titre:{type: String,required: true},

    Auteur:{type:String,required:true},
       // name:String,
        //id:{ type :mongoose.Schema.Types.ObjectId,
          //  ref: 'auth'}
        //},
       
    //Catalogue:[{type: String,required: true, }],

    Type:{type: String,required: true, },

    Etat:{ type: String,required: true,},
    stock:{type:Number, required:true,default:0},
    comments ://{type:String}
     {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment",
    },
});

module.exports= mongoose.model("book",bookSchema);