function State_Checkout() {

    var _this = {};

    _this.Iam = function() {
        return "checkout";
    };

    _this.Run = function() {
        console.log("⛳ ------> Checkout state");

        var listofproducts = window.app.checkout.products;

        var groupedlistofproducts = groupBy(window.app.checkout.products, "id");

        var prod_string = "";
        //i < Object.keys(groupedlistofproducts).length

        var c = 0;
        for (i in groupedlistofproducts) {

            var name = groupedlistofproducts[i].length + " x " + groupedlistofproducts[i][0].name;

            if (c % 4 == 0) {
                prod_string += '<div class="row b-b ht-75 no-gutters">';
                prod_string += '<div class="col-3 b-r button_item ht-100" data-id="' + groupedlistofproducts[i][0].id + '">' + '<div class="item_grid"><div class="item_svg"><img src="./assets/images/bazar/products/' + groupedlistofproducts[i][0].id + '.svg" height="80" width="80"></div><div class="item_text">' + name + '</div><div class="item_description">' + groupedlistofproducts[i][0].description + '</div></div></div>';
            } else {
                prod_string += '<div class="col-3 b-r button_item ht-100" data-id="' + groupedlistofproducts[i][0].id + '">' + '<div class="item_grid"><div class="item_svg"><img src="./assets/images/bazar/products/' + groupedlistofproducts[i][0].id + '.svg" height="80" width="80"></div><div class="item_text">' + name + '</div><div class="item_description">' + groupedlistofproducts[i][0].description + '</div></div></div>';
            }
            if (c % 4 == 3) {
                prod_string += '</div>';
            }

            c++;
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

var groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};

//---------------------------------------------------------- END