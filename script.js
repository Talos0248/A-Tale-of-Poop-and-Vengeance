const poopBtn = document.getElementById("btn-poop")
const poopCtr = document.getElementById("ctr-poop")


let poop = 0
let poopPerClick = 1
poopBtn.addEventListener("click",()=>{
    poop += poopPerClick;
    poopCtr.innerText = `Poop: ${poop}`
})


