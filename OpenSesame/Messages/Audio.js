(function (messages) {
    
    var exec = require("child_process").execFile;
    //var generateFilePath = "S:\\Programming\\GitHub\\quietnet\\Mine\\GenerateWav.py"
    var generateFilePath = "S:\\Programming\\NodeJS\\OpenSesame\\OpenSesame\\quietnet\\GenerateWav.py"
    var logger = require("../logger")

    messages.GenerateAudioMessage = function (path, message){
        
        try {
            
            
            exec('cmd.exe', ['/c', generateFilePath, message, path], { silent: false }, function (error, stdout, stderr) {
                
                if (error) {

                    logger.error(error)
                }

                if (stdout) {
                    logger.debug(stdout)
                }

                if (stderr) {
                    logger.warning(stderr)
                }
            });

        } catch (error) {
            logger.error(error);
        }
    }

})(module.exports);