//AI SCRIPT//


function ai(location, x, y, width, height){

	//resources//
	this.sprite = new sprite(location, x, y, width, height);
	this.keyboard = keyboard;

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
	aiMove(ai);
	calculate(ai);
	gravity(ai);
	stageEdge(ai);
}

function aiRender(sprite){
	ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
}

function aiMove(ai){
	ai.speed = 5;
}
