const route = require('express').Router()
//const authcontroller = require('../controllers/authcontroller')
//const body=require('express').urlencoded({extended:true})
//route.post('/register',body,authcontroller.postregister)
const {Author} = require('../modules/auth');
//const auth=require('../middelware/auth');
//const Autoris=require('../middelware/Autoris');

route.post('/addauthor',async (req,res)=>{
    try {
          let author = new Author(req.body);
        author = await author.save();
        res.send(author);
    } catch (error) {
        res.status(400).send('Error saving author :'+error.message);
    }
    
});

// get All authors
route.get('/getauthor',async (req,res)=>{
    try {
        let authors = await Author.find();
        res.send(authors)
    } catch (error) {
        res.status(400).send('Error saving course :'+error.message);
    }
    
});

//update
route.put('putauthor/:id',async (req,res)=>{
    try {
       await Author.updateOne({_id : req.params.id}, req.body);
        res.send(await Author.findById(req.params.id));
    } catch (error) {
        res.status(400).send('Error updating auhtor :'+error.message);
    }
    
});

route.delete('deleteauthor/:id',async (req,res)=>{
    try {
        let author = await Author.findByIdAndRemove(req.params.id);
        if(!author)
            return res.status(404).send('Author with id is not found');
        res.send(author);
    } catch (error) {
        res.status(400).send('Error Deleting Author :'+error.message);
    }
    
});

module.exports=route;