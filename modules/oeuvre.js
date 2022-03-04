const mongosse = require('mongoose');

const oeuvreSchema = mongosse.Schema({
    titre:String,
    type:String,
    auteur:String,
    catégorie:String,
    etat:String



})
const Oeuvre = mongosse.model('oeuvre',oeuvreSchema);
module.exports = Oeuvre;
