let menu = document.getElementById("menu");

let bar = document.getElementById("menuBar");

bar.addEventListener("click", () => {
  if (menu.style.opacity == "0") {
    menu.style.opacity = "1";
  } else {
    menu.style.opacity = "0";
  }
});
