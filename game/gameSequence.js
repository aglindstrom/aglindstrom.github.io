//GAME SEQUENCE//

/* 
	game sequence script contains load update render and unload.
   	IT IS ADVISED THAT THESE FUNCTIONS BE THE ONLY DECLARED FUNCTIONS
   	IN GAME SEQUENCE.
*/

function loadassets(assets){

	//assets to be loaded//
	assets.push(new background("./images/testbg.png", 128, 72));
	assets.push(new player("./images/char_block.png", 32, 0, 32, 32));
	assets.push(new rigid("./images/riser_big.png", 300, 264, 22, 36, 8, true));
	assets.push(new rigid("./images/riser_big.png", 1200, 264, 22, 36, 8, true));
	assets.push(new rigid("./images/riser_big.png", 0, 132, 22, 36, 4, true));
	assets.push(new rigid("./images/riser_big.png", 712, 132, 22, 36, 8, true));
	assets.push(new rigid("./images/riser_big.png", 712, 396, 22, 36, 8, true));
	assets.push(new rigid("./images/Bridge_1.png", 0, 500, 83, 36, true, false));
	assets.push(new rigid("./images/riser_big.png", 1624, 132, 22, 36, 8, true));
	assets.push(new rigid("./images/riser_big.png", 1624, 396, 22, 36, 8, true));
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
