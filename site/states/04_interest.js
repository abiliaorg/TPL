function State_Interest() {

	var _this = {};

	_this.Iam = function() {
		return "interest";
	};

	_this.Run = function() {
		console.log("⛳ ------> Interest state");
		
		
		

	};

	window.app.view.button_interest_done.on("click", function(){
        goToState("familytree");
    });


	return _this;


}

window.app.states.interest = State_Interest();

//---------------------------------------------------------- END