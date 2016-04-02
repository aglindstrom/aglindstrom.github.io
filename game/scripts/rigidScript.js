//RIGID SCRIPT//
/*
		
*/

function rigid(location, x, y, width, height){

	this.sprite = new sprite(location, x, y, width, height);

	this.update = function (){};
	this.render = function (){rigidRender(ctx, this.sprite);};
}

function rigidRender(ctx, sprite)
{
	ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
}
