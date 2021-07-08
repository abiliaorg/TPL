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

        window.app.view.apartment_nursery.load('./assets/images/apartment/nursery.svg', function() {
            createListOfItems();
        });

        window.app.apartment_nursery_list = {};

        window.app.view.guide = $("#apartment #guide");
        window.app.view.guide.on("click", function() {
            window.app.view.sidepanel_1.show();
            SidePanel1_Resize();
            startSide1Carousel1();
        });

    }

    _this.Resize = function() {
        SidePanel1_Resize();

    }

    function SidePanel1_Resize() {

        var wd2 = $("#apartment #wrapper_row").width();
        var wd1 = wd2 * 0.4;
        var ht1 = $("#apartment #nursery").height();
        var right1 = $("#apartment #nursery").offset().right;
        $("#sidepanel_1").css("width", wd1 + 50 + "px");
        $("#sidepanel_1 .body").css("width", wd1 + "px");
        $("#sidepanel_1").css("right", right1 + 4 + "px");
        $("#sidepanel_1").css("height", ht1 + "px");

    }

    function startSide1Carousel1() {
        //wrapping up the carousel from the DOM
        window.app.view.side1_carousel1 = $('.side1_carousel1');

        //inserting html elements of products
        for (g of window.app.apartment_nursery_list["CULLE_group"]) {
            console.log(g.id);
            var el = '<div class="item" data-id="' + g.id + '">' + g.image + '</div>';
            window.app.view.side1_carousel1.append(el);
        }

        //creating a listener on carousel creation
        window.app.view.side1_carousel1.on('initialized.owl.carousel translate.owl.carousel', function(e) {
            idx = e.item.index;
            $('#sidepanel_1 .owl-item.big').removeClass('big');
            $('#sidepanel_1 .owl-item').eq(idx).addClass('big');
        });

        //creation of the carousel
        window.app.view.side1_carousel1.owlCarousel({
            center: true,
            items: 1,
            loop: true,
            dots: false,
            margin: 5,
            touchDrag: false,
            mouseDrag: false
        })

        $('#side1_right1').click(function() {
            window.app.view.side1_carousel1.trigger('next.owl.carousel');
        });
        $('#side1_left1').click(function() {
            window.app.view.side1_carousel1.trigger('prev.owl.carousel');
        });

        $('#sidepanel_1 .owl-item').click(function() {
            var id = $(this).find(".item").attr("data-id");
            console.log(id);
            showItem(id);
        });
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
                var image = "<svg>" + $(groupitems[j]).html() + "</svg>";

                var name = $(groupitems[j]).attr("data-name");
                if (name === undefined) {
                    name = itemid;
                }

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