var prevsrcnum = 0;
var elements = 0;

function hovering(tag){
	var srcnum = (Math.floor(Math.random()*4));
	var sources = ["hoversound_a.mp3", "hoversound_c.mp3", "hoversound_d.mp3", "hoversound_e.mp3", "hoversound_g.mp3"];
	
	if(srcnum == prevsrcnum)
	{
		srcnum ++;
	}
	prevsrcnum = srcnum;

	createAudio(sources[srcnum]);
}

function createAudio(source)
{
	console.log("making");
	var tag = String("audio_tag" + elements);
	var audio = document.createElement("audio");
	var parent = document.getElementById("audioWrap");
	parent.appendChild(audio);

	audio.id = tag;
	audio.src = source;
	audio.volume = .25;
	audio.addEventListener('ended',destroyAudio(tag), true);
	audio.load();
	audio.play();
	elements ++;
	elements = elements%5;
}

function destroyAudio(source)
{
	console.log("removing");
	var audio = document.getElementById(String(source));
	var parent = audio.parentNode;

	parent.removeChild(audio);
}