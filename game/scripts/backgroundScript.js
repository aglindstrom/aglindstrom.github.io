//BACKGROUND SCRIPT//


function background(location, width, height){

	this.sprite = new sprite(location, 0, 0, width, height);
	this.collides = false;
	
	this.update = function (){};
	this.render = function (){ backgroundRender(ctx, this.sprite);};
}

function backgroundRender(ctx, sprite)
{
	for(var j = 0; canvas.height > (j*sprite.height + sprite.y); j++)
	{
	for(var i = 0; canvas.width > (i*sprite.width + sprite.x); i++)
		{
			ctx.drawImage(sprite.image, ((i*sprite.width)+sprite.x), ((j*sprite.height) + sprite.y), sprite.width, sprite.height);
		}
	}
}