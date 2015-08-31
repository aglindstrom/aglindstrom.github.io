//GAME CORE//
/*
	game core is creates the canvas,
	initializes the keyboard.

	game core also defines and runs the
	main game loop.

	//GLOBAL VARIABLES//
	keyboard: an array holding all keycodes;
*/
var keyboard = new Array();
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
function initialize(){

	//initialize canvas//
	canvas.id = "frame";
	document.body.appendChild(canvas);

	//initialize lists//
	keyboard = initKeys();
	var assets = new Array();
	loadassets(assets);	

	//main loop//
	var main = function(){	
		update(assets);
		render(assets);
		unloadassets(assets);
	};
	setInterval(main, 1);

	//end//
}

function sprite(location, x, y, width, height)
{
	this.image = new Image();
	this.image.src = location;

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

function initKeys(){

	//keyboard keylist//
	var keylist = new Array();

	//initialize//
	for(var i = 0; i < 222; i++)
	{
		keylist.push(false);
	}
	document.body.addEventListener("keydown", function (e){ keylist[e.keyCode] = true;});
	document.body.addEventListener("keyup", function (e){ keylist[e.keyCode] = false;});

	return keylist;
}



