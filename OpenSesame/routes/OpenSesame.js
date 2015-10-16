
var express = require('express');
var audio = require("../Messages").Audio;
var logger = require("../logger");
var uuid = require('node-uuid')
var router = express.Router();
    
/* GET home page. */
router.get('/', function (req, res) {
    //res.send('<audio controls=\"\"><source src=' + "\"E:\\1234.wav\"" + ' type=\"audio/wav\" /><em>Sorry, your browser doesn\'t support HTML5 audio</audio>');
    //res.send('<audio controls=\"\"><source src=' + "\"http://www.w3schools.com/HTML/horse.mp3\"" + ' type=\"audio/mp3\" /><em>Sorry, your browser doesn\'t support HTML5 audio</audio>');
    res.render('index', { title: 'Open Sesame', id: '1234' });
});
    
router.get('/:id', function (request, response) {
        
    var id = request.params.id
        
    response.render('PlayAudio', { title: 'Open Sesame', id: id });
});


router.post('/:doorId/:message', function (request, response) {
    
    var doorId = request.params.doorId;
    //var message = request.params.message;
    var message = request.body.message
    
    //logger.info("request-body: " + request.body.message.toString())
    
    logger.debug("Generating audio...");
    //var generatedPath = 'e:\\' + doorId + '.wav';
    var generatedId = uuid.v4().toString();
    var generatedPath = 'public/waves/' + generatedId + '.mp3';
    
    audio.GenerateAudioMessage(generatedPath, message)
    
    logger.info('Generated the path: ' + generatedPath)
    
    response.set('Content-Type', 'application/json');
    response.status(201).send({
        DoorId: doorId,
        Message: message,
        generatedId: generatedId,
        generatedFile: generatedPath,
    });
});

module.exports = router;