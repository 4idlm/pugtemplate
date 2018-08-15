let http = require("http")
var express = require('express');
const pug = require('pug');
const path = require('path');

var app = express();

var server  = http.createServer(app);
let port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/css/'))
app.use('/style', express.static('style/'))
app.set('view engine', 'pug');

app.get('/user', function(req, res) {

    res.send('user is working on the data');

  });


  app.get('/pug', function(req, res) {

    res.status(200).render('index.pug')

  });

 app.post('/posting', function(req, res) {

    res.send('we posting the data');
    
  });
 
server.listen(port,()=>{

    console.log(`we are listen the port ${port}`)
})

