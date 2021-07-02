function State_Checkout() {

    var _this = {};

    _this.Iam = function() {
        return "checkout";
    };

    _this.Run = function() {
        console.log("⛳ ------> Checkout state");




    };

    _this.Init = function() {

        window.app.view.products = $("#checkout .products");
        window.app.checkout = {};
        window.app.checkout.products = [{
                id: "prod1",
                name: "Product 1",
                description: "Description for product 1",
            },
            {
                id: "prod2",
                name: "Product 2",
                description: "Description for product 2",
            },
            {
                id: "prod3",
                name: "Product 3",
                description: "Description for product 3",
            },
            {
                id: "prod4",
                name: "Product 4",
                description: "Description for product 4",
            },
            {
                id: "prod5",
                name: "Product 5",
                description: "Description for product 5",
            },
            {
                id: "prod6",
                name: "Product 6",
                description: "Description for product 6",
            },
            {
                id: "prod7",
                name: "Product 7",
                description: "Description for product 7",
            },
            {
                id: "prod8",
                name: "Product 8",
                description: "Description for product 8",
            }
        ];
        var listofproducts = window.app.checkout.products;
        var prod_string = "";
        for (i = 0; i < listofproducts.length; i++) {
            if (i % 4 == 0) {
                prod_string += '<div class="row b-b ht-75">';
                prod_string += '<div class="col-3 button_item" data-id="' + listofproducts[i].id + '">' + '<div class="item_grid"><div class="item_svg"><img src="./assets/images/checkout/' + listofproducts[i].id + '.svg" height="80" width="80"></div><div class="item_text">' + listofproducts[i].name + '</div><div class="item_description">' + listofproducts[i].description + '</div></div></div>';
            } else {
                prod_string += '<div class="col-3 b-l button_item" data-id="' + listofproducts[i].id + '">' + '<div class="item_grid"><div class="item_svg"><img src="./assets/images/checkout/' + listofproducts[i].id + '.svg" height="80" width="80"></div><div class="item_text">' + listofproducts[i].name + '</div><div class="item_description">' + listofproducts[i].description + '</div></div></div>';
            }
            if (i % 4 == 3) {
                prod_string += '</div>';
            }
        }

        window.app.view.products.html(prod_string);
    }

    _this.Resize = function() {


    }

    window.app.view.back_home = $("#checkout #back_home");
    window.app.view.back_home.on("click", function() {
        goToState("home");
    });

    window.app.view.back_to_bazar = $("#checkout #back_to_bazar");
    window.app.view.back_to_bazar.on("click", function() {
        goToState("bazar");
    });


    return _this;


}

window.app.states.checkout = State_Checkout();

//---------------------------------------------------------- END