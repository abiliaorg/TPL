function State_FamilyTree() {

	var _this = {};

	_this.Iam = function() {
		return "familytree";
	};

	_this.Run = function() {
		console.log("⛳ ------> FamilyTree state");
		
		
		

	};

	window.app.view.add_adult.on("click", function(){
        window.app.view.popup_adult.show();
    });

    window.app.view.add_child.on("click", function(){
        window.app.view.popup_child.show();
    });

    window.app.view.add_baby.on("click", function(){
        window.app.view.popup_baby.show();
    });

    window.app.view.add_animal.on("click", function(){
        window.app.view.popup_animal.show();
    });

    window.app.view.add_home.on("click", function(){
        window.app.view.popup_home.show();
    });





	return _this;


}

window.app.states.familytree = State_FamilyTree();

//---------------------------------------------------------- END