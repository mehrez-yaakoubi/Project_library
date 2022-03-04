const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    _id:String,
    dateReservation:Date,
    dateRetour:Date


})
const Reservation = mongoose.module('reservation',reservationSchema);
module.exports = Reservation;
