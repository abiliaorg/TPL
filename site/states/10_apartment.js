function State_Apartment() {

	var _this = {};

	_this.Iam = function() {
		return "apartment";
	};

	_this.Run = function() {
		console.log("⛳ ------> Apartment state");

		ApartmentUpdateCircles();

		showPigeon("Clicca sulle stanze ed esplora la casa TPL");
	};

	_this.Init = function() {

		window.app.view.apartment_apartmentinside = $('#apartment #apartment_inside');
		window.app.view.apartment = $('#apartment');
		window.app.view.apartment_apartmentinside.load('./assets/images/apartment/floorplan.svg', function() {
			ApartmentUpdateCircles()
		});

	}

	_this.Resize = function() {

		ResizeMap();
		window.setTimeout(function(){
			ApartmentUpdateCircles();		
		}, 1000)
		

	}


	function ResizeMap(){

		var svg = window.app.view.apartment_apartmentinside.find("svg");

		var containerWidth = window.app.view.apartment_apartmentinside.parentsUntil("wrapper_row").innerWidth();

		var containerHeight = window.app.view.apartment_apartmentinside.parentsUntil("wrapper_row").innerHeight();

		var svgWidth = svg.innerWidth();

		var svgHeight = svg.innerHeight();

		var ratio = svgWidth/svgHeight;

		var height = 0.9*containerHeight;	
		var width = height*ratio;	
		

		if(width>containerWidth){
			var width = 0.9*containerWidth;
			var height = width/ratio;
		}

		var left=(containerWidth-width)/2;
				
				
		svg.css({
			height: height,
			width: width,
			"margin-left": left
		});

		/*if(containerHeight>svgHeight && containerWidth>svgWidth){

			}*/

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