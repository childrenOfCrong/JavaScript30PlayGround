// 1. 조작할 El 찾기
const player = document.querySelector(".player");
const playButton = player.querySelector(".player__button.toggle");
const video = player.querySelector(".player__video.viewer");
const progress = player.querySelector(".progress");
const progressed = player.querySelector(".progress__filled");
const ranges = player.querySelectorAll("[type=range]");
const skipButtons = player.querySelectorAll("[data-skip]");
const fullScreenBtn = player.querySelector("[data-screen]");

// 2. 조작
console.log(progress);
function togglePlay() {
  const methods = video.paused ? "play" : "pause";
  video[methods]();
}

function updateButton() {
  const status = this.paused ? "►" : "||";
  playButton.innerText = status;
}

function handleProgressBar(e) {
  const now = (e.offsetX / video.clientWidth) * video.duration;
  video.currentTime = now;
}

function changeProgressBar() {
  const nowPercent = (video.currentTime / video.duration) * 100;
  progressed.style.flexBasis = `${nowPercent}%`;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange(e) {
  const { name, value } = this;
  video[name] = value;
}

function handleScreen() {
  video.webkitEnterFullScreen();
}
// 2.1 플레이
// 2.2 프로그레스바
// 2.3 skipButt.von
// 2.4 볼륨이랑 속도 조절 버튼
let mouseDown = false;
// 3. event
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", changeProgressBar);
playButton.addEventListener("click", togglePlay);

progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
progress.addEventListener("mouseout", () => (mouseDown = false));
progress.addEventListener("mousemove", e => mouseDown && handleProgressBar(e));
progress.addEventListener("click", handleProgressBar);

skipButtons.forEach(skipbutton => skipbutton.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRange));
fullScreenBtn.addEventListener("click", handleScreen);
