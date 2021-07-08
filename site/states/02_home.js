function State_Home() {

    var _this = {};

    _this.Iam = function() {
        return "home";
    };

    _this.Run = function() {
        console.log("⛳ ------> Home state");




    };

    _this.Init = function() {
			
				$("#home #button_home").on("click", function() {
            goToState("apartment");
        });
			
        window.app.view.button_signup.on("click", function() {
            window.app.view.popup_signup.show();
        });

        window.app.view.button_login.on("click", function() {
            window.app.view.popup_login.show();
        });

        window.app.view.button_play.on("click", function() {
            window.app.view.popup_play.show();
        });

        window.app.view.button_explore.on("click", function() {
            window.app.view.popup_explore.show();
        });

        window.app.view.button_suggest.on("click", function() {
            window.app.view.popup_suggest.show();
        });

        window.app.view.button_signup_popup.on("click", function() {
            window.app.view.popup_signup.hide();
            goToState("avatar");
        });

        window.app.view.play_done.on("click", function() {
            window.app.view.popup_play.hide();
            goToState("dexterslab");
        });

        window.app.view.suggest_done.on("click", function() {
            window.app.view.popup_suggest.hide();
            goToState("nursery");
        });

        window.app.view.explore_done.on("click", function() {
            window.app.view.popup_explore.hide();
            goToState("bazar");
        });

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
	
		function bannerResize(){
			
			var increment = 120;			
			var width = $("#home .container").width();		
			
			$(".homepage_banner").css(
				{
					"width": width + increment + "px",
					"left": (window.innerWidth-width)/2-increment/2+"px"
				}
			);
			console.log(width);
		}

    return _this;


}

window.app.states.home = State_Home();

//---------------------------------------------------------- END