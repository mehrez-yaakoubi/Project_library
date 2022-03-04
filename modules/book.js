const mongoose = require("mongoose");



const bookSchema = mongoose.Schema({

    Titre:{type: String,required: true},

    Auteur:{
        name:String,
        id:{ type :mongoose.Schema.Types.ObjectId,
            ref: 'auth'}
        },
       
    Catalogue:[{type: String,required: true, }],

    Type:{type: String,required: true, },

    Etat:{ type: String,required: true,},

});

module.exports= mongoose.model("book",bookSchema);