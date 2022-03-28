const router=require('express').Router();

const reservation=require('../modules/reservations');
const book=require('../modules/book');
const author=require('../modules/auth');
const user=require('../modules/users');
const async =require('async');


//exports.ReservationBook-List = function(req,res,next){}

//router.use(bodyParser.urlencoded({ extended: false }));
//router.use(bodyParser.json());
router.post('/reservation', async(req,res,next)=>{
try{
//const book = await Book.findById(req.book.id);
//const user = await User.findById(req.user.id);
const idUser = req.body.idUser;//  {idUser : .....}
const idBook = req.body.idBook;
const bookRes = await book.findOne(idBook);
const UserRes = await user.findOne(idUser);

// console.log(bookRes);
//console.log(UserRes);


// if(book.statuts != 'Available')
// res.send("cette livre n'est pas disponible pour le moment,sera disponible a:"+bookEmprunt.dateRetour);


let reserv=new reservation({
    book : bookRes,
    status : 'Reserved',
dateEmprunt:req.body.dateEmprunt,
dateRetour:req.body.dateRetour,
users : UserRes

});
console.log(reserv);
res.json(reserv);
await reserv.save();


}catch(error){ console.log(error)}
});
module.exports=router