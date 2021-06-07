function State_DextersLab() {

    var _this = {};

    _this.Iam = function() {
        return "dexterslab";
    };

    _this.Run = function() {
        console.log("⛳ ------> DextersLab state");


    };

		_this.Init = function() {
			window.app.dexterslab = {};
			window.app.dexterslab.items = {

					"accessories": [{
									id: "sounds",
									title: "Suono Musica",
							},
							{
									id: "wheels",
									title: "Ruote",
							},
							{
									id: "lights",
									title: "Luci",
							},
							{
									id: "flags",
									title: "Bandierina",
							},
					],
					"constructivelements": [{
									id: "circle",
									title: "Cerchio",
							},
							{
									id: "square",
									title: "Quadrato",
							},
							{
									id: "triangle",
									title: "Triangolo",
							},
							{
									id: "exagon",
									title: "Esagono",
							},
					],
					"technologies": [{
									id: "touch",
									title: "Touch Screen",
							},
							{
									id: "ar",
									title: "Realta Aumentata",
							},
							{
									id: "voice",
									title: "Comando Vocale",
							},
							{
									id: "joystick",
									title: "Joystick",
							},
					],
					"materials": [{
									id: "wood",
									title: "Legno",
							},
							{
									id: "iron",
									title: "Ferro",
							},
							{
									id: "paper",
									title: "Carta",
							},
							{
									id: "cloth",
									title: "Stoffa",
							},
							{
									id: "plastic",
									title: "Plastica",
							},
							{
									id: "stone",
									title: "Pietra",
							},
					]

			}


			window.app.view.button_main = $("#dexterslab .button_main");
			window.app.view.panel_left = $("#dexterslab .panel_left");
			window.app.view.panel_right = $("#dexterslab .panel_right");

			window.app.view.button_main.on("click", function() {

					window.app.view.button_main.attr("button-state", "off").removeClass('selected');
					$(this).attr("button-state", "on").addClass('selected');

					var info = $(this).attr("data-info");

					var listofitems = window.app.dexterslab.items[info];

					var right_elements = "";
					var left_elements = "";

					for (i = 0; i < listofitems.length; i++) {

							if (i % 2 == 0) { //even
									left_elements += '<div class="row b-b button_item">' + listofitems[i].title + '</div>';
							} else {
									right_elements += '<div class="row b-b button_item">' + listofitems[i].title + '</div>';
							}

					}

					window.app.view.panel_left.html(left_elements);
					window.app.view.panel_right.html(right_elements);

			});
			
			
		}
		
    return _this;
	
}

window.app.states.dexterslab = State_DextersLab();

//---------------------------------------------------------- END