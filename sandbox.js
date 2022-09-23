const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click',e=>{
//    console.log(e)
    if(e.target.className == "fas fa-bars" ){
        navbar.classList.toggle('nav-toggle');
    }
})