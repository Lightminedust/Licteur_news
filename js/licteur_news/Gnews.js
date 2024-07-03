const apikey = '022efe0c66c24920b31ef4eede33738a';
 lang = 'en'
 var searchTheme = 'war';
var url = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=' + apikey;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const articles = data.articles;

    const title = document.querySelectorAll('.suggItems_P2 .data_P2 h1');
    const sourceSrc = document.querySelectorAll('.suggItems_P2 .data_P2 .src_P2');
    const backG = document.querySelectorAll('.suggItems_P2');

    var indice = [];// Tableau pour stocker les indices déjà sélectionnés
    
    for (let i = 0; i < articles.length; i++) {
      var randomNum;
      var article;
      var titleData;
      var sourceData;
      var backGData;

    do{ randomNum = Math.floor(Math.random() * articles.length)}while(
      indice.includes(randomNum)// Vérifie si le nombre aléatoire est déjà sélectionné
    )
      indice.push(randomNum)  // Ajoute l'indice sélectionné au tableau

        article = articles[randomNum];
        titleData = article.title;
        sourceData = article.source.name;
        backGData = article.urlToImage;

        title[i].textContent = titleData
        sourceSrc[i].textContent = sourceData
        backG[i].style.backgroundImage = `url(${backGData})`

    }
  });
