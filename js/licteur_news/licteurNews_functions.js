
var toggle_menu = document.getElementById('menu_sand');

document.addEventListener('DOMContentLoaded', function(){
  var screenHome = document.getElementById('screenHome')
  screenHome.classList.add('active')
  var boxscroll = document.querySelector('.boxScroll');
  boxscroll.classList.add('active');
  var screenSearch = document.querySelector('.screenSearch')
  screenSearch.classList.add('active');
  var screenLike = document.querySelector('.like')
  screenLike.classList.add('active')
  var screenComentary = document.querySelector('.commentary')
  screenComentary.classList.remove('active')
})

toggle_menu.addEventListener('click', function toggle_swipe() {
  var menu = document.getElementById('menu');
  var head = document.getElementById("head");
  var screenHome = document.getElementById('screenHome');
  var boxscroll = document.querySelector('.boxScroll');
  var screenSearch = document.querySelector('.screenSearch')
  var screenLike = document.querySelector('.like')
  var screenComentary = document.querySelector('.commentary')
  
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    head.classList.remove('active');
    screenHome.classList.add('active');
    boxscroll.classList.add('active');
    screenSearch.classList.add('active');
    screenLike.classList.add('active')
  } else {
    menu.classList.add('active');
    head.classList.add('active');
    screenHome.classList.remove('active')
    boxscroll.classList.remove('active')
    screenSearch.classList.remove('active')
    screenLike.classList.remove("active")
  }
});


function alternateWidth() {
  const suggContainer = document.getElementById('sugg');
  const suggItems = suggContainer.querySelector('.suggItems');
  const spans = document.querySelectorAll('.dot span');
  let currentIndex = 0;
  
  function setDisplay() {
    suggItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.display = 'block';
        item.style.width = '50%';
        item.style.border = '2px solid rgba(254, 255, 255, 0.856)';
      } else {
        item.style.display = 'none';
        item.style.width = '';
        item.style.border = '';
      }
    });
  
    spans.forEach(span => span.classList.remove('activeSpan'));
    spans[currentIndex].classList.add('activeSpan');
  }

}

alternateWidth(); // Appelle la fonction pour l'exécuter

  var screenComentary = document.querySelector('.commentary');

const com = document.querySelector('.com');

com.addEventListener('click', function toggleScreen(){
  if(screenComentary.classList.contains('active')){
    screenComentary.classList.remove('active')
  }
  else{
    screenComentary.classList.add('active')
  }
})

const sett = document.querySelector('.sett');
const settingScreen = document.querySelector('.settings');
sett.addEventListener('click', function(){
  if(settingScreen.classList.contains("active")){
    settingScreen.classList.remove('active')
  }
  else{settingScreen.classList.add('active')}
})