const player = document.querySelector(".player");
const video = player.querySelector("video");
const progress = player.querySelector(".progress");
const toggle = player.querySelector(".toggle");
const skip = player.querySelectorAll("[data-skip]");
const progressFilled = player.querySelector(".progress__filled");
const range = player.querySelectorAll(".player__slider");
const screen = player.querySelector(".full-screen");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function handleRange() {
  const name = this.name;
  video[name] = this.value;
  console.log(video.volume);
}

function fullScreen() {
  video.webkitEnterFullScreen();
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

range.forEach(range => range.addEventListener("click", handleRange));
skip.forEach(skip => skip.addEventListener("click", handleSkip));

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mousemove", e => mousedown && scrub(e));
progress.addEventListener("mouseup", () => (mousedown = false));

screen.addEventListener("click", fullScreen);
