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


    return _this;


}

window.app.states.apartment = State_Apartment();

//---------------------------------------------------------- END