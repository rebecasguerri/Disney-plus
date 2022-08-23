let btnAsk = document.querySelector(".ask-box");
let btnAnswr = document.querySelector(".box-resp");
let plus = document.querySelector(".plus")


btnAsk.addEventListener("click", () =>{
    btnAnswr.classList.toggle("active")
    plus.classList.toggle("active")
    console.log("rodou")
});
