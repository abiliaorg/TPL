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

		window.app.view.apartment_nursery.load('./assets/images/apartment/nursery.svg', function(){
			createListOfItems();
		});

		window.app.apartment_nursery_list = {};

		window.app.view.guide = $("#apartment #guide");
		window.app.view.guide.on("click", function() {
			window.app.view.side_1.show();
		});

	}

	_this.Resize = function() {


	}


	function createListOfItems(){
		window.app.view.apartment_nursery_svg = window.app.view.apartment_nursery.find("svg");

		var groups = window.app.view.apartment_nursery_svg.find("g[id$='_group']");

		for(var i=0; i< groups.length; i++){
			var id = $(groups[i]).attr("id");
			window.app.apartment_nursery_list[id]=[];

			var groupitems = $(groups[i]).find(">g");//only children and not granchildren

			for(var j=0; j< groupitems.length; j++){
				var itemid = $(groupitems[j]).attr("id");				
				var image = "<svg>"+$(groupitems[j]).html()+"</svg>";
				
				var name = $(groupitems[j]).attr("data-name");		
				if(name===undefined){
					name=itemid;
				}
				
				var fields = {id: itemid, image: image, name: name };
				window.app.apartment_nursery_list[id].push(fields);
			}


		}

		for(g in window.app.apartment_nursery_list){
			var group = window.app.apartment_nursery_list[g];
			for(i in group){
				if(i!=0){
					window.app.view.apartment_nursery_svg.find("#"+group[i].id).hide();
				}
			}
		}

	}



	return _this;


}

function showItem(itemid){

	for(var g in window.app.apartment_nursery_list){
		var group = window.app.apartment_nursery_list[g];
		for(var i in group){
			if(group[i].id==itemid){
				hideGroupItems(g);
				console.log("show element "+group[i].id);
				window.app.view.apartment_nursery_svg.find("#"+group[i].id).show();				
			}
		}
	}	

}


function hideGroupItems(groupindex){
	console.log("hide all elements of "+groupindex)
	var group = window.app.apartment_nursery_list[groupindex];
	for(var gi in group){
		window.app.view.apartment_nursery_svg.find("#"+group[gi].id).hide();
	}
}



window.app.states.apartment = State_Apartment();

//---------------------------------------------------------- END