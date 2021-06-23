function State_Home() {

	var _this = {};

	_this.Iam = function() {
		return "home";
	};

	_this.Run = function() {
		console.log("⛳ ------> Home state");
		
		
		

	};

	_this.Init = function() {
    window.app.view.button_signup.on("click", function(){
        window.app.view.popup_signup.show();
        //alert("signup");
    });

    window.app.view.button_login.on("click", function(){
        window.app.view.popup_login.show();
        //alert("login");
    });

    window.app.view.button_play.on("click", function(){
        window.app.view.popup_play.show();
        //alert("play");
    });

    window.app.view.button_explore.on("click", function(){
        window.app.view.popup_explore.show();
				goToState("bazar");
        //alert("explore");
    });

    window.app.view.button_suggest.on("click", function(){
        window.app.view.popup_suggest.show();
        //alert("suggest");
				
    });

    window.app.view.button_signup_popup.on("click", function(){
        window.app.view.popup_signup.hide();
        goToState("avatar");
        //alert("avatar state");
    });

    window.app.view.play_done.on("click", function(){
        window.app.view.popup_play.hide();
        goToState("dexterslab");
    });
		
	}
	
	_this.Resize = function() {
		
		var width = $("#button_signup").width();
		var left = $("#button_signup").offset().left;
		$(".sidebar").css("left",width+left+4+"px");
		
	}


	return _this;


}

window.app.states.home = State_Home();

//---------------------------------------------------------- END