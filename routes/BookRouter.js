var express = require('express');
var bookRouter = express.Router();
var bodyParser = require('body-parser');

bookRouter.use(bodyParser.urlencoded({ extended: true }));
bookRouter.use(bodyParser.json());

const dbUrl = require('../common/dbconfig').dbUrl;
const dbName = require('../common/dbconfig').dbName;
const MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var db;
MongoClient.connect(dbUrl, (err, client) => {
    if (err) return console.log(err)
    db = client.db(dbName)
});

bookRouter.route('/').get(function (req, res) {
    db.collection('books').find().toArray(function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            res.render('books/index', { bookList: result })
        }
    });
});

bookRouter.route('/create').get(function(req,res){
    res.render('books/create');
});

bookRouter.route('/create').post(function(req,res){
    var book={name:req.body.name,author:req.body.author,price:req.body.price};
    db.collection('books').insertOne(book,function(err,result){
        if(err){
            console.log(err);
        }
        else{
         res.redirect('/books');
        }
    });
});

bookRouter.route('/edit/:id').get(function(req,res)
{
    db.collection('books').findOne({"_id": ObjectId(req.params.id.toString()) }).then(
        (result)=>{

            res.render('books/edit',{editedBook:result});
        }
    )
});

bookRouter.route('/edit/:id').post(function(req,res){
    db.collection('books').findOneAndUpdate({"_id" : ObjectId(req.params.id.toString())},
    {
        $set:{
            name:req.body.name,
            author:req.body.author,
            price:req.body.price
        }
    },{
        sort:{_id: -1},
        upsert:true
    },function(err,result){
        if(err)
        {
            res.send(err);
        }
        else{
            res.redirect('/books')
        }
    })
})

bookRouter.route('/delete/:id').get(function(req,res){
    db.collection('books').deleteOne({"_id" : ObjectId(req.params.id.toString())}).then((result)=>{
        res.redirect('/books');
    })
})



module.exports = bookRouter;


