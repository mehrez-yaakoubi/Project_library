const mongoose = require('mongoose');


const catégorieSchema = mongoose.Schema({
    _id:String,
    nom:String
   


})
const Membre = mongoose.module('inscription',catégorieSchema);
module.exports = Membre;
