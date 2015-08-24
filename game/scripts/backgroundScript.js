

function background(location){

	this.sprite = new sprite(location, 0, 0, 800, 600);
	this.collides = false;
	
	this.update = function (){ backgroundUpdate();}
	this.render = function (){ backgroundRender(ctx, this.sprite.image, this.sprite.x, this.sprite.y);};
}

function backgroundUpdate()
{

}

function backgroundRender(ctx, image, x, y)
{
	ctx.drawImage(image, x, y);
}