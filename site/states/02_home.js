function State_Home() {

    var _this = {};

    _this.Iam = function() {
        return "home";
    };

    _this.Run = function() {
        console.log("⛳ ------> Home state");




    };

    _this.Init = function() {
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
            goToState("apartment");
        });

        window.app.view.explore_done.on("click", function() {
            window.app.view.popup_explore.hide();
            goToState("bazar");
        });

    }

    _this.Resize = function() {

        var width = $("#button_signup").width();
        var left = $("#button_signup").offset().left;
        $(".sidebar").css("left", width + left + 4 + "px");

    }


    return _this;


}

window.app.states.home = State_Home();

//---------------------------------------------------------- END