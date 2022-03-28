const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    book: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'book'
        }
    ,
     dateEmprunt: {type:Date, default:Date.now},
     //imprint: {type: String, required: true},
     status: {type: String, required: true, enum:['Available', 'Maintenance', 'Loaned', 'Reserved'], default:'Maintenance'},
     dateRetour: { type: Date, default: Date.now },
     users: {type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
           
    })
    
const Reservation = mongoose.model('reservation',reservationSchema);
module.exports = Reservation;
