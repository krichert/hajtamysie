var countDownDate = new Date("Aug 31, 2024 13:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "dni<br />" + hours + "godzin<br />"
  + minutes + "minut<br />" + seconds + "sekund";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
    document.getElementById("title").innerHTML = "hajtneliśmy się!";
  }
}, 1000);