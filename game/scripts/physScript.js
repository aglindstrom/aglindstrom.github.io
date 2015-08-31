// PHYS SCRIPT//

function phys(assets)
{
	this.update = function(){ physUpdate(assets);};
}

function physUpdate(assets){
	for(var i = 5; i < assets.length-1; i++)
	{
		for(var j = i; j < assets.length-1; j++)
		{
			checkCollision(null, null);
		}
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
		player.sprite.x = canvas.width-player.sprite.width-1;
	}
	else if(player.sprite.x + player.sprite.width >= canvas.width)
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

function stageEdge(player)
{

	verticle(player);
	horizontal(player);
	internal(player, 300, 476, 233, 238);
	internal(player, 1200, 1376, 233, 238);
	internal(player, 0, 88, 100, 105);
	internal(player, 712, 888, 100, 105);
	internal(player, 712, 888, 365, 370);
}
/*
function checkCollision(sprite1, sprite2)
{
	var minX1 = sprite1.x;
	var maxX1 = sprite1.x+sprite1.width;
	var minY1 = sprite1.y;
	var maxY1 = sprite1.y+sprite1.height;

	var minX2 = sprite2.x;
	var maxX2 = sprite2.x+sprite2.width;
	var minY2 = sprite2.y;
	var maxY2 = sprite2.y+sprite2.height;

	if( minX1 < maxX2 && 
		maxX1 > minX2 &&
		minY1 < maxY2 &&
		maxY1 > minY2)
	{
		sprite1.colided();
		sprite2.colided();
	}
}
*/
function calculate(player)
{
	player.sprite.x += player.speed;
	player.sprite.y += player.jump;
}