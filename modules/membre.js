const mongoose = require('mongoose');


const membreSchema = mongoose.Schema({
    _id:String,
   


})
const Membre = mongoose.model('membre',membreSchema);
module.exports = Membre;
