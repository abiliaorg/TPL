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

    window.app.view.dexters_draw = $("#dexters_draw");
    window.app.view.dexters_canvas = $("#dexters_canvas");

    window.app.view.dexters_draw.on("click", function() {
        const canvas = document.getElementById("dexters_canvas");
        console.log(canvas.width, canvas.height);

        // get canvas 2D context and set him correct size
        var ctx = canvas.getContext('2d');
        resize();
        console.log(canvas.width, canvas.height);

        // last known position
        var pos = { x: 0, y: 0 };

        window.addEventListener('resize', resize);
        document.getElementById("dexters_canvas").addEventListener('mousemove', draw);
        document.getElementById("dexters_canvas").addEventListener('mousedown', setPosition);
        document.getElementById("dexters_canvas").addEventListener('mouseenter', setPosition);

        // new position from mouse event
        function setPosition(e) {
            pos.x = e.clientX;
            pos.y = e.clientY;
        }

        // resize canvas
        function resize() {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        }

        function draw(e) {
            // mouse left button must be pressed
            if (e.buttons !== 1) return;

            ctx.beginPath(); // begin

            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#c0392b';

            ctx.moveTo(pos.x, pos.y); // from
            setPosition(e);
            ctx.lineTo(pos.x, pos.y); // to

            ctx.stroke(); // draw it!
        }
    });

    return _this;

}

window.app.states.dexterslab = State_DextersLab();

//---------------------------------------------------------- END