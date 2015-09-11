function init(targetID){
	var nav = document.getElementById(targetID);
	var children = nav.childNodes;
	var grandChildren = new Array();
	var j = 0;
	for(var i = 1; i < children.length; i+=2)
	{
		grandChildren[j] = children[i].childNodes;
		j++
	}
	console.log(children);
	console.log(grandChildren);
	layout(grandChildren);
}

function layout(elements)
{
	var k = 0;
	for(var i = 0; i < elements.length; i++)
	{
		for(var j = 1; j < elements[i].length; j+=2)
		{	
			if(k < 3)
			{
				elements[i][j].style.top = String((i*7.5)+60) + "em";
				elements[i][j].style.left = String((i*7.5)+(k*7.5)+57.5) + "em";
			}
			else if(k == 3)
			{
				elements[i][j].style.top = String((i*7.5)+60) + "em";
				elements[i][j].style.left = String((i*7.5)+80) + "em";
			}
			else if(k > 3)
			{
				elements[i][j].style.left = String((i*7.5)+80) + "em";
				elements[i][j].style.top = String(60+(i*7.5)-((k-3)*7.5)) + "em";
			}
			else 
			{
			}
			k++;
		}
		k = 0;
	}
}

function changeView(image)
{
	var img = document.getElementById("viewImg");
	img.src = image;
	img.style.width = "20em";
	img.style.height = "auto";
}

function alternate()
{
	var viewer = document.getElementById("viewer");
	var viewImg = document.getElementById("viewImg");

	if(viewer.style.width == "50em")
	{
		viewer.style.width = "70em";
		viewer.style.left = "40em";
		viewer.style.backgroundColor = "#777";
		viewImg.style.marginLeft = "20em";
	}else
	{
		viewer.style.width = "50em";
		viewer.style.left = "60em";
		viewer.style.backgroundColor = "#fff";
		viewImg.style.marginLeft = "2.5em";
	}
}