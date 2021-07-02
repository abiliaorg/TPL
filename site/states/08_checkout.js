function State_Checkout() {

	var _this = {};

	_this.Iam = function() {
		return "checkout";
	};

	_this.Run = function() {
		console.log("⛳ ------> Checkout state");

		var listofproducts = window.app.checkout.products;
		var prod_string = "";
		for (i = 0; i < listofproducts.length; i++) {
			if (i % 4 == 0) {
				prod_string += '<div class="row b-b ht-75">';
				prod_string += '<div class="col-3 button_item" data-id="' + listofproducts[i].id + '">' + '<div class="item_grid"><div class="item_svg"><img src="./assets/images/bazar/products/' + listofproducts[i].id + '.svg" height="80" width="80"></div><div class="item_text">' + listofproducts[i].name + '</div><div class="item_description">' + listofproducts[i].description + '</div></div></div>';
			} else {
				prod_string += '<div class="col-3 b-l button_item" data-id="' + listofproducts[i].id + '">' + '<div class="item_grid"><div class="item_svg"><img src="./assets/images/bazar/products/' + listofproducts[i].id + '.svg" height="80" width="80"></div><div class="item_text">' + listofproducts[i].name + '</div><div class="item_description">' + listofproducts[i].description + '</div></div></div>';
			}
			if (i % 4 == 3) {
				prod_string += '</div>';
			}
		}

		window.app.view.products.html(prod_string);


	};

	_this.Init = function() {

		window.app.view.products = $("#checkout .products");
		window.app.checkout = {};
		window.app.checkout.products = [];


	}

	_this.Resize = function() {


	}



	return _this;


}

window.app.states.checkout = State_Checkout();

//---------------------------------------------------------- END