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
	this.accel = .15;
	this.deccel = .07;
	this.jumpTick = 1;
	this.maxspeed = 5;
	this.collides = true;

	//methods//
	this.update = function(){playerUpdate(this.keyboard, this);};
	this.render = function(){playerRender(ctx, this.sprite);};
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

function calculate(player)
{
	player.sprite.x += player.speed;
	player.sprite.y += player.jump;
}

function playerRender(ctx, sprite)
{
	ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
}

function accelerate(keyboard, player)
{
	if(keyboard[65] == true && player.sprite.x >= 0)
	{
		if(player.speed>= -player.maxspeed)
		player.speed-= player.accel;
	}

	if(keyboard[68] == true && (player.sprite.x + player.sprite.width) <= 800)
	{
		if(player.speed <= player.maxspeed)
		player.speed+= player.accel;
	}
}

function deccelerate(player)
{
	if(player.speed> 0){
		player.speed-= player.deccel;
	}
	else if (player.speed< 0)
	{
		player.speed+= player.deccel;
	}
	if(player.speed> -player.deccel && player.speed< player.deccel)
	{
		player.speed= 0;
	}
}

function jump(keyboard, player)
{
	if(keyboard[32] == true && player.jumpTick < 6)
	{
		player.jump -= player.jumpSpeed/(1/player.jumpTick);
		player.jumpTick += 1;
	}else if (keyboard[32] == false && player.jumpTick > 1){
		player.jumpTick -= 1;
	}
}

function gravity(player)
{
	if(player.sprite.y <= 468)
	{
		player.jump += player.grav;
	} 
	if(player.sprite.y >= 468 + player.grav)
	{
		player.jump = 0;
	}
}

function stageEdge(player)
{

	verticle(player);
	horizontal(player);
	internal(player, 300, 476, 233, 238);
	internal(player, 0, 88, 100, 105);
	internal(player, 712, 800, 100, 105);
}

function verticle(player)
{
	if(player.sprite.y > 468)
	{
		player.sprite.y = 468;
	}
	else if (player.sprite.y < 0)
	{
		player.sprite.y = 0;
	}
}

function horizontal(player)
{
	if(player.sprite.x <= 0)
	{
		player.sprite.x = 799-player.sprite.width;
	}
	else if(player.sprite.x + player.sprite.width >= 800)
	{
		player.sprite.x = 1;
	}
}

function internal(player, minX, maxX, minY, maxY)
{
	if(player.sprite.y > minY && player.sprite.y < maxY && (player.sprite.x + player.sprite.width) > minX && player.sprite.x < maxX && player.jump > 0 && keyboard[83] != true)
	{
		player.sprite.y = minY;
		player.jump = 0;
	}
}