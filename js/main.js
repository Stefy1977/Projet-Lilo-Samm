// on va chercher notre bouton

const monBouton = document.getElementById("scroll");

// quand on scroll à plus de 20 px à partir du haut

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction() {
    // le 1er c'est pour Safari     et  le 2e pour les autres navigateurs
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
        monBouton.style.display = "block"
    } else {
        monBouton.style.display = "none"
    }
}

// quand l'utilisateur clique sur le bouton il va scroller vers le haut (top) de la page !

function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome...
}

///////////////////////// Menu burger ///////////////////////////////////

const $ = document.querySelector.bind(document);

const burger=document.querySelector("#burger");
// console.log('burger');

burger.addEventListener("click",showHideMenu);

function showHideMenu(){
   document.querySelector("html").classList.toggle('opened');
}


///////////////////////// Ouverture du Sous Menu burger ///////////////////////////////

const opensubmenu=document.querySelector("#openSubMenu");

if(opensubmenu.length > 0) {
    console.log('ok div opensubmenu');
}

opensubmenu.addEventListener("click",showSubMenu);

function showSubMenu(e){
    e.preventDefault();
    var truc = document.querySelector("#testSub");
    console.log('opensubmenuFunction');
   truc.classList.toggle('show');
}


///////////////////////// Overlay panier (Cart) ///////////////////////////////////

const cart=document.querySelector("#cart");

cart.addEventListener("click",showCart);

function showCart(){
    document.querySelector(".overlay").classList.toggle('show');
 }