function State_Bazar() {

    var _this = {};

    _this.Iam = function() {
        return "bazar";
    };

    window.app.bazar = {};
    window.app.bazar.canvas = $('#bazar_canvas');
    window.app.view.bazar_canvas_container = $("#bazar_canvas_container");

    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies,
        Events = Matter.Events,
        myCanvas = window.app.bazar.canvas.get(0);

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    /*engine.world.gravity.x = 0;
    engine.world.gravity.y = 600;
    engine.world.gravity.isPoint = true;*/

    // create renderer
    var render = Render.create({
        //element: window.app.view.bazarPlayground.get(0),
        canvas: myCanvas,
        engine: engine,
        options: {
            width: 800,
            height: 450,
            showAngleIndicator: false,
            showBroadphase: false,
            wireframes: false,
            background: '#FFFFFF'
        }
    });

    render.bounds.max.x = window.app.view.bazar_canvas_container.width();
    render.bounds.max.y = window.app.view.bazar_canvas_container.height();
    render.options.width = window.app.view.bazar_canvas_container.width();
    render.options.height = window.app.view.bazar_canvas_container.height();
    render.canvas.width = window.app.view.bazar_canvas_container.width();
    render.canvas.height = window.app.view.bazar_canvas_container.height();

    _this.Init = function() {

        window.app.bazar_products = [{
                id: "rocket",
                name: "Rocket",
                description: "Description for product 1",
                size: "small"
            },
            {
                id: "tablelamp",
                name: "Table Lamp",
                description: "Description for product 2",
                size: "big"
            },
            {
                id: "car",
                name: "Car",
                description: "Description for product 1",
                size: "small"
            },
            {
                id: "plant",
                name: "Plant",
                description: "Description for product 2",
                size: "big"
            },
            {
                id: "hanoi",
                name: "Tower of Hanoi",
                description: "Description for product 1",
                size: "small"
            },
            {
                id: "radio",
                name: "Radio",
                description: "Description for product 2",
                size: "big"
            },
            {
                id: "cactus",
                name: "Cactus",
                description: "Description for product 1",
                size: "small"
            },
            {
                id: "chair",
                name: "Chair",
                description: "Description for product 2",
                size: "big"
            },
            {
                id: "incense",
                name: "Incense Sticks",
                description: "Description for product 1",
                size: "small"
            },
            {
                id: "ceilinglamp",
                name: "Ceiling Lamp",
                description: "Description for product 2",
                size: "big"
            },
            {
                id: "bottle",
                name: "Bottle",
                description: "Description for product 1",
                size: "small"
            },
            {
                id: "stool",
                name: "Stool",
                description: "Description for product 2",
                size: "big"
            },
            {
                id: "sanitizer",
                name: "Sanitizer",
                description: "Description for product 1",
                size: "small"
            },
            {
                id: "horse",
                name: "Rocking Horse",
                description: "Description for product 2",
                size: "big"
            },
            {
                id: "mirror",
                name: "Mirror",
                description: "Description for product 1",
                size: "small"
            },
            {
                id: "computer",
                name: "Computer",
                description: "Description for product 2",
                size: "big"
            },
            {
                id: "cart",
                name: "Toy Cart",
                description: "Description for product 2",
                size: "big"
            }
        ];

        startBazarCarousel();
        startBazarPlayground();

    }

    _this.Run = function() {
        console.log("⛳ ------> Bazar state");

        console.log(Matter.Composite);

    };

    _this.Resize = function() {
        updateCanvas();
    }

    function updateCanvas() {
        render.bounds.max.x = window.app.view.bazar_canvas_container.width();
        render.bounds.max.y = window.app.view.bazar_canvas_container.height();
        render.options.width = window.app.view.bazar_canvas_container.width();
        render.options.height = window.app.view.bazar_canvas_container.height();
        render.canvas.width = window.app.view.bazar_canvas_container.width();
        render.canvas.height = window.app.view.bazar_canvas_container.height();
    }

    function startBazarCarousel() {
        //wrapping up the carousel from the DOM
        window.app.view.carousel_bazar = $('.carousel-bazar');

        //inserting html elements of products
        for (product of window.app.bazar_products) {
            var el = '<div class="item" data-id="' + product.id + '" prod-size="' + product.size + '"><img src="./assets/images/bazar/products/' + product.id + '.svg"/></div>';
            window.app.view.carousel_bazar.append(el);
        }

        //creating a listener on carousel creation
        window.app.view.carousel_bazar.on('initialized.owl.carousel translate.owl.carousel', function(e) {
            idx = e.item.index;
            $('#bazar .owl-item.big').removeClass('big');
            $('#bazar .owl-item.medium').removeClass('medium');
            $('#bazar .owl-item').eq(idx).addClass('big');
            $('#bazar .owl-item').eq(idx - 1).addClass('medium');
            $('#bazar .owl-item').eq(idx + 1).addClass('medium');
            $('#bazar .owl-item').eq(idx - 2).addClass('medium');
            $('#bazar .owl-item').eq(idx + 2).addClass('medium');
        });

        //creation of the carousel
        window.app.view.carousel_bazar.owlCarousel({
            center: true,
            items: 5,
            loop: true,
            dots: false,
            margin: 5,
            touchDrag: false,
            mouseDrag: false
        })

        $('.carousel-bazar-next').click(function() {
            window.app.view.carousel_bazar.trigger('next.owl.carousel');
        });
        $('.carousel-bazar-prev').click(function() {
            window.app.view.carousel_bazar.trigger('prev.owl.carousel');
        });

        $('#bazar .owl-item').click(function() {
            var id = $(this).find(".item").attr("data-id");
            console.log(id);
            var prodsize = $(this).find(".item").attr("prod-size");
            var radius;
            var x = 400;
            var y = 30;
            var xball;
            var yball;
            if (prodsize == "big") {
                radius = 50;
                xball = 0.5;
                yball = 0.5;
            } else {
                radius = 30;
                xball = 0.25;
                yball = 0.25;
            }

            var ball_image = Matter.Bodies.circle(x, y, radius, {
                density: 0.04,
                friction: 0.01,
                frictionAir: 0.00001,
                restitution: 0.8,
                render: {
                    strokeStyle: "#000000",
                    lineWidth: 4,
                    sprite: {
                        texture: './assets/images/bazar/products/' + id + '.svg',
                        xScale: xball,
                        yScale: yball
                    }
                }
            });

            var ball_outline = Matter.Bodies.circle(x, y, radius, {
                render: {
                    fillStyle: 'transparent',
                    strokeStyle: "#000000",
                    lineWidth: 4
                }
            });

            var ball = Matter.Body.create({
                parts: [ball_image, ball_outline]
            });

            Matter.Composite.add(engine.world, ball);

            for (item of window.app.bazar_products) {

                if (item.id == id) {
                    var newitem = item;
                    newitem.element = ball;
                    window.app.checkout.products.push(newitem);
                }
            }

        });
    }

    function startBazarPlayground() {

        //window.app.view.bazarPlayground = $('#bazar_playground');

        Render.run(render);

        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        // add bodies
        Composite.add(world, [
            // walls
            //Bodies.rectangle(200, 0, 400, 10, { isStatic: true }),//top
            Bodies.rectangle(400, 435, 400, 10, { isStatic: true }), //bottom
            Bodies.rectangle(600, 315, 10, 250, { isStatic: true }), //right
            Bodies.rectangle(200, 315, 10, 250, { isStatic: true }), //left
        ]);

        var collider1 = Bodies.rectangle(50, 435, 250, 10, {
            isStatic: true,
            isSensor: true,
            render: {
                visible: false
            }
        });

        var collider2 = Bodies.rectangle(750, 435, 250, 10, {
            isStatic: true,
            isSensor: true,
            render: {
                visible: false
            }
        });

        var collider3 = Bodies.rectangle(10, 235, 10, 350, {
            isStatic: true,
            isSensor: true,
            render: {
                visible: false
            }
        });

        var collider4 = Bodies.rectangle(790, 235, 10, 350, {
            isStatic: true,
            isSensor: true,
            render: {
                visible: false
            }
        });

        Composite.add(world, [collider1, collider2, collider3, collider4]);

        Events.on(engine, 'collisionStart', function(event) {
            var pairs = event.pairs;

            for (var i = 0, j = pairs.length; i != j; ++i) {
                var pair = pairs[i];

                if (pair.bodyA === collider1 || pair.bodyA === collider2 || pair.bodyA === collider3 || pair.bodyA === collider4) {
                    //window.app.view.carousel_bazar.hide();
                    window.app.view.bazar_game_over.show();
                } else if (pair.bodyB === collider1 || pair.bodyB === collider2 || pair.bodyB === collider3 || pair.bodyB === collider4) {
                    //window.app.view.carousel_bazar.hide();
                    window.app.view.bazar_game_over.show();
                }
            }
        });

        // add mouse control
        // var mouse = Mouse.create(render.canvas),
        //     mouseConstraint = MouseConstraint.create(engine, {
        //         mouse: mouse,
        //         constraint: {
        //             stiffness: 0.2,
        //             render: {
        //                 visible: false
        //             }
        //         }
        //     });

        // Composite.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        // render.mouse = mouse;

        // fit the render viewport to the scene
        // Render.lookAt(render, {
        //     min: { x: 0, y: 0 },
        //     max: { x: 800, y: 450 }
        // });

        // window.app.view.bazarPlayground.find("canvas").css({
        //     width: "800px",
        //     height: "600px",
        //     margin: "auto"
        // });

        // context for MatterTools.Demo
        /*return {
                engine: engine,
                runner: runner,
                render: render,
                canvas: render.canvas,
                stop: function() {
                        Matter.Render.stop(render);
                        Matter.Runner.stop(runner);
                }
        };*/

    }

    function percentX(percent) {
        return Math.round(percent / 100 * window.app.view.bazar_canvas_container.width());
    }

    function percentY(percent) {
        return Math.round(percent / 100 * window.app.view.bazar_canvas_container.height());
    }

    return _this;

}

window.app.states.bazar = State_Bazar();

//---------------------------------------------------------- END