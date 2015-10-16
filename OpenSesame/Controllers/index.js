(function (controllers) {

    var doorController = require("./doorController")

    controllers.init = function (app){

        doorController.init(app)
    }

})(module.exports);