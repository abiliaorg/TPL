var app = {};
app.var = {};
app.states = {};

var loadNoCache = false;

var statesToLoad = [
	"01_load",
	"02_home",
	"03_avatar",
	"04_interest",
	"05_familytree",
	"06_dexterslab",
	"07_bazar",
	"08_checkout",
	"09_nursery",
	"10_apartment",
];

var scriptsToLoad = [
	"bootstrap.bundle.min.js",
	"owlcarousel/owl.carousel.min.js",
	"fabric.min.js",
	"matter.min.js",
	//"decomp.js",
	"mydecomp.js",
	"pathseg.js",
	//"require.js"
];

var NstatesToLoad = statesToLoad.length; //+2 for the 2 scripts of settings
var NstatesLoaded = 0;

var NstylesToLoad = statesToLoad.length;
var NstylesLoaded = 0;

var NscriptsToLoad = scriptsToLoad.length;
var NscriptsLoaded = 0;


$(document).ready(function() {
	console.log("Document ready!");
	loadScript("./states/settings.js", onMainLoaded, onStateError);
});

$(document).one("click", "body", function(){
    fullscreen();
});

$(window).on("resize", function() {
	console.log("resizing");
	if (window.app.states[window.app.settings.currentState].Resize !== undefined) {
		window.app.states[window.app.settings.currentState].Resize();
	}
});


function LoadStates_Scripts() {

	for (s in statesToLoad) {
		var c = loadNoCache ? "?" + new Date().getMilliseconds() : "";
		loadScript("./states/" + statesToLoad[s] + ".js" + c, onStateLoaded, onStateError);
	}
}

function LoadStates_Styles() {

	for (s in statesToLoad) {
		var c = loadNoCache ? "?" + new Date().getMilliseconds() : "";
		loadStyle("./assets/styles/" + statesToLoad[s] + ".css" + c, onStyleLoaded);
	}
}

function LoadFirstScript() {

	var c = loadNoCache ? "?" + new Date().getMilliseconds() : "";
	loadScript("./assets/vendors/" + scriptsToLoad[0] + c, onScriptLoaded, onScriptError);

}


function loadScript(url, onsuccess, onerror) {

	var script = document.createElement("script")
	script.type = "text/javascript";

	if (script.readyState) { //IE
		script.onreadystatechange = function() {
			if (script.readyState == "loaded" ||
					script.readyState == "complete") {
				script.onreadystatechange = null;
				onsuccess(this.src);
			}
		};
	} else { //Others
		script.onload = function() {
			onsuccess(this.src);
		};
	}

	script.onerror = function() {
		onerror();
	};

	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

function loadStyle(url, callback) {

	var link = document.createElement("link")
	link.rel = "stylesheet";

	if (link.readyState) { //IE
		link.onreadystatechange = function() {
			if (link.readyState == "loaded" ||
					link.readyState == "complete") {
				link.onreadystatechange = null;
				callback();
			}
		};
	} else { //Others
		link.onload = function() {
			callback();
		};
	}

	link.href = url;
	document.getElementsByTagName("head")[0].appendChild(link);
}

function onMainLoaded() {

	LoadFirstScript();
	//LoadAllScripts();
}

function onStateLoaded() {

	NstatesLoaded++;
	console.log("🚀 State " + NstatesLoaded + " of " + NstatesToLoad + " loaded");
	//updateLoadingBar();

	if (NstatesLoaded == NstatesToLoad) {
		Ready();
	}
}

function onScriptLoaded(src) {

	NscriptsLoaded++;
	console.log("🚀 Script " + NscriptsLoaded + " of " + NscriptsToLoad + " loaded: "+src);
	if (NscriptsLoaded < NscriptsToLoad){
		var c = loadNoCache ? "?" + new Date().getMilliseconds() : "";
		loadScript("./assets/vendors/" + scriptsToLoad[NscriptsLoaded] + c, onScriptLoaded, onScriptError);
	}
	else if (NscriptsLoaded == NscriptsToLoad) {
		LoadStates_Scripts();
		LoadStates_Styles();
	}
}

function onStateError() {
	console.log("🚩 Error while loading state");
}

function onScriptError() {
	console.log("🚩 Error while loading script");
}

function Ready() {
	console.log("🏁 Everything is loaded");

	Initialize();

	window.setTimeout(function() {
		/*goToState("avatar");
		$("#pigeon").hide();*/
		goToState("load");
	}, 1000);

}

async function fullscreen() {
  await document.body.requestFullscreen();
  await screen.orientation.lock("landscape");
}

function Initialize() {
	for (var s in window.app.states) {
		if (window.app.states[s].Init !== undefined) {
			window.app.states[s].Init();
		}
	}

	RunListeners();
}

function onStyleLoaded() {
	NstylesLoaded++;
	console.log("😎 Style " + NstylesLoaded + " of " + NstylesToLoad + " loaded");
}


function updateView() {
	window.app.view.state.hide();
	$("#" + window.app.settings.currentState).fadeIn("slow");
	window.app.view.info.text("State: " + window.app.settings.currentState);
	document.title = window.app.settings.currentState;

	$("body").attr("data-state", window.app.settings.currentState);
}

function goToState(state) {
	window.app.settings.currentState = state;
	updateView();
	window.app.states[state].Run();
	
	$(".popup").hide();

	window.setTimeout(function() {
		if(typeof(window.app.states[state].Resize)=="function"){
			window.app.states[state].Resize();
		}
		
	},1000);
	//console.log(state);
}


//---------------------------------------------------------- END