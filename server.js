const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('listening on 3000')
  })
  
  app.use(express.static('public'));
  
  app.set('view engine', 'ejs');
  
  app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname,'public', 'index.html'));
  });

  const QuoteRouter = require('./routes/QuoteRouter');

  app.use('/quotes', QuoteRouter);