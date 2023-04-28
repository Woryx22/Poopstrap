/***** Theme change *****/
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
  } else {
    document.body.classList.toggle("dark-theme");
  }
});

/***** Side panel *****/
let panelWidth;
if (window.innerWidth > 500) {
  panelWidth = "500px"
}
else{
  panelWidth = "100%"
}
function openNav() {
  document.getElementById("mySidenav").style.width = panelWidth;
  
  document.getElementById("closeDivDark").style.width ="100%"
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("closeDivDark").style.width ="0"

}