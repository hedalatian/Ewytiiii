var gpio = require('rpi-gpio');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pin/:id/:state', function(req, res, next) {
  
  gpio.setup(27, gpio.DIR_OUT, write);
    
  res.send('pin' + req.params.id + ' is ' + req.params.state);
});

 function write() {
      gpio.write(27, true, function(err) {
          if (err) throw err;
          console.log('Written to pin');
      });
  }

module.exports = router;
