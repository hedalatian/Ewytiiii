var gpio = require('rpi-gpio');
var express = require('express');
var router = express.Router();
var port = 0;

gpio.on('export', function(channel) {
    console.log('Channel set: ' + channel);
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pin/:id/:state', function(req, res, next) {
  port = Number(req.params.id);
  gpio.setup(port, gpio.DIR_OUT, write);
    
  res.send('pin' + req.params.id + ' is ' + req.params.state);
});

 function write() {
      gpio.write(port, true, function(err) {
          if (err) throw err;
          console.log('Written to pin');
      });
  }

module.exports = router;
