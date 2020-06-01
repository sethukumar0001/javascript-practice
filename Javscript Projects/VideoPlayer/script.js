const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


play.addEventListener('click', videoStatus);
video.addEventListener('click', videoStatus);

// Play & pause video
function videoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}


video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);

// update play/pause icon
function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}


stop.addEventListener('stop', stopVideo);

//stop video

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


video.addEventListener('timeupdate', updateProgress);

//update time

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;

}


progress.addEventListener('change', setProgress);
//set progress

function setProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}