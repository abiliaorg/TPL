function State_Avatar() {

    var _this = {};

    _this.Iam = function() {
        return "avatar";
    };

    _this.Init = function() {

        sidebarsResize();

        window.app.avatar_faces = [];

        //fake creation of a list of avatar faces
        for (var i = 0; i < 50; i++) {
            window.app.avatar_faces.push(i);
        }

        //wrapping up the avatar element from the DOM
        window.app.view.carousel_avatar = $('.carousel-avatar');

        //inserting html elements of avatar faces
        for (face of window.app.avatar_faces) {
            var el = '<div class="item"><h4>' + face + '</h4></div>';
            window.app.view.carousel_avatar.append(el);
        }

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


    return _this;

}

window.app.states.avatar = State_Avatar();

//---------------------------------------------------------- END