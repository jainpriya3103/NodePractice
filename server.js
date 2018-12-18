const express = require('express');
const app = express();
const port = 3000;
const QuoteRouter = require('./routes/QuoteRouter');
const BookRouter=require('./routes/BookRouter')

app.listen(port, () => {
    console.log('listening on 3000')
  })
  
  app.use(express.static('public'));
  
  app.set('view engine', 'ejs');
  
  app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname,'public', 'index.html'));
  });

  

  app.use('/quotes', QuoteRouter);
  app.use('/books',BookRouter);

  