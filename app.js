let secondsElapsed = 0;

function countUp() {
  secondsElapsed++;

  let minutes = Math.floor(secondsElapsed / 60);
  let seconds = secondsElapsed % 60;

  let formattedTime =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  document.getElementById("timer").innerHTML = formattedTime;
}

// Start the timer with an interval of 1 second
setInterval(countUp, 1000);
