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

    // window.onresize = (event) => {
    //     fitResponsiveCanvas();
    // };

    // function fitResponsiveCanvas() {
    //     // canvas dimensions
    //     let canvasSize = {
    //         width: 1200,
    //         height: 1400
    //     };
    //     // canvas container dimensions
    //     let containerSize = {
    //         width: document.getElementById('dexters_canvas_container').offsetWidth,
    //         height: document.getElementById('dexters_canvas_container').offsetHeight
    //     };
    //     canvas.setDimensions(containerSize);
    //     // how you want to handle your zoom is really application dependant.
    //     let scaleRatio = Math.min(containerSize.width / canvasSize.width, containerSize.height / canvasSize.height);
    //     canvas.setZoom(scaleRatio)
    // }

    // window.app.view.dexters_draw.on("click", function() {
    //     const canvas = document.getElementById("dexters_canvas");
    //     console.log(canvas.width, canvas.height);

    //     // get canvas 2D context and set him correct size
    //     var ctx = canvas.getContext('2d');
    //     resize();
    //     console.log(canvas.width, canvas.height);

    //     // last known position
    //     var pos = { x: 0, y: 0 };

    //     window.addEventListener('resize', resize);
    //     document.getElementById("dexters_canvas").addEventListener('mousemove', draw);
    //     document.getElementById("dexters_canvas").addEventListener('mousedown', setPosition);
    //     document.getElementById("dexters_canvas").addEventListener('mouseenter', setPosition);

    //     // new position from mouse event
    //     function setPosition(e) {
    //         pos.x = e.clientX;
    //         pos.y = e.clientY;
    //     }

    //     // resize canvas
    //     function resize() {
    //         ctx.canvas.width = window.innerWidth;
    //         ctx.canvas.height = window.innerHeight;
    //     }

    //     function draw(e) {
    //         // mouse left button must be pressed
    //         if (e.buttons !== 1) return;

    //         ctx.beginPath(); // begin

    //         ctx.lineWidth = 5;
    //         ctx.lineCap = 'round';
    //         ctx.strokeStyle = '#c0392b';

    //         ctx.moveTo(pos.x, pos.y); // from
    //         setPosition(e);
    //         ctx.lineTo(pos.x, pos.y); // to

    //         ctx.stroke(); // draw it!
    //     }
    // });

    window.app.view.dexters_draw.on("click", function() {

        var canvas = this.__canvas = new fabric.Canvas('dexters_canvas', {
            isDrawingMode: true
        });

        // canvas.setDimensions({ width: '100%', height: '100%' }, { cssOnly: true });
        // canvas.setDimensions({ width: '100%', height: '100%' }, { cssOnly: true });
        // canvas.setHeight(window.innerHeight);
        canvas.setWidth(window.innerWidth);
        canvas.setHeight(500);
        canvas.calcOffset();

        fabric.Object.prototype.transparentCorners = false;

        var brush = canvas.freeDrawingBrush;
        brush.color = 'blue';
        brush.width = 3;

    });

    window.app.view.circle = $("#circle");

    window.app.view.circle.on("click", function() {

        canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

        canvas.item(0).set({
            borderColor: 'red',
            cornerColor: 'green',
            cornerSize: 6,
            transparentCorners: false
        });
        canvas.setActiveObject(canvas.item(0));
        this.__canvases.push(canvas);

    });

    return _this;

}

window.app.states.dexterslab = State_DextersLab();

//---------------------------------------------------------- END