//AI SCRIPT//


function ai(location, x, y, width, height){

	//resources//
	this.sprite = new sprite(location, x, y, width, height);

	//variables//
	this.speed = 0;
	this.jump = 0;
	this.jumpSpeed = .25;
	this.grav = .05;
	this.accel = .04;
	this.deccel = .02;
	this.jumpTick = 1;
	this.maxspeed = 3;

	//methods//
	this.update = function(){aiUpdate(this);};
	this.render = function(){aiRender(this.sprite);};
	this.colided = function(){aiColided(this);};
}

function aiUpdate(ai){
	aiFollow(ai);
	calculate(ai);
	gravity(ai);
	stageEdge(ai);
}

function aiRender(sprite){
	ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
}
function aiStop(ai){
	if(ai.speed >= 0)
	{
		ai.speed -= ai.decel;
	}
}
function aiMove(ai){
	if(ai.speed <= ai.maxspeed)
	{
		ai.speed = ai.accel;
	}
}

function aiFollow(ai){
	if(gameTime < 30)
	{
		aiMove(ai);	
	}else if(gameTime >= 30)
	{
		aiStop(ai);
	}
}
