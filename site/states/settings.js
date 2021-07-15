window.app.settings = {};

window.app.settings.currentState = "load";

window.app.settings.colors = ["#33FFCC", "#99CC66", "#99CCFF", "#003366", "#006633", "#6633FF", "#9900FF", "#663300", "#CF4B5A", "#F7524A", "#FF99CC", "#FFCC00", "#FFCCCC", "#000000"];

window.app.view = {};

window.app.view.state = $(".state");
window.app.view.info = $(".info");

window.app.view.popup_close = $(".popup .close");

window.app.view.sidepanel_left_close = $(".sidepanel_left .close");

window.app.view.enter_game = $(".enter_game");

//home

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

window.app.view.play_done = $("#play_done");
window.app.view.explore_done = $("#explore_done");
window.app.view.suggest_done = $("#suggest_done");

window.app.view.button_home = $("#button_home");

//avatar

window.app.view.button_avatar_done = $("#button_avatar_done");
window.app.view.button_avatar_back = $("#button_avatar_back");

//interest

window.app.view.button_interest_done = $("#button_interest_done");
window.app.view.button_interest_back = $("#button_interest_back");

//familytree

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

//bazar

window.app.view.bazar_game_over = $("#bazar_game_over");
window.app.view.bazar_checkout = $("#bazar_checkout");
window.app.view.bazar_restart = $("#bazar_restart");

//dexters

window.app.view.dexters_draw = $("#dexters_draw");
window.app.view.dexters_canvas = $("#dexters_canvas");

//nursery

window.app.view.nursery_sidepanel = $('#sidepanel_nursery');


function RunListeners() { //global buttons listeners here

    /*$(staticAncestors).on(eventName, dynamicChild, function() {});*/
    $(document).on("click", "[data-goto]", function() {
        var state = $(this).attr("data-goto");
        goToState(state);
    });

    $(document).on("click", "[popup-goto]", function() {
        var popup = $(this).attr("popup-goto");
        window.app.view.thispopup = $("#" + popup);
        window.app.view.thispopup.show();
    });

    window.app.view.enter_game.on("click", function() {
        window.app.view.thispopup.hide();
    });

    window.app.view.popup_close.on("click", function() {
        $(".popup").hide();
    });

    window.app.view.sidepanel_left_close.on("click", function() {
        $(".sidepanel_left").hide();
    });

    //home

    window.app.view.button_home.on("click", function() {
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

    //bazar

    window.app.view.bazar_checkout.on("click", function() {
        window.app.view.bazar_game_over.hide();
        goToState("checkout");
    });

    window.app.view.bazar_restart.on("click", function() {
        window.app.view.bazar_game_over.hide();
        goToState("bazar");
    });


}


/*PIGEON -------------------------------------------------*/
window.app.view.pigeon = $("#pigeon");

window.app.view.pigeon.load('./assets/images/pigeon.svg', function() {
    console.log("pigeon ready");

    for (line = 1; line < 5; line++) {
        $("#pigeonbox #text" + line).text("")
    }

    window.app.view.pigeon.css({
        left: window.innerWidth / 2 - 150,
        top: window.innerHeight / 2 - 200,
        width: 300,
        height: 400,
    })

    showPigeon("Caricamento in corso...");


});

function showPigeon(text = "") {

    const lineMaxLen = 16;
    const wsLookup = 6; // Look backwards n characters for a whitespace
    const regex = new RegExp(String.raw `\s*(?:(\S{${lineMaxLen}})|([\s\S]{${lineMaxLen - wsLookup},${lineMaxLen}})(?!\S))`, 'g');

    var newtext = text.replace(regex, (_, x, y) => x ? `${x}-\n` : `${y}\n`);
    //console.log(newtext);

    var listoftexts = newtext.split("\n");

    for (line in listoftexts) {
        if (listoftexts[line] == "") listoftexts.splice(line, 1);
    }

    for (line = 1; line < 5; line++) {
        $("#pigeonbox #text" + line).text("")
    }

    if (listoftexts.length == 2) {
        $("#pigeonbox #text2").text(listoftexts[0])
        $("#pigeonbox #text3").text(listoftexts[1])
    } else {
        for (line in listoftexts) {
            if (line < 4) {
                //console.log(listoftexts[line])
                $("#pigeonbox #text" + (line * 1 + 1)).text(listoftexts[line])
            }
        }
    }

    window.app.view.pigeon.show();
}

function hidePigeon() {
    window.app.view.pigeon.hide();
}



// Make the DIV element draggable:

//WITH MOUSE
dragElement(window.app.view.pigeon[0]);

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

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


var loadSvg = function(url) {
    return fetch(url)
        .then(function(response) { return response.text(); })
        .then(function(raw) { return (new window.DOMParser()).parseFromString(raw, 'image/svg+xml'); });
};

var select = function(root, selector) {
    return Array.prototype.slice.call(root.querySelectorAll(selector));
};