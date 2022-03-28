const express = require('express');
const Book = require("../modules/book");
const bodyParser = require("body-parser");
const autoris=require("../middelware/Autoris");

const db = require('../bd/connect');
const book = require('../modules/book');




const router = express.Router();

//index.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.get("/books", async (req, res) => {
    try {
        await Book.find().then((result) => {
            res.send(result);

        });
    } catch (err) {
        console.log(err);
    };
});


    router.delete("/delete/:id", async (req, res) => {
        try {
            await Book.findOneAndDelete({ id: req.params.id });
            res.send("supprimé avec succés !");
        } catch (err) {

        }
    });


    router.post("/addbooks", async (req, res) => {
        console.log("xxxxx");
        try {
            let new_book = new Book({
                Titre: req.body.Titre,
                Auteur: req.body.Auteur,
                Type: req.body.Type,
                Etat: req.body.Etat,
                stock:req.body.stock

            });
            await new_book.save();
            book.stock+=1;
            res.send("save effectuer avec succés");
        } catch (err) {
            console.log(err);
        }
    });




module.exports = router;