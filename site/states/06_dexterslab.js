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
			
				window.app.dexterslab.drawingMode = false;
			  window.app.dexterslab.canvas = new fabric.Canvas('dexters_canvas', {isDrawingMode: window.app.dexterslab.drawingMode});
				
				window.app.view.dexters_canvas_container = $("#dexters_canvas_container");
				updateCanvas();

        window.app.view.button_main = $("#dexterslab .button_main");
        window.app.view.panel_left = $("#dexterslab .panel_left");
        window.app.view.panel_right = $("#dexterslab .panel_right");	
			  window.app.view.button_draw = $("#dexterslab #button_draw");
			
			  updatePanels("accessories");

        window.app.view.button_main.on("click", function() {						
					var info = $(this).attr("data-info");
					updatePanels(info);
        });			
		
				$('#dexterslab').on('click', '.button_item', function() {
					 var id = $(this).attr("data-id");					 
					 addItemToCanvas(id);
				});
			
				window.app.view.button_draw.on("click",function(){
					window.app.dexterslab.drawingMode = !window.app.dexterslab.drawingMode;//changing the state from true to false and from false to true
					window.app.dexterslab.canvas.isDrawingMode = window.app.dexterslab.drawingMode;
					window.app.view.button_draw.toggleClass("active");				
					
					//change cursor
					if(window.app.dexterslab.drawingMode){						
						//$("html").css("cursor: url('./assets/images/pen.svg') !important");
					}else{
						//$("html").css("cursor: default, auto");
					}
				});
			
				$(window).on("keydown", function( event ) {
					//event.preventDefault();
					//console.log(event.which);					
					if ( event.which == 46 ) {
					 window.app.dexterslab.canvas.remove(window.app.dexterslab.canvas.getActiveObject());
					}
				});
			
				window.app.dexterslab.canvas.on('mouse:up', function (e) {
					//check if user clicked an object
					if (e.target) {
						console.log(e.target._type);
					}
				});
			
    }
		
		_this.Resize = function(){			
			//console.log("resize inside dexter");			
			updateCanvas();			
		}
		
		function updateCanvas(){
			
				window.app.dexterslab.canvas.setWidth(window.app.view.dexters_canvas_container.width());
        window.app.dexterslab.canvas.setHeight(window.app.view.dexters_canvas_container.height());
        window.app.dexterslab.canvas.calcOffset();
		}
		
		function updatePanels(info){
			window.app.view.button_main.removeClass('selected');
			$("#dexterslab .button_main[data-info='"+info+"']").addClass('selected');

			var listofitems = window.app.dexterslab.items[info];

			var right_elements = "";
			var left_elements = "";

			for (i = 0; i < listofitems.length; i++) {

					if (i % 2 == 0) { //even
							left_elements += '<div class="row b-b button_item" data-id="'+listofitems[i].id+'">' + listofitems[i].title + '</div>';
					} else {
							right_elements += '<div class="row b-b button_item" data-id="'+listofitems[i].id+'">' + listofitems[i].title + '</div>';
					}

			}

			window.app.view.panel_left.html(left_elements);
			window.app.view.panel_right.html(right_elements);
		}
	
	
		function addItemToCanvas(type){
			console.log("element clicked: "+type);
			
			
			switch (type){
					
				case "circle":
					
					var item = new fabric.Circle({ 
						radius: 30, 
						fill: '#f55', 
						top: 100, 
						left: 100,
						_type: "circle"
					});		

					/*canvas.item(0).set({
							borderColor: 'red',
							cornerColor: 'green',
							cornerSize: 6,
							transparentCorners: false
					});
					canvas.setActiveObject(canvas.item(0));
					this.__canvases.push(canvas);*/
					
					break;
					
				case "square":
					
					var item = new fabric.Rect({ 
							width: 30, 
							height: 30, 
							left: 100, 
							top: 100, 
							fill: '#000',
						  _type: "square"
					});
					
					break;
					
					
					
				default:
					break;
					
					
			}		
			
			window.app.dexterslab.canvas.add(item);
			window.app.dexterslab.canvas.setActiveObject(item); 
		
		}


    return _this;

}

window.app.states.dexterslab = State_DextersLab();

/*
var brush = canvas.freeDrawingBrush;
        brush.color = 'blue';
        brush.width = 3;*/

//---------------------------------------------------------- END