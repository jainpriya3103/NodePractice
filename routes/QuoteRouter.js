const express = require('express');

const QuoteRouter = express.Router();

const bodyParser = require('body-parser');
QuoteRouter.use(bodyParser.urlencoded({extended: true}));
QuoteRouter.use(bodyParser.json());

const dbUrl = require('../common/dbconfig').dbUrl;
const dbName = require('../common/dbconfig').dbName;
const MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var db;
MongoClient.connect(dbUrl, (err, client) => {
  if (err) return console.log(err)
  db = client.db(dbName) 
});


QuoteRouter.route('/').get(function (req, res) {
  db.collection('quotes').find().toArray(function (err, quotes){
      if(err){
        console.log(err);
      }
      else {
        console.log(quotes);
        res.render('quotes/index', {quotes: quotes});
      }
    });
});

QuoteRouter.route('/create').get(function (req, res) {
   res.render('quotes/create');
 });
 
QuoteRouter.post('/post', (req, res) => {
  console.log(db);
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/quotes')
  })
});

QuoteRouter.post('/insert', (req, res) => {
  var quote={name:req.body.name,quote:req.body.quote};
  console.log(db);
  db.collection('quotes').insertOne(quote, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/quotes')
  })
});


QuoteRouter.route('/edit/:id').get(function (req, res) {
  db.collection('quotes').findOne({"_id": ObjectId(req.params.id.toString()) })
  .then(function (result){
      console.log(result);
      res.render('quotes/edit', {quoteObj: result});
  });
});

QuoteRouter.post('/update/:id', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({"_id": ObjectId(req.params.id.toString()) }, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.redirect('/quotes');
  })
});

QuoteRouter.route('/delete/:id').get(function (req, res) {
  db.collection('quotes').deleteOne({"_id": ObjectId(req.params.id.toString()) })
  .then(function (){
    res.redirect('/quotes');
  });
});

module.exports = QuoteRouter;