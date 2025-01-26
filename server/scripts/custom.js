// this file is loaded by the main html page (when renamed to custom.js)
// it is intended to allow for customizations that do not get published back to the git repo
// for example, changing the logo

// start running after all content is loaded
document.addEventListener('DOMContentLoaded', () => {
	function playMySong(url)
	{
    		var audio=document.createElement('audio');
    		audio.style.display="none";
   		audio.src=url;
    		audio.autoplay=true;
    		audio.loop = true;
    		document.body.appendChild(audio);
	}
	playMySong('/music/Rain_Dance.mp3');
});
