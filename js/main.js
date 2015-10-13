var navIndex = document.getElementById("index");
var main = document.getElementById("main");
var goTo1 = document.getElementById("goTo1");
var goTo2 = document.getElementById("goTo2");
var goTo3 = document.getElementById("goTo3");
var goTo4 = document.getElementById("goTo4");
var goTo5 = document.getElementById("goTo5");
var goTo6 = document.getElementById("goTo6");
var goTo7 = document.getElementById("goTo7");
var goTo8 = document.getElementById("goTo8");
var goTo9 = document.getElementById("goTo9");
var goTo10 = document.getElementById("goTo10");
var goTo11 = document.getElementById("goTo11");
var goTo12 = document.getElementById("goTo12");
var goToAbout = document.getElementById("goToAbout"); 
var menu = document.getElementById("menu");
var controls = document.getElementById("controls"); 


//event

// main.addEventListener("click", hideNavigation);
goTo1.addEventListener("click", hideNavigation);
goTo2.addEventListener("click", hideNavigation);
goTo3.addEventListener("click", hideNavigation);
goTo4.addEventListener("click", hideNavigation);
goTo5.addEventListener("click", hideNavigation);
goTo6.addEventListener("click", hideNavigation);
goTo7.addEventListener("click", hideNavigation);
goTo8.addEventListener("click", hideNavigation);
goTo9.addEventListener("click", hideNavigation);
goTo10.addEventListener("click", hideNavigation);
goTo11.addEventListener("click", hideNavigation);
goTo12.addEventListener("click", hideNavigation);
goToAbout.addEventListener("click", hideNavigation);
menu.addEventListener("click", showNavigation);

//function
function hideNavigation() {
    menu.classList.add("show");
    main.classList.add("hide");
}

function showNavigation() {
    menu.classList.remove("show");
    main.classList.remove("hide");


}

//
function hideControls() {

    if ( window.location.href = "index.html#/"){
       
        controls.classList.add("hide");
    }
}
hideControls(); 
