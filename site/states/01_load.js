function State_Load() {

	var _this = {};

	_this.Iam = function() {
		return "load";
	};

	_this.Run = function() {
		console.log("⛳ ------> Load state");
		
		goToState("bazar");
		

	};


	return _this;


}

window.app.states.load = State_Load();


//---------------------------------------------------------- END