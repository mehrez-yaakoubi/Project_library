


   const mongoose = require("mongoose");
   
   //mongoose.connect('mongodb+srv://Mehrez:09915022.MAma@cluster0.bnh4u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
   //.then(()=>console.log('connected!')).catch(err=>console.error('error connection:',err.message));
   
    var url='mongodb://localhost:27017/Project';
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true }).
    then(()=>console.log("database connected in mongo ")).catch(err=>console.log("Euror connection!!"+err));

   //const mongoose =require('mongoose');
   //const Url='mongodb:localhost:27017/Project'; 
    //console.log('connected');
    /*const mongoose=require('mongoose');
const url ='mongodb://localhost:27017/bibliothéque'

const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true
      });
      console.log("Connected to DB !!");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
  module.exports.InitiateMongoServer = InitiateMongoServer;*/
 /* const mongoose = require('mongoose')
var url = "mongodb://localhost:27017/projet"
mongoose.connect(url).then(()=>console.log('mongo is up'))
.catch(err=>console.log('mongoose is down',err.message));*/

