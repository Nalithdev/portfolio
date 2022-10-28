
var body = document.getElementsByTagName('header')[0];
var footer = document.getElementsByTagName('footer')[0];
var menu = document.getElementsByClassName('Menu')[0];


// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll > 750) {

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
  if (text.innerHTML === "Nalith" ){
  text.innerHTML = "Nalïth#3367" ;}
  else {
    text.innerHTML = "Nalith";
  }


}

/*
let observer = new IntersectionObserver(function (observable) {

  observable.forEach(function (observable){

  if( observable.Interactionratio > 0.95 && item == document.querySelector('.about')){
    header.classlist.add('aboutc');
    header.classlist.remove('skillsc');
    header.classlist.remove('projetc');
  }
  if( observable.Interactionratio > 0.95 && item == document.querySelector('.skills')){
    header.classlist.add('skillsc');
    header.classlist.add('projetc');
  }
  if( observable.Interactionratio > 0.95 && item == document.querySelector('.projet')){
    header.classlist.add('projetc');
  }

})
threshold = [0.9];

})
let item = document.querySelector(".about, .skills, .projet")
let about = document.querySelector(".about")
let skills = document.querySelector(".skills")
let proket = document.querySelector(".projet")
let header = document.getElementsByTagName('header')
*/

