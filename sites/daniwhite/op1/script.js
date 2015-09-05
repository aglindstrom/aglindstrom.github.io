function layImages(){
	var imageList = ["image_1.png"];
	var target = document.getElementById("body_");
	var width = 500;
	var height = 575;
	var rotation = 0;
	for(var i = 0; i < 99; i++)
	{
		rotation = 
		var img = document.createElement("IMG");
		img.src = imageList[0];
		img.style.transform = ("rotate("+Math.random()+");");
		target.appendChild(img);

		if(i%2 == 0)
		{
			height += height;
		}
	}

}