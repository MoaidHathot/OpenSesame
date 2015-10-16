
module.exports.log = function (message) {
    
    logMessage(message);
};

module.exports.trace = function (message) {
    
    logMessage(message, "Trace");
};

module.exports.debug = function (message) {
    
    logMessage(message, "Debug");
};

module.exports.info = function (message) {
    
    logMessage(message, "Info");
};

module.exports.warning = function (message) {
    
    logMessage(message, "Warning");
};

module.exports.error = function (message) {
    
    logMessage(message, "Error");
};

module.exports.fatal = function (message) {
    
    logMessage(message, "Fatal");
};

function logMessage(message, logLevel) {
    
    var msg = "";
    
    if (logLevel) {
        
        msg += logLevel + ": ";
    }
    
    msg += message;
    
    console.log(msg);
}