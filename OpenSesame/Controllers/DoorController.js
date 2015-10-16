(function (doorController) {
    
    var audio = require("../Messages").Audio;
    var logger = require("../logger");
    var uuid = require('node-uuid')

    doorController.init = function (app) {
        
        app.get("/door/:doorId/:key", function (request, response) {
            
            var doorId = request.params.doorId;
            var key = request.params.key;
            
            response.send('doorId is ' + doorId + ', secret word is ' + key)

            //res.render('public/views/PlayAudio', { title: 'Open Sesame', doorId: key });
        });

        app.post('/door/:doorId/:key', function (request, response) {
        
            var doorId = request.params.doorId;
            var key = request.params.key;
            
            logger.info("request-body: " + request.body.message.toString())

            logger.debug("Generating audio...");
            //var generatedPath = 'e:\\' + doorId + '.wav';
            var generatedId = uuid.v4().toString().replace("-", "")
            var generatedPath = 'public/waves/' + generatedId + '.mp3';

            audio.GenerateAudioMessage(generatedPath, key)
            
            logger.info('Generated the path: ' + generatedPath)

            response.set('Content-Type', 'application/json');
            response.status(201).send({
                DoorId: doorId,
                Key: key,
                generatedId: generatedId
            });
        });
    }

})(module.exports);