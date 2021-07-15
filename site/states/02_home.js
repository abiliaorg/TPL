function State_Home() {

    var _this = {};

    _this.Iam = function() {
        return "home";
    };

    _this.Run = function() {
        console.log("⛳ ------> Home state");

        window.setTimeout(function() {
            showPigeon("Benvenuti in The Playful Home");

            window.app.view.pigeon.animate({
                left: window.innerWidth - 170,
                top: window.innerHeight - 220,
                width: 150,
                height: 200,
            }, 1500);
        }, 1500)
    }

    _this.Init = function() {

        sidebarsResize();
        bannerResize();

    }

    _this.Resize = function() {

        sidebarsResize();
        bannerResize();

    }

    function sidebarsResize() {

        var width1 = $("#button_signup").width();
        var left1 = $("#button_signup").offset().left;
        $(".sidebar1").css("left", width1 + left1 + 4 + "px");
        var ht1 = $("#button_signup").height();
        var ht2 = $("#button_login").height();
        $(".sidebar1").css("height", ht1 + ht2 + 8 + "px");

        var left2 = $("#button_play").offset().left;
        $(".sidebar2").css("left", left2 - 4 - 40 + "px");
        var ht3 = $("#button_home").height();
        $(".sidebar2").css("top", 100 + ht3 + "px");

    }

    function bannerResize() {

        var increment = 120;
        var width = $("#home .container").width();

        $(".homepage_banner").css({
            "width": width + increment + "px",
            "left": (window.innerWidth - width) / 2 - increment / 2 + "px"
        });
        //console.log(width);
    }

    return _this;


}

window.app.states.home = State_Home();

//---------------------------------------------------------- END