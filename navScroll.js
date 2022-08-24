const nav = document.querySelector(".navbar")
const logo = document.querySelector("#logo")
const btnAssine = document.querySelector('#btn-assine')

window.addEventListener("scroll", () =>{
    
    if(window.scrollY >= 700){
        nav.classList.add('navbar_active')
        logo.style.display="block"
        btnAssine.style.display="block"
    }else{
        nav.classList.remove('navbar_active')
        logo.style.display="none"
        btnAssine.style.display="none"
    }
});