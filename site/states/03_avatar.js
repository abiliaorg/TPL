function State_Avatar() {

	var _this = {};

	_this.Iam = function() {
		return "avatar";
	};

	_this.Run = function() {
		console.log("⛳ ------> Avatar state");
		
		
		

	};


	window.app.view.button_avatar_done.on("click", function(){
        goToState("interest");
    });

	return _this;


}

window.app.states.avatar = State_Avatar();

//---------------------------------------------------------- END