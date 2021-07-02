function State_Apartment() {

    var _this = {};

    _this.Iam = function() {
        return "apartment";
    };

    _this.Run = function() {
        console.log("⛳ ------> Apartment state");




    };

    _this.Init = function() {


    }

    _this.Resize = function() {


    }

    window.app.view.guide = $("#apartment #guide");
    window.app.view.guide.on("click", function() {
        window.app.view.side_1.show();
    });


    return _this;


}

window.app.states.apartment = State_Apartment();

//---------------------------------------------------------- END