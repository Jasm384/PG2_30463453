var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let name = 'Julian Sojo'
  res.render('index', {
    title: 'CV Juan',
    name:name,
  });
});

router.post('/form', function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let comment = req.body.comment;
  let date = new Date();
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  console.log({name, email, comment});

  db.insert(name, email, comment, date, ip);

  

  
  res.redirect('/');
});

router.get('/contactos', function(req, res, next){
  db.select(function (rows){
    console.log(rows);
  });
  res.send('ok');
});

module.exports = router;
