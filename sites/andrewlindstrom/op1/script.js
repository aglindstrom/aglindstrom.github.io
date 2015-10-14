var prevsrcnum = 0;
var elements = 0;

function hovering(){
	if(document.getElementById("noSound").getAttribute("data-checked") == "true")
	{
		return;
	}
	var srcnum = (Math.floor(Math.random()*4));
	var sources = ["hoversound_g.mp3", "hoversound_c.mp3", "hoversound_d.mp3", "hoversound_e.mp3", "hoversound_a.mp3"];
	
	if(srcnum == prevsrcnum)
	{
		srcnum ++;
	}
	prevsrcnum = srcnum;

	createAudio(sources[srcnum]);
}

function createAudio(source)
{
	var tag = String("audio_tag_" + elements);
	var audio = document.createElement("audio");
	var parent = document.getElementById("audioWrap");


	//placement//
	parent.appendChild(audio);

	//data//
	audio.id = tag;
	audio.src = source;
	audio.volume = .25;

	//commands//
	audio.load();
	audio.play();

	elements ++;

	//events//
	addEvent(audio);

}

function destroyAudio(source)
{
	var parent = source.parentNode;

	parent.removeChild(source);
	elements --;
}

function addEvent(audio)
{
	audio.addEventListener('ended', function(){destroyAudio(audio)}, false);
}

function checktoggle()
{
	if(document.getElementById("noSound").getAttribute("data-checked") == "false")
	{
		document.getElementById("noSound").setAttribute("data-checked", "true");
		document.getElementById("noSound").style.background = "url('speakerOFF.svg')";
	}else{
		document.getElementById("noSound").setAttribute("data-checked", "false");
		document.getElementById("noSound").style.background = "url('speakerON.svg')";
	}
}