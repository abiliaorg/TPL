function State_DextersLab() {

	var _this = {};

	_this.Iam = function() {
		return "dexterslab";
	};

	_this.Run = function() {
		console.log("⛳ ------> DextersLab state");
		
		
		window.app.view.ps_material.show();

	};


	return _this;


}

window.app.states.dexterslab = State_DextersLab();

//---------------------------------------------------------- END