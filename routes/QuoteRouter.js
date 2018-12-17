const express = require('express');
const QuoteRouter = express.Router();
const bodyParser = require('body-parser');
QuoteRouter.use(bodyParser.urlencoded({extended: true}));
QuoteRouter.use(bodyParser.json());
const dbUrl = require('../common/dbconfig').dbUrl;
const dbName = require('../common/dbconfig').dbName;

const MongoClient = require('mongodb');
var db;

MongoClient.connect(dbUrl, (err, client) => {
  if (err) return console.log(err)
  db = client.db(dbName) // whatever your database name is
});


QuoteRouter.route('/').get(function (req, res) {
  db.collection('quotes').find().toArray(function (err, quotes){
      if(err){
        console.log(err);
      }
      else {
        console.log(quotes);
        res.render('index', {quotes: quotes});
      }
    });
});

QuoteRouter.route('/create').get(function (req, res) {
   res.render('create');
 });
 
QuoteRouter.post('/post', (req, res) => {
  console.log(db);
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
});

module.exports = QuoteRouter;