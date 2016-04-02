// PLAYER SCRIPT //
/*
	this script controls player movement.
	player "class" enables movement control.

*/

function player(location, x, y, width, height){

	//resources//
	this.sprite = new sprite(location, x, y, width, height);
	this.keyboard = keyboard;

	//variables//
	this.speed = 0;
	this.jump = 0;
	this.jumpSpeed = .25;
	this.grav = .05;
	this.accel = .05;
	this.deccel = .02;
	this.jumpTick = 1;
	this.maxspeed = 10;
	this.collides = true;

	//methods//
	this.update = function(){playerUpdate(this.keyboard, this);};
	this.render = function(){playerRender(this.sprite);};
	this.colided = function(){playerColided(this);};
}

function playerUpdate(keyboard, player)
{
	accelerate(keyboard, player);
	jump(keyboard, player);
	calculate(player);
	deccelerate(player);
	gravity(player);
	stageEdge(player);
}

function playerRender(sprite)
{
	ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
}

function playerColided(player)
{
	player.speed = 0;
	player.jump = 0;
}

function accelerate(keyboard, player)
{
	if(keyboard[65] == true && player.sprite.x >= 0)
	{
		if(player.speed>= -player.maxspeed)
		player.speed-= player.accel;
	}

	if(keyboard[68] == true && (player.sprite.x + player.sprite.width) <= canvas.width)
	{
		if(player.speed <= player.maxspeed)
		player.speed+= player.accel;
	}
}

function jump(keyboard, player)
{
	if(keyboard[32] == true && player.jump != 0)
	{
		player.jump -= player.jumpSpeed/(1/player.jumpTick);
		player.jumpTick += 1;
	}else if (keyboard[32] == false){
		player.jumpTick -= 1;
	}
}

