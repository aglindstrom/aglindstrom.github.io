//RIGID SCRIPT//
/*
		
*/

function rigid(location, x, y, width, height, tiled, collides){

	this.sprite = new sprite(location, x, y, width, height);
	this.tiled = tiled;
	this.collides = collides;

	this.update = function (){};
	this.render = function (){rigidRender(ctx, this.sprite, this.tiled);};
	this.colided = function(){};
}

function rigidRender(ctx, sprite, tiled)
{

	ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
	if(tiled == true)
	{
		for(var i = 1; canvas.width > (i*sprite.width + sprite.x); i++)
		{
			ctx.drawImage(sprite.image, ((i*sprite.width)+sprite.x), sprite.y, sprite.width, sprite.height);
		}
	}else{
		for(var i = 1; i < tiled; i++)
		{
			ctx.drawImage(sprite.image, ((i*sprite.width)+sprite.x), sprite.y, sprite.width, sprite.height);
		}
	}
}