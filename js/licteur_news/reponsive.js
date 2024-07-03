

function detectScreenSize(){
    var screenSize = window.innerWidth;
    const head = document.getElementById("head")
    if(screenSize <= 575){
        head.style.backgroundColor = 'red'
    }
}
window.addEventListener('load', detectScreenSize)
window.addEventListener('resize', detectScreenSize)