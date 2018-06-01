const express     = require('express');
const app         = express();
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const path        = require('path');
const PORT        = 3000;

app.use(morgan('dev')); // logging

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/', function(req, res) {
  res.json('hello world');
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Error' );
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
