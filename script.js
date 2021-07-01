// toggle the menu
document.getElementById("nav-toggle").onclick = function () {
  document.getElementById("nav-content").classList.toggle("hidden");
};

//Init tooltips
tippy(".avatar");

/* Progress bar */
//Source: https://alligator.io/js/progress-bar-javascript-css-variables/
let h = document.documentElement,
  b = document.body,
  st = "scrollTop",
  sh = "scrollHeight",
  progress = document.querySelector("#progress"),
  scroll;
let scrollpos = window.scrollY;
let header = document.getElementById("header");

document.addEventListener("scroll", function () {
  /*Refresh scroll % width*/
  scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  progress.style.setProperty("--scroll", scroll + "%");

  /*Apply classes for slide in bar*/
  scrollpos = window.scrollY;

  if (scrollpos > 100) {
    header.classList.remove("hidden");
    header.classList.remove("fadeOutUp");
    header.classList.add("slideInDown");
  } else {
    header.classList.remove("slideInDown");
    header.classList.add("fadeOutUp");
    header.classList.add("hidden");
  }
});
