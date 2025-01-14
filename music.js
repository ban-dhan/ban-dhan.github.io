function _(id) {
    return document.getElementById(id);
}

function audioApp() {
    var audio = new Audio();
    var audio_folder = "beats/";
    var audio_ext = ".wav";
    var is_playing = false;
    var playingtrack;
    var tracks = {
        "d":"jumpin 97bpm Amin",
        "a":"murdermusik 160bpm Cminor",
        "b":"shampoo 144bpm Cminor",
        "c":"strangerthings Cminor 110bpm"
    };
    for (var track in tracks) {
        var tb = document.createElement("div")
        var pb = document.createElement("button");
		var tn = document.createElement("div");
        tb.className = "beat_interface";
		pb.className = "playbutton";
		tn.className = "bio";
        tn.innerHTML = tracks[track];
        tn.style.textAlign = "left";
        tn.style.fontSize = "1.5vw";
        tn.style.textOverflow = "ellipsis";
        tn.style.whiteSpace = "nowrap";
        tn.style.overflow = "hidden"; 
		pb.id = tracks[track];
		pb.addEventListener("click", switchTrack);
		tb.appendChild(pb);
		tb.appendChild(tn);
		trackbox.appendChild(tb);
    }
    audio.addEventListener("ended", function() {
        _(playingtrack).style.background = "url(images/play-05.png) no-repeat";
        _(playingtrack).style.backgroundSize = "contain";
		playingtrack = "";
		is_playing = false;
    });

    function switchTrack(event) {
        if (is_playing)
        {
		    if (playingtrack != event.target.id) 
            {
			    is_playing = true;
				_(playingtrack).style.background = "url(images/play-05.png) no-repeat";
                _(playingtrack).style.backgroundSize = "contain";
			    event.target.style.background = "url(images/pause-05.png) no-repeat";
                event.target.style.backgroundSize = "contain";
			    audio.src = audio_folder+event.target.id+audio_ext;
	            audio.play();
			}
            else
            {
			    audio.pause();
			    is_playing = false;
				event.target.style.background = "url(images/play-05.png) no-repeat";
                event.target.style.backgroundSize = "contain";
			}
		}
        else
        {
			is_playing = true;
			event.target.style.background = "url(images/pause-05.png) no-repeat";
            event.target.style.backgroundSize = "contain";
			if (playingtrack != event.target.id)
            {
				audio.src = audio_folder+event.target.id+audio_ext;
			}
	        audio.play();
		}
		playingtrack = event.target.id;
    }
}
window.addEventListener("load", audioApp);