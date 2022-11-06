
var body = document.getElementsByTagName('header')[0];
var footer = document.getElementsByTagName('footer')[0];
var menu = document.getElementsByClassName('Menu')[0];


// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.scrollY;
    if (scroll > 655) {

        footer.classList.add('whitec');
        body.classList.add('whitec')
        menu.classList.add('whitec')
        
    }
    else {
      body.classList.remove('whitec');
      footer.classList.remove('whitec');
      menu.classList.remove('whitec')
    }
    
    
}

function openNav() {
  document.querySelector("#mySidenav").classList.add("side-active");
  document.querySelector(".menu-overlay").classList.add("menu-overlay-active");
}

document.querySelector('.menu-overlay').addEventListener('click', function(){
  closeNav()
})
function closeNav() {
  document.querySelector("#mySidenav").classList.remove("side-active");
  document.querySelector(".menu-overlay").classList.remove("menu-overlay-active");
}
var text = document.getElementById("discord"); 
function discord(){
  text.classList.toggle("discord-active");


}
