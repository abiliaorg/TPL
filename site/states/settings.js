window.app.settings = {};

window.app.settings.currentState = "load";

window.app.view = {};

window.app.view.state = $(".state");
window.app.view.info = $(".info");

window.app.view.button_signup = $("#button_signup");
window.app.view.popup_signup = $("#popup_signup");

window.app.view.button_login = $("#button_login");
window.app.view.popup_login = $("#popup_login");

window.app.view.button_play = $("#button_play");
window.app.view.popup_play = $("#popup_play");

window.app.view.button_explore = $("#button_explore");
window.app.view.popup_explore = $("#popup_explore");

window.app.view.button_suggest = $("#button_suggest");
window.app.view.popup_suggest = $("#popup_suggest");

window.app.view.button_signup_popup = $("#button_signup_popup");

window.app.view.button_avatar_done = $("#button_avatar_done");

window.app.view.play_done = $("#play_done");
window.app.view.explore_done = $("#explore_done");
window.app.view.suggest_done = $("#suggest_done");

window.app.view.button_interest_done = $("#button_interest_done");

window.app.view.add_adult = $("#add_adult");
window.app.view.popup_adult = $("#popup_adult");

window.app.view.add_child = $("#add_child");
window.app.view.popup_child = $("#popup_child");

window.app.view.add_baby = $("#add_baby");
window.app.view.popup_baby = $("#popup_baby");

window.app.view.add_animal = $("#add_animal");
window.app.view.popup_animal = $("#popup_animal");

window.app.view.add_home = $("#add_home");
window.app.view.popup_home = $("#popup_home");

window.app.view.popup_close = $(".popup .close");

window.app.view.sidepanel_left_close = $(".sidepanel_left .close");

window.app.view.dexters_draw = $("#dexters_draw");
window.app.view.dexters_canvas = $("#dexters_canvas");

window.app.view.bazar_game_over = $("#bazar_game_over");

window.app.view.bazar_checkout = $("#bazar_checkout");

window.app.view.bazar_restart = $("#bazar_restart");

window.app.view.sidepanel_1 = $("#sidepanel_1");
window.app.view.guide = $("#nursery #guide");

function RunListeners() { //global buttons listeners here

	/*$(staticAncestors).on(eventName, dynamicChild, function() {});*/
	$(document).on("click", "[data-goto]", function() {
		var state = $(this).attr("data-goto");
		goToState(state);
	})

	window.app.view.popup_close.on("click", function() {
		$(".popup").hide();
	});

	window.app.view.sidepanel_left_close.on("click", function() {
		$(".sidepanel_left").hide();
	});

	window.app.view.bazar_checkout.on("click", function() {
		window.app.view.bazar_game_over.hide();
		goToState("checkout");
	});

	window.app.view.bazar_restart.on("click", function() {
		window.app.view.bazar_game_over.hide();
		goToState("bazar");
	});

	window.app.view.guide.on("click", function() {
		window.app.view.sidepanel_1.show();
	});


}


/*PIGEON -------------------------------------------------*/
window.app.view.pigeon = $("#pigeon");

window.app.view.pigeon.load('./assets/images/pigeon.svg', function() {
	console.log("pigeon ready");
});

function showPigeon(text=""){
	
	const lineMaxLen = 16;
	const wsLookup = 6; // Look backwards n characters for a whitespace
	const regex = new RegExp(String.raw`\s*(?:(\S{${lineMaxLen}})|([\s\S]{${lineMaxLen - wsLookup},${lineMaxLen}})(?!\S))`, 'g');
	
	
	var newtext = text.replace(regex, (_, x, y) => x ? `${x}-\n` : `${y}\n`);
	//console.log(newtext);
	
	var listoftexts = newtext.split("\n");
	
	for(line in listoftexts){
		if(line<4){
			//console.log(listoftexts[line])
			$("#pigeonbox #text"+(line*1+1)).text(listoftexts[line])
		}
	}

	window.app.view.pigeon.show();
}

function hidePigeon(){
	window.app.view.pigeon.hide();
}



// Make the DIV element draggable:

//WITH MOUSE
dragElement(window.app.view.pigeon[0]);

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; 

	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

//WITH TOUCH
window.app.view.pigeon[0].addEventListener('touchmove', function(event) {
	var touch = event.targetTouches[0];

	// Place element where the finger is
	window.app.view.pigeon[0].style.left = touch.pageX + 'px';
	window.app.view.pigeon[0].style.top = touch.pageY + 'px';
	event.preventDefault();
}, false);

//---------------------------------------------------------- END