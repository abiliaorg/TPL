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

window.app.view.popup_close.on("click", function() {
    $(".popup").hide();
});

window.app.view.sidepanel_left_close = $(".sidepanel_left .close");

window.app.view.sidepanel_left_close.on("click", function() {
    $(".sidepanel_left").hide();
});


window.app.view.dexters_draw = $("#dexters_draw");
window.app.view.dexters_canvas = $("#dexters_canvas");

window.app.view.bazar_game_over = $("#bazar_game_over");

window.app.view.bazar_checkout = $("#bazar_checkout");
window.app.view.bazar_checkout.on("click", function() {
    window.app.view.bazar_game_over.hide();
    goToState("checkout");
});
window.app.view.bazar_restart = $("#bazar_restart");
window.app.view.bazar_restart.on("click", function() {
    window.app.view.bazar_game_over.hide();
    goToState("bazar");
});

window.app.view.side_1 = $("#side_1");
window.app.view.guide = $("#apartment #guide");
window.app.view.guide.on("click", function() {
    window.app.view.side_1.show();
});

//---------------------------------------------------------- END