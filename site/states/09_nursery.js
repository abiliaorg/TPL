function State_Nursery() {

	var _this = {};

	_this.Iam = function() {
		return "nursery";
	};

	_this.Run = function() {
		console.log("⛳ ------> Nursery state");
		
		showPigeon("Clicca gli oggetti e personalizza la stanza");

	};

	_this.Init = function() {
		
		window.app.nursery = {};

		window.app.view.nursery_nursery = $('#nursery #nursery_inside');

		window.app.view.nursery_sidepanel = $('#sidepanel_nursery');

		window.app.view.nursery_sidepanel_itemcarousel = $('#sidepanel_nursery_itemcarousel');

		//window.app.view.nursery_sidepanel_itemcarousel_inside = $('#sidepanel_nursery_itemcarousel .owl-carousel');

		window.app.view.nursery_nursery.load('./assets/images/nursery/nursery.svg', function() {
			createListOfItems();
		});

		window.app.nursery_nursery_list = {};

		window.app.view.guide = $("#nursery #guide");
		window.app.view.guide.on("click", function() {
			/*window.app.view.nursery_sidepanel.show();
            NurserySidePanelCarousel_Update();
            NurserySidePanel_Resize();*/
		});

		sidebarsResize();

		$('#sidepanel_nursery_itemright').click(function() {
			window.app.view.nursery_sidepanel_itemcarousel_inside.trigger('next.owl.carousel');
		});

		$('#sidepanel_nursery_itemleft').click(function() {
			window.app.view.nursery_sidepanel_itemcarousel_inside.trigger('prev.owl.carousel');
		});

		$('#sidepanel_nursery .close').click(function() {
			window.app.view.nursery_sidepanel.hide();
			window.app.nursery_selectedgroup=null;
		});


		$('#nursery #back_home').on("click", function() {
			window.app.view.nursery_sidepanel.hide();
			window.app.nursery_selectedgroup=null;
		});


		window.app.nursery.colors = window.app.settings.colors;

		var el="";
		for(color of window.app.nursery.colors){
			el+='<div class="sbcgrid_item" data-color="'+color+'" style="background-color:'+color+'"></div>';
		}
		$("#nursery .sidebar_colour_grid").html(el);
		
		$("#nursery .sbcgrid_item").on("click",function(){
			var color=$(this).attr("data-color");
			console.log(color);
			
			var selector = '>g:not([style*="display: none"])';
			var selecteditem = $("#"+window.app.nursery_selectedgroup).find(selector).attr("id");
			
			console.log(selecteditem);
			
			if(selecteditem!==undefined){//I click a color without having clicked an element
				$("#"+selecteditem).find("[id^='color']").css("fill",color);
			}else{//change the background color
				window.app.view.nursery_nursery.css("background-color",color);
			}
		})

	}

	_this.Resize = function() {
		NurserySidePanel_Resize();
		sidebarsResize();

	}

	function sidebarsResize() {

		var width1 = $("#wrapper_row").width();
		var left1 = $("#wrapper_row").offset().left;
		$(".sidebar_colour").css("left", width1 + left1 + 4 + "px");
		var ht1 = $("#wrapper_row").height();
		$(".sidebar_colour").css("height", ht1 / 2 + 50 + "px");

		var width3 = $("#wrapper_row").width();
		var left3 = $("#wrapper_row").offset().left;
		$(".sidebar_name").css("left", width3 + left3 + 4 + "px");
		var ht2 = $("#wrapper_row").height();
		$(".sidebar_name").css("top", 100 + ht2 / 2 + 50 + "px");

	}

	function NurserySidePanel_Resize() {

		var wrapper = $("#nursery #wrapper_row");
		var wd2 = wrapper.width();
		var wd1 = wd2 * 0.4;
		var ht1 = wrapper.height();
		var right1 = window.innerWidth - wrapper.offset().left - wrapper.width();

		window.app.view.nursery_sidepanel.css("width", wd1 + 50 + "px");
		window.app.view.nursery_sidepanel.find(".body").css("width", wd1 + "px");
		window.app.view.nursery_sidepanel.css("right", right1 - 4 + "px");
		// window.app.view.nursery_sidepanel.css("height", ht1 + "px");

		window.app.view.nursery_sidepanel.css("height", "300px");

	}

	function NurserySidePanelCarousel_Update() {

		window.app.view.nursery_sidepanel_itemcarousel.empty();

		window.app.view.nursery_sidepanel_itemcarousel.html('<div class="loop owl-carousel"></div>');

		window.app.view.nursery_sidepanel_itemcarousel_inside = $('#sidepanel_nursery_itemcarousel .owl-carousel');

		for (g of window.app.nursery_nursery_list[window.app.nursery_selectedgroup]) {
			console.log(g.id);
			var el = '<div class="item" data-id="' + g.id + '" data-name="' + g.name + '">' + g.image + '</div>';
			window.app.view.nursery_sidepanel_itemcarousel_inside.append(el);
		}

		//creation of the carousel
		window.app.view.nursery_sidepanel_itemcarousel_inside.owlCarousel({
			center: true,
			items: 1,
			loop: true,
			dots: false,
			margin: 5,
			touchDrag: false,
			mouseDrag: false,
			onChanged: NurseryCarouselChanged
		});

		NurseryCarouselChanged();

	}

	function NurseryCarouselChanged() {

		window.setTimeout(function() {
			var el = $("#sidepanel_nursery_itemcarousel .owl-item.active .item");
			var id = el.attr("data-id");
			var name = el.attr("data-name");

			$("#sidepanel_nursery .titletext").html(name);

			console.log(id);

			if (id !== undefined) {
				showItem(id);
			}

		}, 100)

	}


	function createListOfItems() {
		window.app.view.nursery_nursery_svg = window.app.view.nursery_nursery.find("svg");

		var groups = window.app.view.nursery_nursery_svg.find("g[id$='_group']");

		for (var i = 0; i < groups.length; i++) {
			var id = $(groups[i]).attr("id");
			window.app.nursery_nursery_list[id] = [];

			var groupitems = $(groups[i]).find(">g"); //only children and not granchildren

			for (var j = 0; j < groupitems.length; j++) {
				var itemid = $(groupitems[j]).attr("id");

				var name = $(groupitems[j]).attr("data-name");
				if (name === undefined) {
					name = itemid;
				}
				var image = "<img src='./assets/images/nursery/items/" + name + ".png'/>";

				var fields = { id: itemid, image: image, name: name };
				window.app.nursery_nursery_list[id].push(fields);
			}


		}

		for (g in window.app.nursery_nursery_list) {
			var group = window.app.nursery_nursery_list[g];
			for (i in group) {
				if (i != 0) {
					window.app.view.nursery_nursery_svg.find("#" + group[i].id).hide();
				}
			}
		}


		groups.on("click", function() {

			window.app.nursery_selectedgroup = $(this).attr("id");
			window.app.nursery_itemsoftheselectedgroup = $(this).find(">g");

			console.log(window.app.nursery_selectedgroup, window.app.nursery_itemsoftheselectedgroup);

			window.app.view.nursery_sidepanel.show();

			NurserySidePanelCarousel_Update();
			NurserySidePanel_Resize();
			//to fix the first time problem I need to call these twice
			NurserySidePanelCarousel_Update();
			NurserySidePanel_Resize();
		})

	}



	return _this;


}

function showItem(itemid) {

	for (var g in window.app.nursery_nursery_list) {
		var group = window.app.nursery_nursery_list[g];
		for (var i in group) {
			if (group[i].id == itemid) {
				hideGroupItems(g);
				console.log("show element " + group[i].id);
				window.app.view.nursery_nursery_svg.find("#" + group[i].id).show();
			}
		}
	}

}


function hideGroupItems(groupindex) {
	console.log("hide all elements of " + groupindex)
	var group = window.app.nursery_nursery_list[groupindex];
	for (var gi in group) {
		window.app.view.nursery_nursery_svg.find("#" + group[gi].id).hide();
	}
}



window.app.states.nursery = State_Nursery();

//---------------------------------------------------------- END