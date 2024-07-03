const apiKeyFinance = '022efe0c66c24920b31ef4eede33738a';
const urlFinance = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=022efe0c66c24920b31ef4eede33738a`;

const finance = async () =>{
    let data = await fetch(urlFinance)
    let readyData = await data.json();
    console.log(readyData)
    let i = "";

    function ran(){
      i = Math.floor(Math.random()* 10)
    }
    ran()

    const articleFinance = readyData.articles[i]
    var title = document.querySelector('.titre');
    var src = document.querySelector('.source');
    var backGround = document.querySelector('.dataF');

    title.textContent = articleFinance.title
    src.textContent = articleFinance.source.name
    backGround.style.backgroundImage = `url(${articleFinance.urlToImage})`
}
finance()
setInterval(finance, 100000)

const noneBtn = document.querySelector('.dataNone');
const noneBtnRight = document.querySelector('.dataNone ion-icon');

function onMouse(){
  noneBtnRight.style.transform = 'scale(4)';
}