var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    //res.send('<audio controls=\"\"><source src=' + "\"E:\\1234.wav\"" + ' type=\"audio/wav\" /><em>Sorry, your browser doesn\'t support HTML5 audio</audio>');
    //res.send('<audio controls=\"\"><source src=' + "\"http://www.w3schools.com/HTML/horse.mp3\"" + ' type=\"audio/mp3\" /><em>Sorry, your browser doesn\'t support HTML5 audio</audio>');
    res.render('PlayAudio', { title: 'Open Sesame', id: '1234' });
});

router.get('/OpenSesame/:id', function (request, response) {
    
    var id = request.params.id
    
    response.render('PlayAudio', { title: 'Open Sesame', id: id });
});

module.exports = router;