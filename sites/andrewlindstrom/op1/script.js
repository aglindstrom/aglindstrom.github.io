var prevsrcnum = 0;
function hovering(tag){
	var srcnum = (Math.floor(Math.random()*4));
	if(srcnum == prevsrcnum)
	{
		srcnum ++;
	}
	prevsrcnum = srcnum;

	var sources = ["hoversound_a.mp3", "hoversound_c.mp3", "hoversound_d.mp3", "hoversound_e.mp3", "hoversound_g.mp3"];
	var audio = document.getElementById(tag);
	audio.load();
	audio.play();

	var children = audio.childNodes;
	children[1].src = sources[srcnum];

	console.log(children);
	console.log(String("playing" + tag + ", " + srcnum));
}