const switchTheme = document.getElementById("switch-theme");
switchTheme.addEventListener("click", () => toggleMode());

function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile .image-profile");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./src/assets/avatar-light.png");
    return;
  }

  img.setAttribute("src", "./src/assets/avatar.png");
}