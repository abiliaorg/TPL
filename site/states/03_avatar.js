function State_Avatar() {

    var _this = {};

    _this.Iam = function() {
        return "avatar";
    };

    _this.Init = function() {

        sidebarsResize();

        window.app.avatar_faces = [];

        window.app.view.avatar_img = $('#avatar #come_ti_chiami');

        window.app.avatar_list = {};

        window.app.view.avatar_img.load('./assets/images/avatar/avatar_everything.svg', function() {
            createListOfItems();
        });

        window.app.view.centre_carousel = $('#centre_carousel');

        window.app.view.carousel_avatar = $('.carousel-avatar');

        window.app.view.avatar_button_main = $("#avatar .button_main");

        window.app.avatar_selectedgroup = "CAPELLI_group";
        //window.app.avatar_itemsoftheselectedgroup = window.app.view.avatar_img.find("svg").find("#" + window.app.avatar_selectedgroup).find(">g");
        //window.app.avatar_itemsoftheselectedgroup = window.app.avatar_list[window.app.avatar_selectedgroup];

        console.log(window.app.avatar_list);
        //console.log(window.app.avatar_selectedgroup, window.app.avatar_itemsoftheselectedgroup);

        //fake creation of a list of avatar faces
        // for (var i = 0; i < 50; i++) {
        //     window.app.avatar_faces.push(i);
        // }

        //inserting html elements of avatar faces
        // for (face of window.app.avatar_faces) {
        //     var el = '<div class="item"><h4>' + face + '</h4></div>';
        //     window.app.view.carousel_avatar.append(el);
        // }

        // for (g of window.app.avatar_list[window.app.avatar_selectedgroup]) {
        //     console.log(g.id);
        //     var el = '<div class="item" data-id="' + g.id + '" data-name="' + g.name + '">' + g.image + '</div>';
        //     window.app.view.carousel_avatar.append(el);
        // }

        //creating a listener on carousel creation
        window.app.view.carousel_avatar.on('initialized.owl.carousel translate.owl.carousel', function(e) {
            idx = e.item.index;
            $('#avatar .owl-item.big').removeClass('big');
            $('#avatar .owl-item.medium').removeClass('medium');
            $('#avatar .owl-item').eq(idx).addClass('big');
            $('#avatar .owl-item').eq(idx - 1).addClass('medium');
            $('#avatar .owl-item').eq(idx + 1).addClass('medium');
            $('#avatar .owl-item').eq(idx - 2).addClass('medium');
            $('#avatar .owl-item').eq(idx + 2).addClass('medium');
        });

        //creation of the carousel
        window.app.view.carousel_avatar.owlCarousel({
            center: true,
            items: 5,
            loop: true,
            dots: false,
            margin: 5,
            touchDrag: false,
            mouseDrag: false
        })

        $('.carousel-avatar-next').click(function() {
            window.app.view.carousel_avatar.trigger('next.owl.carousel');
        })
        $('.carousel-avatar-prev').click(function() {
            window.app.view.carousel_avatar.trigger('prev.owl.carousel');
        })
    }

    _this.Run = function() {
        console.log("⛳ ------> Avatar state");
        sidebarsResize();
    };

    _this.Resize = function() {
        sidebarsResize();
    }


    window.app.view.button_avatar_done.on("click", function() {
        goToState("interest");
    });

    function Avatar_Carousel_Update() {

        window.app.view.centre_carousel.empty();

        window.app.view.centre_carousel.html('<div class="loop owl-carousel"></div>');

        window.app.view.centre_carousel_inside = $('#centre_carousel .owl-carousel');

        for (g of window.app.avatar_list[window.app.avatar_selectedgroup]) {
            console.log(g.id);
            var el = '<div class="item" data-id="' + g.id + '" data-name="' + g.name + '">' + g.image + '</div>';
            window.app.view.centre_carousel_inside.append(el);
        }

        window.app.view.centre_carousel_inside.on('initialized.owl.carousel translate.owl.carousel', function(e) {
            var idx = e.item.index;
            $('#avatar .owl-item.big').removeClass('big');
            $('#avatar .owl-item.medium').removeClass('medium');
            $('#avatar .owl-item').eq(idx).addClass('big');
            $('#avatar .owl-item').eq(idx - 1).addClass('medium');
            $('#avatar .owl-item').eq(idx + 1).addClass('medium');
            $('#avatar .owl-item').eq(idx - 2).addClass('medium');
            $('#avatar .owl-item').eq(idx + 2).addClass('medium');
        });

        //creation of the carousel
        window.app.view.centre_carousel_inside.owlCarousel({
            center: true,
            items: 5,
            loop: true,
            dots: false,
            margin: 5,
            touchDrag: false,
            mouseDrag: false,
            onChanged: avatarCarouselChanged
        });

        $('.carousel-avatar-next').click(function() {
            window.app.view.centre_carousel_inside.trigger('next.owl.carousel');
        })
        $('.carousel-avatar-prev').click(function() {
            window.app.view.centre_carousel_inside.trigger('prev.owl.carousel');
        })

        $(document).on("click", "#avatar .owl-item", function() {
            avatarCarouselChanged();
        });

    }

    function avatarCarouselChanged() {

        window.setTimeout(function() {
            var el = $("#centre_carousel .owl-carousel .owl-item.big.active .item");
            var id = el.attr("data-id");
            var name = el.attr("data-name");

            $("#avatar .titletext").html(name);

            console.log(id);

            if (id !== undefined) {
                showItem(id);
            }

        }, 10)

    }

    function createListOfItems() {
        window.app.view.avatar_svg = window.app.view.avatar_img.find("svg");

        var groups = window.app.view.avatar_svg.find("g[id$='_group']");

        for (var i = 0; i < groups.length; i++) {
            var id = $(groups[i]).attr("id");
            window.app.avatar_list[id] = [];

            var groupitems = $(groups[i]).find(">g"); //only children and not granchildren

            for (var j = 0; j < groupitems.length; j++) {
                var itemid = $(groupitems[j]).attr("id");

                var name = $(groupitems[j]).attr("data-name");
                if (name === undefined) {
                    name = itemid;
                }
                var image = "<img src='./assets/images/avatar/items/" + name + ".png'/>";

                var fields = { id: itemid, image: image, name: name };
                window.app.avatar_list[id].push(fields);
            }


        }

        for (g in window.app.avatar_list) {
            var group = window.app.avatar_list[g];
            for (i in group) {
                if (i != 0) {
                    window.app.view.avatar_svg.find("#" + group[i].id).hide();
                }
            }
        }

        window.app.view.avatar_button_main.on('click', function() {
            window.app.avatar_selectedgroup = $(this).attr("data-info");
            console.log(window.app.avatar_selectedgroup);
            window.app.avatar_itemsoftheselectedgroup = $(this).find(">g");
            console.log(window.app.avatar_itemsoftheselectedgroup);
            window.app.view.avatar_button_main.removeClass('selected');
            $("#avatar .button_main[data-info='" + window.app.avatar_selectedgroup + "']").addClass('selected');
            Avatar_Carousel_Update();
        });

        groups.on("click", function() {

            window.app.avatar_selectedgroup = $(this).attr("id");
            window.app.avatar_itemsoftheselectedgroup = $(this).find(">g");

            console.log(window.app.avatar_selectedgroup, window.app.avatar_itemsoftheselectedgroup);

            Avatar_Carousel_Update();
            Avatar_Carousel_Update();
        })

    }

    function sidebarsResize() {

        var left1 = $("#come_ti_chiami").offset().left;
        $(".sidebar_colour").css("left", left1 - 4 - 40 + "px");
        var ht1 = $("#come_ti_chiami").height();
        $(".sidebar_colour").css("height", ht1 + 4 + "px");

        var left2 = $("#come_ti_chiami").offset().left;
        $(".sidebar_name").css("left", left2 - 4 - 40 + "px");
        var ht2 = $("#come_ti_chiami").height();
        $(".sidebar_name").css("top", 100 + ht2 + "px");

        var width3 = $("#button_data_di_nascita").width();
        var left3 = $("#button_data_di_nascita").offset().left;
        $(".sidebar_plain").css("left", width3 + left3 + 41 + "px");
        var ht34 = $("#button_data_di_nascita").height();
        $(".sidebar_plain").css("height", ht34 + ht34 + ht34 + ht34 + 20 + "px");

    }

    function showItem(itemid) {

        for (var g in window.app.avatar_list) {
            console.log("g avatar list " + g);
            var group = window.app.avatar_list[g];
            console.log("grp " + group);
            for (var i in group) {
                if (group[i].id == itemid) {
                    console.log("grp[i] " + group[i].id);
                    console.log("itemid " + itemid);
                    hideGroupItems(g);
                    console.log("show element " + group[i].id);
                    window.app.view.avatar_svg.find("#" + group[i].id).show();
                }
            }
        }

    }


    function hideGroupItems(groupindex) {
        console.log("hide all elements of " + groupindex)
        var group = window.app.avatar_list[groupindex];
        for (var gi in group) {
            window.app.view.avatar_svg.find("#" + group[gi].id).hide();
        }
    }


    return _this;

}

window.app.states.avatar = State_Avatar();

//---------------------------------------------------------- END