const express = require('express');
const Book = require("../modules/book");
const bodyParser = require("body-parser");
const autoris=require("../middelware/Autoris");

const db = require('../bd/connect');




const index = express();

index.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
index.use(bodyParser.json());

index.get("/books", async (req, res) => {
    try {
        await Book.find().then((result) => {
            res.send(result);

        });
    } catch (err) {
        console.log(err);
    };
    index.delete("/delete/:id", async (req, res) => {
        try {
            await Book.findOneAndDelete({ id: req.params.id });
            res.send("supprimé avec succés !");
        } catch (err) {

        }
    })


    index.post("/addbooks", async (req, res) => {
        try {
            let new_book = new Book({
                Titre: req.body.Titre,
                Auteur: req.body.Auteur,
                Type: req.body.Type,
                Etat: req.body.Etat



            });
            await new_book.save();
            res.send("save effectuer avec succés");
        } catch (err) {
            console.log(err);
        }
    })


});

module.exports = index;