const $video = document.querySelector("#video")
	const $play = document.querySelector("#play")
	const $pause = document.querySelector("#pause")
	const $forward = document.querySelector("#forward")
	const $backward = document.querySelector("#backward")

	$play.addEventListener("click", handlePlay)
	function handlePlay(){
		$video.play();
		$play.hidden = true;
		$pause.hidden = false;
	}
	
	$pause.addEventListener("click", handlePause)
	function handlePause(){
		$video.pause();
		$pause.hidden = true;
		$play.hidden = false;
	}

	$forward.addEventListener("click",skip)
     function skip() {
            $video.currentTime += 10;
     }    

     $backward.addEventListener("click",back)
     function back() {
            $video.currentTime -= 10;
     } 
     

const $progress = document.querySelector("#progress")     
$video.addEventListener("loadedMetaData", handleLoaded)
$video.addEventListener("timeupdate", handleTimeUpload)

function handleLoaded(){
	$progress.max = $video.duration;
}

function handleTimeUpload(){
	$progress.value = $video.currentTime;
}


$progress.addEventListener("input", handleInput)

function handleInput(){
	$video.currentTime = $progress.value;
}
