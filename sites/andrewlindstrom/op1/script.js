var prevsrcnum = 0;
var elements = 0;

function hovering(){
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

	//logs//
	console.log(elements);
	console.log(parent);
	console.log(audio);

}

function destroyAudio(source)
{
	console.log("removing");
	var parent = source.parentNode;

	parent.removeChild(source);
	elements --;
	console.log(elements);
}

function addEvent(audio)
{
	audio.addEventListener('ended', function(){destroyAudio(audio)}, false);
}