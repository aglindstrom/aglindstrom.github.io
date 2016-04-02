//RIGID SCRIPT//
/*
		
*/

function rigid(location, x, y, width, height){

	this.sprite = new sprite(location, x, y, width, height);
	this.hasBeenGenerated = false;
	
	this.generate = function(assets){rigidGenerate(this, assets);};
	this.update = function (){};
	this.render = function (){rigidRender(ctx, this.sprite);};
	this.colided = function(){};
}

function rigidGenerate(t_rigid, assets)
{
	var x = 0;
	var y = 0;
	var width = 32;
	var height = 32;
	var location = "./images/enemy.png"
	
	rigidCalcXY(x,y);
	
	if(t_rigid.hasBeenGenerated == false){
		assets.push(new rigid(location, x, y, width, height));
		t_rigid.hasBeenGenerated = true;
	}
}

function rigidCalcXY(x, y)
{
	x = window.width*Math.rand();
	y = 500*Math.rand();
}

function rigidRender(ctx, sprite)
{
	ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
}
