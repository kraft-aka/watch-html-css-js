// DOM hour hands elements
const secHand = document.querySelector(".hand-sec");
const minHand = document.querySelector(".hand-min");
const hourHand = document.querySelector(".hand-hour");

// audio
const audio = document.querySelector(".sound");

// function to set the time and link elements together
const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDegrees = (seconds / 60) * 360 + 90;
  const minDegrees = (minutes / 60) * 360 + 90;
  const hourDegrees = (hours / 12) * 360 + 90;

  // connect time with corresponding DOM elements
  secHand.style.transform = `rotate(${secDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;


  // TODO: fix this
  if (minutes == "00") {
    //audio.play();
    //audio.loop = false;
    //audio.currentTime = 0;
  }
};

// finally runs the logic
setInterval(setDate, 1000);
