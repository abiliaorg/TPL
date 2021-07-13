function State_Apartment() {

    var _this = {};

    _this.Iam = function() {
        return "apartment";
    };

    _this.Run = function() {
        console.log("⛳ ------> Apartment state");

        ApartmentUpdateCircles();
    };

    _this.Init = function() {

        window.app.view.apartment_apartmentinside = $('#apartment #apartment_inside');
        window.app.view.apartment = $('#apartment');
        window.app.view.apartment_apartmentinside.load('./assets/images/apartment/floorplan.svg', function() {
            ApartmentUpdateCircles()
        });

    }

    _this.Resize = function() {

        ApartmentUpdateCircles();

    }





    return _this;


}

function ApartmentUpdateCircles() {

    $(".pulsating-circle").remove();

    var circles = window.app.view.apartment_apartmentinside.find("#AFFORDANCE circle");

    //console.log(circles);

    var el = "";

    for (var c = 0; c < circles.length; c++) {
        var pos = $(circles[c])[0].getBoundingClientRect();

        var state = $(circles[c]).attr("id").replace("state_", "");

        var left = Math.floor(pos.x - 25);
        var top = Math.floor(pos.y - 25);

        var style = "left: " + left + "px; top: " + top + "px";

        //console.log(pos);

        el += '<div class="pulsating-circle" style="' + style + '" popup-goto="enter_' + state + '"></div>';


    }

    window.app.view.apartment.append(el);

}

window.app.states.apartment = State_Apartment();

//---------------------------------------------------------- END