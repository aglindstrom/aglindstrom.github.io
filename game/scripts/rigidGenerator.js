/*

*/

function rigidGenerator(assets){
  
  this.hasGenerated = false;
  
  this.generate = function(){makeRigids(this, assets);};
}

function makeRigids(rigidGenerator, assets){
  var x = 0;
  var y = 0;
  var width = 32;
  var height = 32;
  var spriteLoc = "./images/enemy.png";
  var ammount = 5;
  
  if(!rigidGenerator.hasGenerated){
    for(var i = 0; i < ammount; i++)
    {
      assets.push(new rigid(spriteLoc, x+(width*i), y, width, height));
    }
  }
}
