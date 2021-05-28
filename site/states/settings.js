window.app.settings = {};

window.app.settings.currentState = "load";

window.app.view = {};

window.app.view.state = $(".state");
window.app.view.info =$(".info"); 


window.app.view.button_signup =$("#button_signup"); 
window.app.view.popup_signup =$("#popup_signup"); 

window.app.view.button_login =$("#button_login"); 
window.app.view.popup_login =$("#popup_login"); 

window.app.view.button_play =$("#button_play"); 
window.app.view.popup_play =$("#popup_play"); 

window.app.view.button_explore =$("#button_explore"); 
window.app.view.popup_explore =$("#popup_explore"); 

window.app.view.button_suggest =$("#button_suggest"); 
window.app.view.popup_suggest =$("#popup_suggest"); 

window.app.view.button_signup_popup =$("#button_signup_popup"); 

window.app.view.button_avatar_done =$("#button_avatar_done"); 

window.app.view.play_done =$("#play_done"); 

window.app.view.button_interest_done =$("#button_interest_done"); 


window.app.view.add_adult =$("#add_adult"); 
window.app.view.popup_adult =$("#popup_adult");

window.app.view.add_child =$("#add_child"); 
window.app.view.popup_child =$("#popup_child");

window.app.view.add_baby =$("#add_baby"); 
window.app.view.popup_baby =$("#popup_baby");

window.app.view.add_animal =$("#add_animal"); 
window.app.view.popup_animal =$("#popup_animal");

window.app.view.add_home =$("#add_home"); 
window.app.view.popup_home =$("#popup_home");


window.app.view.ps_material =$("#ps_material"); 
window.app.view.ps_accessory =$("#ps_accessory");



window.app.dexterslab = {};
window.app.dexterslab.items = {
	
	"accessories": [
		{
			id:"sounds",
			title:"Suono Musica",			
		},
		{
			id:"wheels",
			title:"Ruote",			
		},
		{
			id:"lights",
			title:"Luci",			
		},
		{
			id:"flags",
			title:"Bandierina",			
		},
	],
	"constructivelements": [
		{
			id: "circle",
			title: "Cerchio",			
		},
		{
			id: "square",
			title: "Quadrato",			
		},
		{
			id: "triangle",
			title: "Triangolo",			
		},
		{
			id: "exagon",
			title: "Esagono",			
		},
	],
	"technologies": [],
	"materials": []	
	
}


window.app.view.button_main = $("#dexterslab .button_main");
window.app.view.panel_left = $("#dexterslab .panel_left");
window.app.view.panel_right = $("#dexterslab .panel_right");

window.app.view.button_main.on("click", function(){
	
	var info = $(this).attr("data-info");
	
	var listofitems = window.app.dexterslab.items[info];	
	
	var right_elements="";
	var left_elements="";
	
	for(i=0; i<listofitems.length; i++){
		
		if(i%2==0){//even
			left_elements+='<div class="row b-b button_item">'+listofitems[i].title+'</div>';			
		}else{
			right_elements+='<div class="row b-b button_item">'+listofitems[i].title+'</div>';		
		}
		
	}
	
	window.app.view.panel_left.html(left_elements);
	window.app.view.panel_right.html(right_elements);
	
	
});






window.app.view.popup_close =$(".popup .close");

window.app.view.popup_close.on("click", function(){
	$(".popup").hide();
});

//---------------------------------------------------------- END



