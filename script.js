//Story
let stories = {
    "story1": {
        "resolved": false,
        "title": "The Humble Waste Collector",
        "content": "<p>You are a poop scooper, an occupation reserved for the lowest rung of society...</p>" +
            "<p>...as was your father, and the father of your father, and all of his ancestors before. Destiny is not a choice in these lands; you were born into this profession, dealt this cruel hand at birth.</p>",
        "btnTitle": "Get Shoveling",
        "btnDesc": "Gotta scoop some poop."
    },
    "story2": {
        "resolved": false,
        "title": "First Day of Eternity",
        "content": "<p>You're reminded of your fifth birthday: the scorching, unrelenting midday heat, flimsy rubber boots squelching as you trudged through the filth, the unmistakable stench of feces hanging in the air.</p>\n" +
            "<p>It was the day you were put to work with your state-issued shovel. The very same you've been holding in your weathered hands, scooping away at The Pile. Twenty years later, the once-gleaming steel now tarnished and rusted, splintered wood scraping against your thickened calluses, yet the weight feels ever-familiar. The gravity of your unchanging fate.</p>",
        "btnTitle": "Channel Your Strength",
        "btnDesc": "+2 Poop per Click"
    },
    "story3": {
        "resolved": false,
        "title": "The Weight of Injustice",
        "content": "<p>With a frustrated grunt, you plunge your shovel into a particularly odorous pile of waste, the stench assaulting your senses like a physical blow. Bile rises in your throat, but you force it down.</p>" +
            "<p>As you work, your mind churns with thoughts of injustice and indignity. How could they expect you to spend your days waist-deep in filth, while others live lives of luxury and privilege?</p>",
        "btnTitle": "Harness Your Resentment",
        "btnDesc": "+2 Poop per Click"
    },
    "story4": {
        "resolved": false,
        "title": "A Seedy Discovery",
        "content": "<p>You shovel, and shovel, and shovel, until something inside you snaps.</p>" +
            "<p>You've had enough of this life, enough of being treated like dirt beneath someone else's boot. With a roar of frustration, you hurl the scoop aside, its metal tip plunging straight down into the muck. You want out. But then your emotions settle, and you come to the same realization you've had countless times before: What other choice do you have?</p>" +
            "<p>You bend to retrieve your shovel, when suddenly, you spot something nestled amongst the rot and decay. A verdant seedling, barely a green speck, sprouting from the muck. Truly a curious sight — in your decades of toil and labor, not even the hardiest crop could survive in this wasteland of grime and sludge, and yet this plant seems healthy and unbothered.</p>",
        "btnTitle": "Cultivate the Seedling",
        "btnDesc": "You can now build Farms!"
    }
}

//Interactive Elements
const poopPanel = document.getElementById("panel-poop")
const farmPanel = document.getElementById("panel-farm")
const pasturePanel = document.getElementById("panel-pasture")
const dragonPanel = document.getElementById("panel-dragon")

const poopBtn = document.getElementById("btn-poop")
const poopPerClickCtr = document.getElementById("building-ctr-poop")
const farmBtn = document.getElementById("btn-farm")
const farmBuildingCtr = document.getElementById("building-ctr-farm")
const pastureBtn = document.getElementById("btn-pasture")
const pastureBuildingCtr = document.getElementById("building-ctr-pasture")
const dragonBtn = document.getElementById("btn-dragon")
const dragonSizeCtr = document.getElementById("building-ctr-dragon")

const cropsCounterContainer = document.getElementById("container-ctr-crops")
const meatCounterContainer = document.getElementById("container-ctr-meat")
const manaCounterContainer = document.getElementById("container-ctr-mana")

const poopResourceCounter = document.getElementById("ctr-poop")
const cropsResourceCounter = document.getElementById("ctr-crops")
const meatResourceCounter = document.getElementById("ctr-meat")
const manaResourceCounter = document.getElementById("ctr-mana")

const cropsPerSecondCounter = document.getElementById("ctr-crops-per-sec")
const meatPerSecondCounter = document.getElementById("ctr-meat-per-sec")
const manaPerSecondCounter = document.getElementById("ctr-mana-per-sec")

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
let currentStory = null
let paused = false

let poop = 0
let poopMultiplier = 1
let poopPerClick = 1
let farms = 0
let crops = 0
let cropMultiplier = 1
let cropsPerSecond = 0
let pastures = 0
let meat = 0
let meatMultiplier = 1
let meatPerSecond = 0
let dragonSize = 1
let mana = 0
let manaMultiplier = 1
let manaPerSecond = 0

let farmCost = 10;
let pastureCost = 100;
let dragonCost = 1000;

//Functions
function enableButtons() {
    poopBtn.disabled = false
    farmBtn.disabled = false
    pastureBtn.disabled = false
    dragonBtn.disabled = false
}

function disableButtons() {
    poopBtn.disabled = true
    farmBtn.disabled = true
    pastureBtn.disabled = true
    dragonBtn.disabled = true
}

