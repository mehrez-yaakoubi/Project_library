const express = require('express');

const mongoose = require('mongoose');
const app = express();

const bodyParser = require("body-parser");
const InitiateMongoServer = require("./bd/connect");
const user = require('./routes/users');
const book = require('./routes/book');
const auth = require('./middelware/auth');
const Auoris=require('./middelware/Autoris');

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});
app.use("/user", user);
app.use("/book", book);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

/*app.use('/',authroute)
var url='mongodb://localhost:27017/bibliothéque';
app.get('/',(req,res)=>{
    mongoose.connect(url).then(res=>{
        console.log("connected!");
         mongoose.disconnect();
    })
})
app.get('/createcollection',(req,res)=>{
    var schemaOeuvre = mongoose.Schema({
        titre:String,
        type:String,
        auteur:String,
        catégorie:String

    })
    var Oeuvre = mongoose.model('oeuvre',schemaOeuvre);
    mongoose.connect(url).then(res=>{
        let oeuvre = new Oeuvre({
            titre:'aaaa',
              type:'roman',
              auteur:'x',
              catégorie:'y'
        })
       
     oeuvre.save();
     
        })
        
    
})

app.listen(3008);*/


