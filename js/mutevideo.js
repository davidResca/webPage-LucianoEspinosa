const vid = document.querySelector('#vid');
const btnSound = document.querySelector('#btn-sound');


btnSound.addEventListener('click', vidmute)


function vidmute(){
	if(vid.muted){
		vid.muted = false;
		btnSound.src = "assets/ico/soundon.svg";
	} else {
		vid.muted = true;
		btnSound.src = "assets/ico/soundoff.svg";
	}
}
