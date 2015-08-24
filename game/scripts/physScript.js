

function checkCollisions(assets){
	for(var i = 0; i < assets.length; i++)
	{
		if(assets[i].collides == true)
		{
			for(var j = i; j < assets.length; j++)
			{
				if(assets[j].collides == true)
				{
					if(detectCollision(assets[i].sprite, assets[j].sprite))
					{
						assets[i].speed = 0;
					}
				}
			}
		}
	}
}

function detectCollision(asset1, asset2){

	var x1 = {};
	x.min = asset1.x;
	x.max = asset1.x + asset1.width;
	var y1 = {};
	y.min = asset1.y;
	y.max = asset1.y + asset1.height;

	var x2 = {};
	x.min = asset2.x;
	x.max = asset2.x + asset2.width;
	var y2 = {};
	y.min = asset2.y;
	y.max = asset2.y + asset2.height;

	if(x1.max > x2.min && x1.min < x2.max || y1.max > y2.min && y1.min < y2.max)
	{
		return true;
	}
	else
	{
		return false;
	}
}