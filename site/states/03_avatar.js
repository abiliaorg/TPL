function State_Avatar() {

    var _this = {};

    _this.Iam = function() {
        return "avatar";
    };

    _this.Init = function() {

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
            $('.owl-item.big').removeClass('big');
            $('.owl-item.medium').removeClass('medium');
            $('.owl-item').eq(idx).addClass('big');
            $('.owl-item').eq(idx - 1).addClass('medium');
            $('.owl-item').eq(idx + 1).addClass('medium');
            $('.owl-item').eq(idx - 2).addClass('medium');
            $('.owl-item').eq(idx + 2).addClass('medium');
        });

        //creation of the carousel
        window.app.view.carousel_avatar.owlCarousel({
            center: true,
            items: 5,
            loop: true,
            dots: false,
            margin: 5,
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
    };


    window.app.view.button_avatar_done.on("click", function() {
        goToState("interest");
    });

    return _this;

}

window.app.states.avatar = State_Avatar();

//---------------------------------------------------------- END