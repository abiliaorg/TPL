function State_Bazar() {

    var _this = {};

    _this.Iam = function() {
        return "bazar";
    };

    _this.Init = function() {

        window.app.bazar_products = [];

        //fake creation of a list of products
        for (var i = 0; i < 50; i++) {
            window.app.bazar_products.push(i);
        }
			
				startBazarCarousel();			
				startBazarPlayground();
			
    }

    _this.Run = function() {
        console.log("⛳ ------> Bazar state");
    };

    return _this;

}

window.app.states.bazar = State_Bazar();


function startBazarCarousel(){
	//wrapping up the carousel from the DOM
	window.app.view.carousel_bazar = $('.carousel-bazar');

	//inserting html elements of products
	for (productindex of window.app.bazar_products) {
			var el = '<div class="item" data-id="' + productindex + '"><h4>' + productindex + '</h4></div>';
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
	});
}

function startBazarPlayground(){
	
	window.app.view.bazarPlayground = $('#bazar_playground');
	
	var Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			Composites = Matter.Composites,
			Common = Matter.Common,
			MouseConstraint = Matter.MouseConstraint,
			Mouse = Matter.Mouse,
			Composite = Matter.Composite,
			Bodies = Matter.Bodies;

	// create engine
	var engine = Engine.create(),
			world = engine.world;
	
	/*engine.world.gravity.x = 0;
	engine.world.gravity.y = 600;
	engine.world.gravity.isPoint = true;*/

	// create renderer
	var render = Render.create({
			element: window.app.view.bazarPlayground.get(0),
			engine: engine,
			options: {
					width: 800,
					height: 600,
					showAngleIndicator: true,
					showBroadphase: true,
					wireframes: false,
					background: '#FFFFFF'
			}
	});

	Render.run(render);

	// create runner
	var runner = Runner.create();
	Runner.run(runner, engine);

	// add bodies
	Composite.add(world, [
			// walls
			//Bodies.rectangle(200, 0, 400, 10, { isStatic: true }),//top
			Bodies.rectangle(400, 595, 400, 10, { isStatic: true }),//bottom
			Bodies.rectangle(600, 450, 10, 300, { isStatic: true }),//right
			Bodies.rectangle(200, 450, 10, 300, { isStatic: true })//left
	]);

	var stack = Composites.stack(20, 20, 12, 5, 0, 0, function(x, y) {
			switch (Math.round(Common.random(0, 1))) {

			case 0:
					if (Common.random() < 0.8) {
							return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50));
					} else {
							return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30));
					}
			case 1:
					return Bodies.polygon(x, y, Math.round(Common.random(1, 8)), Common.random(20, 50));

			}
	});

	Composite.add(world, stack);

	// add mouse control
	var mouse = Mouse.create(render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
					mouse: mouse,
					constraint: {
							stiffness: 0.2,
							render: {
									visible: false
							}
					}
			});

	Composite.add(world, mouseConstraint);

	// keep the mouse in sync with rendering
	render.mouse = mouse;

	// fit the render viewport to the scene
	Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
	});
	
	window.app.view.bazarPlayground.find("canvas").css({
		width: "800px",
		height: "600px",
		margin: "auto"
	});

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

//---------------------------------------------------------- END