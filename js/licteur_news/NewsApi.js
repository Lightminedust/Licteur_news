const apiKey = '022efe0c66c24920b31ef4eede33738a';

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=jp&' +
          'apiKey=' + apiKey;

          fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data)
            const articles = data.articles;
        
            // Récupérer les éléments HTML correspondants
            const titleElements = document.querySelectorAll('.suggItems .tiTle');
            const descriptionElements = document.querySelectorAll('.suggItems .dataText');
            const sourceElements = document.querySelectorAll('.suggItems #souRce');
            const background = document.querySelectorAll('.sugg .suggItems')
            
// Fonction pour mettre à jour les éléments avec les données d'un article aléatoire
function updateRandomArticle() {
  // Générer un nombre aléatoire entre 0 et la longueur du tableau articles
  const randomNum = Math.floor(Math.random() * articles.length);

  const article = articles[randomNum];
  const title = article.title;
  const description = article.description;
  const source = article.source.name;
  const backgroundImage = article.urlToImage;

  // Mettre à jour les éléments HTML avec les données de l'article aléatoire
  titleElements.forEach((element) => (element.textContent = title));
  descriptionElements.forEach((element) => (element.textContent = description));
  sourceElements.forEach((element) => (element.textContent = source));
  background.forEach((element) => (element.style.backgroundImage = `url('${backgroundImage}')`));
}

// Mettre à jour les articles avec un article aléatoire toutes les 5 secondes
setInterval(updateRandomArticle, 15000);

// Exécuter la fonction updateRandomArticle une première fois pour afficher un article aléatoire au démarrage
updateRandomArticle();
          })
          .catch(function(error) {
            console.log(error);
          });