function enablePurchaseButtons() {
    farmBtn.disabled = farms >= farmCost
    pastureBtn.disabled = pastures >= pastureCost
    dragonBtn.disabled = dragonSize >= dragonCost
}

function toggleButtons() {
    poopBtn.disabled = !poopBtn.disabled
    farmBtn.disabled = !farmBtn.disabled
    pastureBtn.disabled = !pastureBtn.disabled
    dragonBtn.disabled = !dragonBtn.disabled
}

function generateAlertPopup(title, content, btnTitle, btnDesc, color) {
    toggleButtons()
    paused = true
    alertTitle.innerText = title
    alertContent.innerHTML = content
    alertBtnTitle.innerText = btnTitle
    alertBtnDesc.innerText = btnDesc
    alertBtn.style.backgroundColor = color
    alertPopup.classList.remove("hidden")
}

function generateStoryPopup(targetStory, color) {
    let story = stories[targetStory]
    generateAlertPopup(story["title"], story["content"], story["btnTitle"], story["btnDesc"], color)
}

function triggerStories() {
    if (!stories["story1"]["resolved"]) {
        currentStory = "story1"
        generateStoryPopup(currentStory, poopColor)
    } else if (!stories["story2"]["resolved"] && poop >= 50) {
        currentStory = "story2"
        generateStoryPopup(currentStory, poopColor)
    } else if (!stories["story3"]["resolved"] && poop >= 200) {
        currentStory = "story3"
        generateStoryPopup(currentStory, poopColor)
    } else if (!stories["story4"]["resolved"] && poop >= 500) {
        currentStory = "story4"
        generateStoryPopup(currentStory, farmColor)
    }
}

function resolveStoryStates() {
    if (currentStory === "story1") {
        stories["story1"]["resolved"] = true
    } else if (currentStory === "story2") {
        stories["story2"]["resolved"] = true
        poopPerClick += 2
    } else if (currentStory === "story3") {
        stories["story3"]["resolved"] = true
        poopPerClick += 2
    } else if (currentStory === "story4") {
        stories["story4"]["resolved"] = true
        poopPanel.classList.remove("col-span-2")
        farmPanel.classList.remove("hidden")
        cropsCounterContainer.classList.remove("hidden")
    }
}

alertBtn.addEventListener("click", () => {
    alertPopup.classList.add("hidden")
    resolveStoryStates()
    paused = false
    toggleButtons()
})


function updateBuildingCounters() {
    poopPerClickCtr.innerText = `Poop/click: ${poopPerClick}`
    farmBuildingCtr.innerText = `Owned: ${farms}`
    pastureBuildingCtr.innerText = `Owned: ${pastures}`
    dragonSizeCtr.innerText = `Size: ${dragonSize}`
}

function updateResourceCounters() {
    poopResourceCounter.innerText = `Poop: ${poop}`
    cropsResourceCounter.innerText = `Crops: ${crops}`
    meatResourceCounter.innerText = `Meat: ${meat}`
    manaResourceCounter.innerText = `Mana: ${mana}`
}

function updateResourcePerSecondCounters() {
    cropsPerSecond = farms * cropMultiplier
    meatPerSecond = pastures * meatMultiplier
    manaPerSecond = Math.max((dragonSize - 3) * manaMultiplier, 0)

    cropsPerSecondCounter.innerText = `Crops/sec: ${cropsPerSecond}`
    meatPerSecondCounter.innerText = `Meat/sec: ${meatPerSecond}`
    manaPerSecondCounter.innerText = `Mana/sec: ${manaPerSecond}`
}

function updateCostDisplay() {
    farmBtn.innerText = `Buy for ${farmCost} Poop`
    pastureBtn.innerText = `Buy for ${pastureCost} Crops`
    dragonBtn.innerText = `Buy for ${dragonCost} Meat`
}

function comprehensiveUpdate() {
    updateBuildingCounters()
    updateResourceCounters()
    updateResourcePerSecondCounters()
    updateCostDisplay()
}

function addPerSecondResources() {
    crops += cropsPerSecond
    meat += meatPerSecond
    mana += manaPerSecond
}

// RESOURCE BUTTON EVENT LISTENERS
poopBtn.addEventListener("click", () => {
    poop += poopPerClick;
    poopResourceCounter.innerText = `Poop: ${poop}`
})

farmBtn.addEventListener("click", () => {
    if (poop >= farmCost) {
        poop -= farmCost
        farms++
        farmCost = farms ** 2
        comprehensiveUpdate()
    }
})


// SET INTERVAL LOOP
setInterval(() => {
    if (!paused) {
        // Update Counters
        triggerStories()
    }
    //Prevent Resource Counters Directly Updating after Alert Popup
    if (!paused) {
        // Update Counters
        updateBuildingCounters()
        updateResourcePerSecondCounters()
        addPerSecondResources()
        updateResourceCounters()
    }
}, 1000)
