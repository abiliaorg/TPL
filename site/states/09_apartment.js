function State_Apartment() {

	var _this = {};

	_this.Iam = function() {
		return "apartment";
	};

	_this.Run = function() {
		console.log("⛳ ------> Apartment state");


	};

	_this.Init = function() {

		window.app.view.apartment_nursery = $('#apartment #nursery');

		window.app.view.apartment_sidepanel = $('#sidepanel_apartment');

		window.app.view.apartment_sidepanel_itemcarousel = $('#sidepanel_apartment_itemcarousel');

		//window.app.view.apartment_sidepanel_itemcarousel_inside = $('#sidepanel_apartment_itemcarousel .owl-carousel');

		window.app.view.apartment_nursery.load('./assets/images/apartment/nursery.svg', function() {
			createListOfItems();
		});

		window.app.apartment_nursery_list = {};

		window.app.view.guide = $("#apartment #guide");
		window.app.view.guide.on("click", function() {
			/*window.app.view.apartment_sidepanel.show();
			ApartmentSidePanelCarousel_Update();
			ApartmentSidePanel_Resize();*/
		});



		$('#sidepanel_apartment_itemright').click(function() {
			window.app.view.apartment_sidepanel_itemcarousel_inside.trigger('next.owl.carousel');
		});

		$('#sidepanel_apartment_itemleft').click(function() {
			window.app.view.apartment_sidepanel_itemcarousel_inside.trigger('prev.owl.carousel');
		});
		
		$('#sidepanel_apartment .close').click(function() {
			window.app.view.apartment_sidepanel.hide();
		});
		

	}

	_this.Resize = function() {
		ApartmentSidePanel_Resize();

	}

	function ApartmentSidePanel_Resize() {

		var wrapper = $("#apartment #wrapper_row");
		var wd2 = wrapper.width();
		var wd1 = wd2 * 0.4;
		var ht1 = wrapper.height();
		var right1 = window.innerWidth-wrapper.offset().left-wrapper.width();        

		window.app.view.apartment_sidepanel.css("width", wd1 + 50 + "px");
		window.app.view.apartment_sidepanel.find(".body").css("width", wd1 + "px");
		window.app.view.apartment_sidepanel.css("right", right1 - 4 + "px");
		// window.app.view.apartment_sidepanel.css("height", ht1 + "px");

		window.app.view.apartment_sidepanel.css("height", "300px");

	}

	function ApartmentSidePanelCarousel_Update() {

		window.app.view.apartment_sidepanel_itemcarousel.empty();

		window.app.view.apartment_sidepanel_itemcarousel.html('<div class="loop owl-carousel"></div>');

		window.app.view.apartment_sidepanel_itemcarousel_inside = $('#sidepanel_apartment_itemcarousel .owl-carousel');

		for (g of window.app.apartment_nursery_list[window.app.apartment_selectedgroup]) {
			console.log(g.id);
			var el = '<div class="item" data-id="' + g.id + '" data-name="' + g.name + '">' + g.image + '</div>';
			window.app.view.apartment_sidepanel_itemcarousel_inside.append(el);
		}

		//creation of the carousel
		window.app.view.apartment_sidepanel_itemcarousel_inside.owlCarousel({
			center: true,
			items: 1,
			loop: true,
			dots: false,
			margin: 5,
			touchDrag: false,
			mouseDrag: false,
			onChanged: ApartmentCarouselChanged
		});

		ApartmentCarouselChanged();

	}

	function ApartmentCarouselChanged() {

		window.setTimeout(function(){
			var el = $("#sidepanel_apartment_itemcarousel .owl-item.active .item");
			var id= el.attr("data-id");
			var name = el.attr("data-name");

			$("#sidepanel_apartment .titletext").html(name);

			console.log(id);

			if(id!==undefined){
				showItem(id);
			}			

		},100)

	}


	function createListOfItems() {
		window.app.view.apartment_nursery_svg = window.app.view.apartment_nursery.find("svg");

		var groups = window.app.view.apartment_nursery_svg.find("g[id$='_group']");

		for (var i = 0; i < groups.length; i++) {
			var id = $(groups[i]).attr("id");
			window.app.apartment_nursery_list[id] = [];

			var groupitems = $(groups[i]).find(">g"); //only children and not granchildren

			for (var j = 0; j < groupitems.length; j++) {
				var itemid = $(groupitems[j]).attr("id");                

				var name = $(groupitems[j]).attr("data-name");
				if (name === undefined) {
					name = itemid;
				}
				var image = "<img src='./assets/images/apartment/items/" + name + ".png'/>";

				var fields = { id: itemid, image: image, name: name };
				window.app.apartment_nursery_list[id].push(fields);
			}


		}

		for (g in window.app.apartment_nursery_list) {
			var group = window.app.apartment_nursery_list[g];
			for (i in group) {
				if (i != 0) {
					window.app.view.apartment_nursery_svg.find("#" + group[i].id).hide();
				}
			}
		}


		groups.on("click",function(){

			window.app.apartment_selectedgroup = $(this).attr("id");
			window.app.apartment_itemsoftheselectedgroup = $(this).find(">g");

			console.log(window.app.apartment_selectedgroup, window.app.apartment_itemsoftheselectedgroup);

			window.app.view.apartment_sidepanel.show();

			ApartmentSidePanelCarousel_Update();
			ApartmentSidePanel_Resize();
			//to fix the first time problem I need to call these twice
			ApartmentSidePanelCarousel_Update();
			ApartmentSidePanel_Resize();
		})

	}



	return _this;


}

function showItem(itemid) {

	for (var g in window.app.apartment_nursery_list) {
		var group = window.app.apartment_nursery_list[g];
		for (var i in group) {
			if (group[i].id == itemid) {
				hideGroupItems(g);
				console.log("show element " + group[i].id);
				window.app.view.apartment_nursery_svg.find("#" + group[i].id).show();
			}
		}
	}

}


function hideGroupItems(groupindex) {
	console.log("hide all elements of " + groupindex)
	var group = window.app.apartment_nursery_list[groupindex];
	for (var gi in group) {
		window.app.view.apartment_nursery_svg.find("#" + group[gi].id).hide();
	}
}



window.app.states.apartment = State_Apartment();

//---------------------------------------------------------- END