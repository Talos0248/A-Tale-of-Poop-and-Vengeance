//Story
let stories = {
    "story1": {"resolved": false, "title": "The Humble Waste Collector", "content": "<p>You are a poop scooper, an occupation reserved for the lowest rung of society...</p>\n" +
            "<p>...as was your father, and the father of your father, and all of his ancestors before. Destiny is not a choice in these lands; you were born into this profession, dealt this cruel hand at birth.</p>\n",
        "btnTitle": "Get Shoveling", "btnDesc": "Gotta scoop some poop."}
}

//Interactive Elements
const poopBtn = document.getElementById("btn-poop")
const poopCtr = document.getElementById("ctr-poop")
const farmBtn = document.getElementById("btn-farm")
const farmCtr = document.getElementById("ctr-farm")
const pastureBtn = document.getElementById("btn-pasture")
const pastureCtr = document.getElementById("ctr-pasture")
const dragonBtn = document.getElementById("btn-dragon")
const dragonCtr = document.getElementById("ctr-dragon")

const alertPopup = document.getElementById("alert-popup")
const alertTitle = document.getElementById("alert-title")
const alertContent = document.getElementById("alert-content")
const alertBtn = document.getElementById("alert-btn")
const alertBtnTitle = document.getElementById("alert-btn-title")
const alertBtnDesc = document.getElementById("alert-btn-description")

const poopColor = "#8B4513"
const farmColor = "#006400"
const pastureColor = "#8B0000"
const dragonColor = "#203887"

//Game Variables
let currentStory = "story1"
let paused = false

let poop = 0
let poopPerClick = 1
let farms = 0
let cropsPerSecond = 0
let pastures = 0
let meatPerSecond = 0
let dragonSize = 0
let manaPerSecond = 0

//Functions
function toggleButtons(){
    poopBtn.disabled = !poopBtn.disabled
    farmBtn.disabled = !farmBtn.disabled
    pastureBtn.disabled = !pastureBtn.disabled
    dragonBtn.disabled = !dragonBtn.disabled
}
function generateAlertPopup(title, content, btnTitle, btnDesc, color){
    toggleButtons()
    paused = true
    alertTitle.innerText = title
    alertContent.innerHTML = content
    alertBtnTitle.innerText = btnTitle
    alertBtnDesc.innerText = btnDesc
    alertBtn.style.backgroundColor = color
    alertPopup.classList.remove("hidden")
}

function triggerStories(){
    if (!stories["story1"]["resolved"]) {
        let story = stories["story1"]
        generateAlertPopup(story["title"], story["content"], story["btnTitle"], story["btnDesc"], poopColor)
    }
}
function resolveStoryStates(){
    if (currentStory === "story1"){
        stories["story1"]["resolved"] = true
        currentStory = "story2"
    }
}

alertBtn.addEventListener("click",()=>{
    alertPopup.classList.add("hidden")
    resolveStoryStates()
    paused = false
    toggleButtons()
})

poopBtn.addEventListener("click",()=>{
    poop += poopPerClick;
    poopCtr.innerText = `Poop: ${poop}`
})

setInterval(()=>{
    if (!paused){
        triggerStories()
    }

}, 1000)
