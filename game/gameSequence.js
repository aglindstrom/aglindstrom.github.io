//GAME SEQUENCE//

/* 
	game sequence script contains load update render and unload.
   	IT IS ADVISED THAT THESE FUNCTIONS BE THE ONLY DECLARED FUNCTIONS
   	IN GAME SEQUENCE.
*/

function loadassets(assets){

}

function update(assets){
	for(var i = 0; i < assets.length; i++)
	{
		assets[i].update();
	}
}

function render(assets){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < assets.length; i++)
	{
		assets[i].render();
	}
}

function unloadassets(assets){

}
