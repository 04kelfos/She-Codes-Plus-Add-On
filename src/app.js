setInterval(function () {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector("#london-date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonCurrentTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonCurrentTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonCurrentTime.format("HH:mm:ss");

  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoCurrentTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoCurrentTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoCurrentTime.format("HH:mm:ss");
}, 1000);
