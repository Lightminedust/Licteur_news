const apiKey_search = '022efe0c66c24920b31ef4eede33738a';
var searchTheme = '';
const search = async () => {
    let server = `https://newsapi.org/v2/everything?q=${searchTheme}&apiKey=${apiKey_search}`
    let data = await fetch(server);
    let readyData = await data.json();
    const  articles = readyData.articles

    var news = document.querySelector('.news');
    const backGround = document.querySelectorAll('.news #suggItems');
    const title = document.querySelectorAll('.news .suggItems .data h1');
    const src = document.querySelectorAll('.news .suggItems .data .src');

    for(i = 0; i < articles.length; i++){
       var index = articles[i];
       var titleArticle = index.title;
       var sourceArticle = index.source.name;
       var backgroundArticle = index.urlToImage;

       title[i].textContent = titleArticle;
       src[i].textContent = sourceArticle;
       backGround[i].style.backgroundImage = `url(${backgroundArticle})`
       const theme = document.querySelector('.Theme');
       theme.textContent = searchTheme;
       searchBar.value = "";
    }       

}
search();
// Sélectionner les éléments du formulaire de recherche
const searchBar = document.getElementById('searchBar');
const form = document.querySelector('form');

// Gérer l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêcher le comportement par défaut du formulaire
  
function displayScreen(on, off){
  on.style.display = "block";
  off.style.display = 'none'
}
const screenSearch = document.querySelector('.screenSearch');
const screenHome  = document.querySelector('.boxScroll')

  // Récupérer la valeur du champ de recherche
  searchTheme = searchBar.value;
  // Appeler la fonction de recherche avec le thème de recherche saisi
  search(searchTheme = searchBar.value);
  displayScreen(screenSearch, screenHome)
});
function homeOn(){
  const screenSearch = document.querySelector('.screenSearch');
  const screenHome  = document.querySelector('.boxScroll');
  const screenLike =  document.querySelector('.like')
  const screenHome_ = document.querySelector('.screenHome');
  screenHome_.style.display = 'block'

  screenHome.style.display = "block";
  screenSearch.style.display = 'none';
  screenLike.style.display = 'none'
}
function screenLike(){
  const screenLike =  document.querySelector('.like')
  const screenHome = document.querySelector('.screenHome');
  screenHome.style.display = 'none'
  screenLike.style.display = 'block'
}
document.addEventListener('DOMContentLoaded', homeOn())

const ul = document.querySelectorAll('.suggTopic ul li a');

const elements = document.querySelectorAll('.suggTopic a');

elements.forEach(function(element) {
  const valeur = element.textContent;
  element.addEventListener('click', function(){
  const screenSearch = document.querySelector('.screenSearch');
  const screenHome  = document.querySelector('.boxScroll');

  screenSearch.style.display = "block";
  screenHome.style.display = 'none';
  search(searchTheme = valeur)
  })
});
 function containers(){
    const container = document.querySelector('.news');
    const divs = container.children;

    for(i = 0; i < divs.length; i++){
      const div = divs[i];
      div.dataset.index = i + 1
    }
 }
containers()
let string = "Votre chaîne de caractères";
let maxLength = 10;
let limitedString = string.substring(0, maxLength);

