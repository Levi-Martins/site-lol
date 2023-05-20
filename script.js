const iconeHamburger = document.getElementById("icone-hamburguer")

const mobileMenu = document.querySelector('.mobile-menu')
const i = document.getElementsByTagName('i')

iconeHamburger.addEventListener('click',()=>{
    mobileMenu.classList.toggle('open')
    if (mobileMenu.classList.contains('open')) {
        i[0].classList.replace('fa-bars', 'fa-x');
    } else {
        i[0].classList.replace('fa-x', 'fa-bars');
    }
})