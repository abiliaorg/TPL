function State_Avatar() {

    var _this = {};

    _this.Iam = function() {
        return "avatar";
    };

    _this.Run = function() {
        console.log("⛳ ------> Avatar state");

        $(".owl-carousel").owlCarousel();

        $(function() {

            $('.loop').on('initialized.owl.carousel translate.owl.carousel', function(e) {
                idx = e.item.index;
                $('.owl-item.big').removeClass('big');
                $('.owl-item.medium').removeClass('medium');
                $('.owl-item').eq(idx).addClass('big');
                $('.owl-item').eq(idx - 1).addClass('medium');
                $('.owl-item').eq(idx + 1).addClass('medium');
            });


            $('.loop').owlCarousel({
                center: true,
                items: 5,
                loop: true,
                margin: 10,
                autoplay: true,
                autoPlay: 3000
            })
        });


    };


    window.app.view.button_avatar_done.on("click", function() {
        goToState("interest");
    });

    return _this;

}

window.app.states.avatar = State_Avatar();

//---------------------------------------------------------- END