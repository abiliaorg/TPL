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
                    id: "hexagon",
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
        window.app.dexterslab.canvas = new fabric.Canvas('dexters_canvas', { isDrawingMode: window.app.dexterslab.drawingMode });

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

        window.app.view.button_draw.on("click", function() {
            window.app.dexterslab.drawingMode = !window.app.dexterslab.drawingMode; //changing the state from true to false and from false to true
            window.app.dexterslab.canvas.isDrawingMode = window.app.dexterslab.drawingMode;
            window.app.view.button_draw.toggleClass("active");

            var brush = window.app.dexterslab.canvas.freeDrawingBrush;
            brush.color = 'black';
            brush.width = 4;

            //change cursor
            if (window.app.dexterslab.drawingMode) {
                $("html").css("cursor: url('../assets/images/dexterslab/pen.svg') !important");
            } else {
                $("html").css("cursor: default, auto");
            }
        });

        $(window).on("keydown", function(event) {
            //event.preventDefault();
            //console.log(event.which);					
            if (event.which == 46) {
                window.app.dexterslab.canvas.remove(window.app.dexterslab.canvas.getActiveObject());
            }
        });

        window.app.dexterslab.canvas.on('mouse:up', function(e) {
            //check if user clicked an object
            if (e.target) {
                console.log(e.target._type);
            }
        });

    }

    window.app.view.back_home = $("#dexterslab #back_home");
    window.app.view.back_home.on("click", function() {
        goToState("home");
    });

    _this.Resize = function() {
        //console.log("resize inside dexter");			
        updateCanvas();
    }

    function updateCanvas() {

        window.app.dexterslab.canvas.setWidth(window.app.view.dexters_canvas_container.width());
        window.app.dexterslab.canvas.setHeight(window.app.view.dexters_canvas_container.height());
        window.app.dexterslab.canvas.calcOffset();
    }

    function updatePanels(info) {
        window.app.view.button_main.removeClass('selected');
        $("#dexterslab .button_main[data-info='" + info + "']").addClass('selected');

        var listofitems = window.app.dexterslab.items[info];

        var right_elements = "";
        var left_elements = "";

        for (i = 0; i < listofitems.length; i++) {

            if (i % 2 == 0) { //even
                left_elements += '<div class="row b-b button_item" data-id="' + listofitems[i].id + '">' + '<div class="item_grid"><div class="item_svg"><img src="./assets/images/dexterslab/' + listofitems[i].id + '.svg" height="80" width="80"></div><div class="item_text">' + listofitems[i].title + '</div></div></div>';
            } else {
                right_elements += '<div class="row b-b button_item" data-id="' + listofitems[i].id + '">' + '<div class="item_grid"><div class="item_svg"><img src="./assets/images/dexterslab/' + listofitems[i].id + '.svg" height="80" width="80"></div><div class="item_text">' + listofitems[i].title + '</div></div></div>';
            }

        }

        window.app.view.panel_left.html(left_elements);
        window.app.view.panel_right.html(right_elements);
    }


    function addItemToCanvas(type) {
        console.log("element clicked: " + type);


        switch (type) {

            case "circle":

                var item = new fabric.Circle({
                    radius: 80,
                    top: 100,
                    left: 100,
                    strokeWidth: 4,
                    stroke: 'black',
                    fill: '#F7524A',
                    strokeLineJoin: 'round',
                    _type: "circle"
                });

                /*
                //This is for setting the coulur of the resizing controls (changing the default) 
                canvas.item(0).set({
                		borderColor: 'red',
                		cornerColor: 'green',
                		cornerSize: 6,
                		transparentCorners: false
                });
                canvas.setActiveObject(canvas.item(0));
                this.__canvases.push(canvas);
                */

                break;

            case "square":

                var item = new fabric.Rect({
                    width: 120,
                    height: 120,
                    left: 100,
                    top: 100,
                    strokeWidth: 4,
                    stroke: 'black',
                    fill: '#99CCFF',
                    strokeLineJoin: 'round',
                    _type: "square"
                });

                break;

            case "triangle":

                var item = new fabric.Triangle({
                    width: 150,
                    height: 150,
                    left: 100,
                    top: 100,
                    fill: '#33FFCC',
                    strokeWidth: 4,
                    stroke: 'black',
                    strokeLineJoin: 'round',
                    _type: "triangle"
                });

                break;

            case "hexagon":

                function regularPolygonPoints(sideCount, radius) {
                    var sweep = Math.PI * 2 / sideCount;
                    var cx = radius;
                    var cy = radius;
                    var points = [];
                    for (var i = 0; i < sideCount; i++) {
                        var x = cx + radius * Math.cos(i * sweep);
                        var y = cy + radius * Math.sin(i * sweep);
                        points.push({ x: x, y: y });
                    }
                    return (points);
                }

                var points = regularPolygonPoints(6, 80);

                var item = new fabric.Polygon(points, {
                    left: 100,
                    top: 100,
                    strokeWidth: 4,
                    stroke: 'black',
                    fill: '#FF99CC',
                    strokeLineJoin: 'round',
                    _type: "hexagon"
                }, false);



                break;

            case "touch":

                console.log("here");
                var img_url = './assets/images/dexterslab/' + type + '.svg';
                console.log(img_url);
                fabric.loadSVGFromURL(img_url, function(objects) {
                    var group = new fabric.PathGroup(objects, {
                        left: 165,
                        top: 100,
                        width: 80,
                        height: 80
                    });
                    window.app.dexterslab.canvas.add(group);
                    window.app.dexterslab.canvas.renderAll();
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