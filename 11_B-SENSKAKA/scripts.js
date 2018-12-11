// 셀렉터

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const screenFull = document.querySelector('.screen-full');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

// 함수

const togglePlay = () => {
    const method = video.paused? 'play': 'pause';
    const icon = video.paused?  '❚ ❚' : '►';
    video[method]();
    toggle.textContent = icon;
}

function skipButton() {
    const skipTime = parseFloat(this.dataset.skip);
    video.currentTime += skipTime;
}

function fillProgress() {
    const range = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${range}%`;
}

function changeRange() {
    video[this.name] = this.value;
}

function changeScreenSize(){
    document.getElementsByTagName('video')[0].webkitEnterFullScreen();
}
// 실행부

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', fillProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(v => v.addEventListener('click', skipButton));

let mousedown = false;
ranges.forEach(v => {
    v.addEventListener('click', changeRange);
    v.addEventListener('mousemove', changeRange);
    v.addEventListener('mousedown', _ => mousedown = true);
    v.addEventListener('mouseleave', _ => mousedown = false);
    }
);

screenFull.addEventListener("click", changeScreenSize)


