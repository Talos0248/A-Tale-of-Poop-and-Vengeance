//Story
let stories = {
    "story1": {
        "resolved": false,
        "title": "The Humble Waste Collector",
        "content": "<p>You are a poop scooper, an occupation reserved for the lowest rung of society...</p>" +
            "<p>...as were your father, and the father of your father, and all of his ancestors before. Destiny is not a choice in these lands; you were born into this profession, dealt this cruel hand at birth.</p>",
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
            "<p>You've had enough of this life, enough of being treated like dirt beneath someone else's boot. With a roar of frustration, you hurl the scoop aside, its metal tip plunging straight down into the muck. You want out. But then your emotions settle, and you come to the same realization you've had countless times before:</p>" +
            "<p><em><b>What other choice do you have?</b></em></p>" +
            "<p>You bend to retrieve your shovel, when suddenly, you spot something nestled amongst the rot and decay. A verdant seedling, barely a green speck, sprouting from the muck. Truly a curious sight — in your decades of toil and labor, not even the hardiest crop could survive in this wasteland of grime and sludge, and yet this plant seems healthy and unbothered.</p>",
        "btnTitle": "Cultivate the Seedling",
        "btnDesc": "You can now build Farms!"
    },
    "story5": {
        "resolved": false,
        "title": "The First Harvest",
        "content": "<p>The plants thrive under your care and soon bear fruit; in no time, you've cultivated enough for a full harvest. Plump, succulent, and iridescent blue, the orbs feel heavy in your hand. You ponder the taste, contemplating if you should consider eating it. Figuring it would be a disservice to your efforts otherwise, you tentatively bite into the flesh, and immediately you are overwhelmed by an invigorating sweetness.</p>",
        "btnTitle": "Consume the Whole Fruit",
        "btnDesc": "+15 Poop per Second"
    },
    "story6": {
        "resolved": false,
        "title": "Fuzzy, Furry Nuisances",
        "content": "<p>Trudging through the expanse of your farm on one particular evening, you come across a trail of half-eaten fruit, many of them low hanging. Must be the work of Wildergraze. These lean, agile creatures used to survive on whatever scraps of vegetation they could find. They left a long time ago after turning these grounds barren, but it seems your crops have attracted their presence once more.</p>",
        "btnTitle": "Damned Wildergraze!",
        "btnDesc": "-400 Crops"
    },
    "story7": {
        "resolved": false,
        "title": "Steak!",
        "content": "<p>Another sunrise, another day of labor. You trudge through the mud, when something catches your eye: a Wildergraze, fattened with a belly full of fruit, fast asleep in an inconspicuous corner of your farm. Easy prey. Swiftly, you retrieve your crude bow and makeshift arrows — with a bit of luck, you might finally have meat on the dinner table after months of gruel and fruit. Your draw your bowstring and take aim, yet just before your fingers release, an idea crosses your mind. Back then, food was scarce, and devoting precious resources to taming wild beasts was a luxury you couldn't afford, yet now, with the abundance of the blue, magical fruit...</p>",
        "btnTitle": "Domesticate the Wildergraze",
        "btnDesc": "You can now build Pastures!"
    },
    "story8": {
        "resolved": false,
        "title": "A Helping Hand",
        "content": "<p>Crop harvests are abundant, and the Wildergraze are thriving. Word of your success spreads like wildfire through the nearby villages, whispers of admiration mingling with the morning mist. As you tend to your farm, you notice a lone figure approaching you. A villager.</p>" +
            "<p><i>Excuse me,</i> they say, followed by a humble request to work on your farm. They're tired of the meager rations the council provides, longing for something more substantial to sustain themselves and their family.</p>",
        "btnTitle": "Keep the Request in Mind",
        "btnDesc": "You can now Hire Villagers!"
    },
    "story9": {
        "resolved": false,
        "title": "Disaster has Struck",
        "content": "<p>The first hint of dawn has yet to break when you are jolted awake by the acrid scent of smoke. You rush to the window of your humble shack, to be met with chaos unfolding before your eyes. An inferno.</p>" +
            "<p>It's your farm. Your life's work, the source of your sustenance, the very thing that has given you purpose and hope. It's all going up in flames. With trembling hands you sprint outside, desperate to quench the fire, but the battle is already lost. Fields that had once teemed with life, now reduced to smoldering embers; pastures of your beloved Wildergraze are now consumed by flames. At first, you thought it was an accident — a tragic twist of fate that had reduced your hard-earned success to ash and ruin. But then you found it: a small slip of parchment on the doorstep by your feet, adorned with the official seal of the ruling council.</p>",
        "btnTitle": "\"Know Your Place\"",
        "btnDesc": "Lose Everything"
    },
    "story10": {
        "resolved": false,
        "title": "A Tiny, Ferocious Cry",
        "content": "<p>With a heavy heart, you return to the life of a poop scooper. Days pass since the devastating fire tore through your farm, each step home a painful reminder of all that had been lost as you wandered past the ashes. But, today, amidst the desolation, you catch a glimmer of movement. There, nestled within the ashes and embers, lies a small, fragile creature, its scales shimmering like molten gold in the dim light of dawn. As you approach, it raises its head defiantly, tiny jaws snapping and claws scrabbling as it tries to ward you off.</p>",
        "btnTitle": "Offer it Some Meat",
        "btnDesc": "You now Own a Baby Dragon!"
    },
    "story11": {
        "resolved": false,
        "title": "Hungry Hungry Hellfire",
        "content": "<p>You watch with a mixture of awe as the baby dragon in your care grows at an astonishing rate, but as the dragon's appetite balloons, so too does your worry. The stockpile of leftover meat you have left is quickly dwindling, and you know that you'll need a more sustainable solution to feed the ravenous creature.</p>" +
            "<p>Unwilling to abandon the newborn hatchling and seeing no other option, you make the difficult decision to restart your ventures into farming and pasturing despite knowing the risks.</p>",
        "btnTitle": `Do it for Your Dragon`,
        "btnDesc": "Farms and pastures unlocked (again)!"
    },
    "story12": {
        "resolved": false,
        "title": "Mystical Winds",
        "content": "<p>One crisp evening, as you go about your chores on the farm, you notice the dragon trailing behind you with a curious expression, having taken to following you around lately. This time, you feel a strange tingling sensation in the air — a subtle shift in the surrounding energies, with your dragon as its apparent source. You glance over at them just in time to catch them flapping their wings, the gentle breeze washing over your crops in a subtle, otherworldly light, causing fruits to ripen right before your eyes.</p>",
        "btnTitle": "Magic!",
        "btnDesc": "Your Dragon now Produces Mana!"
    },
    "story13": {
        "resolved": false,
        "title": "Unwelcomed Guests",
        "content": "<p>As the sun dips low on the horizon, a sense of unease settles over you. You've heard whispers in the nearby village — rumors of officials planning to pay you a visit with far-from-friendly intentions. Sure enough, as dusk falls, the clattering of iron boots on muck draw near, consequences of your defiance. With a thunderous crash, the soldiers kick down your door of your humble abode, armored forms silhouetted against the fading light.</p>" +
            "<p>They've come for you.</p>",
        "btnTitle": "Unleash your Dragon",
        "btnDesc": "+500 Meat"
    },
    "story14": {
        "resolved": false,
        "title": "Army on the Horizon",
        "content": "<p>With no word coming from the soldiers who have been dispatched to confront you, The ruling council grows increasingly impatient, deciding to take matters into their own hands. A larger, more formidable army looms beyond the horizon, marching in lockstep, their weapons glinting ominously under the full moon.</p>" +
            "<p>Still, they're no match for your dragon's fury.</p>",
        "btnTitle": "Fools.",
        "btnDesc": "+5000 Meat"
    },
    "story15": {
        "resolved": false,
        "title": "A Storm is Brewing",
        "content": "<p>Word of your dragon's immense size and strength spread quickly throughout the region, reaching even the ears of the ruling council. A threat, no doubt, to their authority and control. Determined to maintain their grip on power, the council convened, a plot to quash any rebellion fast in the making, schemes devised and bounties placed to eradicate both you and the dragon.</p>",
        "btnTitle": "Mount a Counteroffensive",
        "btnDesc": "Wiser to Strike First"
    },
    "story16": {
        "resolved": false,
        "title": "The Time Has Come",
        "content": "<p>Allies rallied and resources marshaled, you're prepared as can be for the battle ahead. With the first light of dawn painting the sky in hues of pink and gold, you and your assembled army set out towards the council's stronghold. </p>",
        "btnTitle": "Sound the Horns",
        "btnDesc": "The Battle has Begun"
    }
}

let upgrades = {
    "upgradeSugarRush": {
        "available": false,
        "purchased": false,
        "title": "Sugar Rush",
        "cost": "40 Crops",
        "costDictionary": {"poop": 0, "crops": 40, "meat": 0, "mana": 0},
        "description": "x2 Poop per Click",
        "outcomeDictionary": {"poopMultiplier": 2}
    },
    "upgradeFieldPloughing": {
        "available": false,
        "purchased": false,
        "title": "Field Ploughing",
        "cost": "250 Crops",
        "costDictionary": {"poop": 0, "crops": 250, "meat": 0, "mana": 0},
        "description": "+1 Crops/second per Farm, +1 Hoe-ing around",
        "outcomeDictionary": {"cropsBaseProduction": 1}
    },
    "upgradeBrownFingers": {
        "available": false,
        "purchased": false,
        "title": "Brown Fingers",
        "cost": "400 Poop",
        "costDictionary": {"poop": 400, "crops": 0, "meat": 0, "mana": 0},
        "description": "+2 Crops/second per Farm",
        "outcomeDictionary": {"cropsBaseProduction": 2}
    },
    "upgradeFibrePackedDiet": {
        "available": false,
        "purchased": false,
        "title": "Fibre-Packed Diet",
        "cost": "400 Crops",
        "costDictionary": {"poop": 0, "crops": 400, "meat": 0, "mana": 0},
        "description": "x2 Poop per Click, Smoother Bowel Movements",
        "outcomeDictionary": {"poopMultiplier": 2}
    },
    "upgradeAgriculturalWasteComposting": {
        "available": false,
        "purchased": false,
        "title": "Agricultural Waste Composting",
        "cost": "1200 Crops",
        "costDictionary": {"poop": 0, "crops": 1200, "meat": 0, "mana": 0},
        "description": "x2 Crops per Second",
        "outcomeDictionary": {"cropMultiplier": 2}
    },
    "upgradeProteinSufficiency": {
        "available": false,
        "purchased": false,
        "title": "Protein Sufficiency",
        "cost": "1000 Meat",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 1000, "mana": 0},
        "description": "x2 Poop per Click",
        "outcomeDictionary": {"poopMultiplier": 2}
    },
    "upgradeSpecializedAnimalFeed": {
        "available": false,
        "purchased": false,
        "title": "Specialized Animal Feed",
        "cost": "2000 Crops",
        "costDictionary": {"poop": 0, "crops": 2000, "meat": 0, "mana": 0},
        "description": "+1 Meat/second per Pasture",
        "outcomeDictionary": {"meatBaseProduction": 1}
    },
    "upgradeBalancedDiet": {
        "available": false,
        "purchased": false,
        "title": "Balanced Diet",
        "cost": "500 Meat, 1500 Crops",
        "costDictionary": {"poop": 0, "crops": 1500, "meat": 500, "mana": 0},
        "description": "x2 Poop per Click",
        "outcomeDictionary": {"poopMultiplier": 2}
    },
    "upgradeSelectiveBreeding": {
        "available": false,
        "purchased": false,
        "title": "Selective Breeding",
        "cost": "4000 Crops",
        "costDictionary": {"poop": 0, "crops": 4000, "meat": 0, "mana": 0},
        "description": "x2 Meat per Pasture",
        "outcomeDictionary": {"meatMultiplier": 2}
    },
    "upgradeWildergrazeManure": {
        "available": false,
        "purchased": false,
        "title": "Wildergraze Manure",
        "cost": "250 Meat",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 250, "mana": 0},
        "description": "x2 Crops per Farm",
        "outcomeDictionary": {"cropsBaseProduction": 2}
    },
    "upgradeNutritionResearch": {
        "available": false,
        "purchased": false,
        "title": "Nutrition Research",
        "cost": "15000 Crops, 1500 Meat",
        "costDictionary": {"poop": 0, "crops": 15000, "meat": 1500, "mana": 0},
        "description": "x2 Meat per Pasture",
        "outcomeDictionary": {"meatMultiplier": 2}
    },
    "upgradeHireFarmhands1": {
        "available": false,
        "purchased": false,
        "title": "Hire a Few Farmhands",
        "cost": "10000 Crops, 1000 Meat",
        "costDictionary": {"poop": 0, "crops": 10000, "meat": 1000, "mana": 0},
        "description": "x2 Farm and Pasture Production",
        "outcomeDictionary": {"cropMultiplier": 2, "meatMultiplier": 2}
    },
    "upgradeHireFarmhands2": {
        "available": false,
        "purchased": false,
        "title": "Hire More Farmhands",
        "cost": "25000 Crops, 2500 Meat",
        "costDictionary": {"poop": 0, "crops": 25000, "meat": 2500, "mana": 0},
        "description": "x3 Farm and Pasture Production",
        "outcomeDictionary": {"cropMultiplier": 3, "meatMultiplier": 3}
    },
    "upgradeHireFarmhands3": {
        "available": false,
        "purchased": false,
        "title": "Hire a Lot More Farmhands",
        "cost": "100000 Crops, 10000 Meat",
        "costDictionary": {"poop": 0, "crops": 50000, "meat": 5000, "mana": 0},
        "description": "x4 Farm and Pasture Production",
        "outcomeDictionary": {"cropMultiplier": 4, "meatMultiplier": 4}
    },
    "upgradeMuscleMemory": {
        "available": false,
        "purchased": false,
        "title": "Muscle Memory",
        "cost": "Is There Nothing Left...?",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 0, "mana": 0},
        "description": "x10 Poop per Click",
        "outcomeDictionary": {"poopMultiplier": 10}
    },
    "upgradeTelekinesis": {
        "available": false,
        "purchased": false,
        "title": "Telekinesis",
        "cost": "200 Mana",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 0, "mana": 200},
        "description": "x4 Poop per Click",
    },
    "upgradeManaFueledGrowth": {
        "available": false,
        "purchased": false,
        "title": "Mana Fueled Growth",
        "cost": "500 Mana",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 0, "mana": 500},
        "description": "x4 Crops Production",
        "outcomeDictionary": {"cropMultiplier": 4}
    },
    "upgradeManaFacilitatedHerding": {
        "available": false,
        "purchased": false,
        "title": "Mana Facilitated Herding",
        "cost": "1000 Mana",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 0, "mana": 1000},
        "description": "x4 Meat/second",
        "outcomeDictionary": {"meatMultiplier": 4}
    },
    "upgradeBoneFertilizer": {
        "available": false,
        "purchased": false,
        "title": "Bone Fertilizer",
        "cost": "Bones",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 0, "mana": 0},
        "description": "x4 Crops Production",
        "outcomeDictionary": {"cropMultiplier": 4}
    },
    "upgradeProteinFortifiedFeed": {
        "available": false,
        "purchased": false,
        "title": "Protein-Fortified Feed",
        "cost": "Flesh",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 0, "mana": 0},
        "description": "x4 Meat Production",
        "outcomeDictionary": {"meatMultiplier": 4}
    },
    "upgradeSoulmancy": {
        "available": false,
        "purchased": false,
        "title": "Soulmancy",
        "cost": "2000 Mana",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 0, "mana": 2000},
        "description": "x10 Meat Production",
        "outcomeDictionary": {"meatMultiplier": 10}
    },
    "upgradeCorpseComposting": {
        "available": false,
        "purchased": false,
        "title": "Corpse Composting",
        "cost": "More Flesh",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 0, "mana": 0},
        "description": "x10 Crops Production",
        "outcomeDictionary": {"cropMultiplier": 10}
    },
    "upgradeDrakeEmberArmor": {
        "available": false,
        "purchased": false,
        "title": "Drake-ember Armor",
        "cost": "10000 Mana",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 0, "mana": 10000},
        "description": "A Gleaming Symbol of Draconic Might",
        "outcomeDictionary": {}
    },
    "upgradeMercenaryConscription": {
        "available": false,
        "purchased": false,
        "title": "Mercenary Conscription",
        "cost": "20000 Meat",
        "costDictionary": {"poop": 0, "crops": 0, "meat": 20000, "mana": 0},
        "description": "Rally Seasoned Fighters from Distant Lands",
        "outcomeDictionary": {}
    },
    "upgradeStockedGranaries": {
        "available": false,
        "purchased": false,
        "title": "Stocked Granaries",
        "cost": "100000 Crops",
        "costDictionary": {"poop": 0, "crops": 100000, "meat": 0, "mana": 0},
        "description": "Sustenance for the Impending Conflict",
        "outcomeDictionary": {}
    }
}

//Interactive Elements
const poopPanel = document.getElementById("panel-poop")
const farmPanel = document.getElementById("panel-farm")
const pasturePanel = document.getElementById("panel-pasture")
const dragonPanel = document.getElementById("panel-dragon")

const farmDescription = document.getElementById("description-farm")

const poopBtn = document.getElementById("btn-poop")
const poopPerClickCtr = document.getElementById("building-ctr-poop")
const farmBtn = document.getElementById("btn-farm")
const farmBuildingCtr = document.getElementById("building-ctr-farm")
const pastureBtn = document.getElementById("btn-pasture")
const pastureBuildingCtr = document.getElementById("building-ctr-pasture")
const dragonBtn = document.getElementById("btn-dragon")
const dragonSizeCtr = document.getElementById("building-ctr-dragon")
const dragonDescription = document.getElementById("resource-description-dragon")
const dragonIcon = document.getElementById("resource-icon-dragon")

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

const upgradesContainer = document.getElementById("container-upgrades")

const poopColor = "#8B4513"
const farmColor = "#006400"
const pastureColor = "#8B0000"
const dragonColor = "#203887"
const dangerColor = "#EE4B2B"

//Game Variables
let currentStory = null
let paused = false

let poop = 0
let poopMultiplier = 1
let poopPerClick = 1

let farms = 0
let crops = 0
let cropsBaseProduction = 1
let cropMultiplier = 1
let cropsPerSecond = 0

let pastures = 0
let meat = 0
let meatBaseProduction = 1
let meatMultiplier = 1
let meatPerSecond = 0

let dragonSize = 1
let mana = 0
let manaBaseProduction = 1
let manaMultiplier = 1
let manaPerSecond = 0

let farmCost = 10;
let pastureCost = 100;
let dragonCost = 1;

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

// ALERT POPUP HANDLING

function generateStoryPopup(targetStory, color = poopColor) {
    let story = stories[targetStory]
    generateAlertPopup(story["title"], story["content"], story["btnTitle"], story["btnDesc"], color)
}

function triggerStories() {
    if (!stories["story1"]["resolved"]) {
        currentStory = "story1"
        generateStoryPopup(currentStory, poopColor)
    } else if (!stories["story2"]["resolved"] && stories["story1"]["resolved"] && poop >= 50) {
        currentStory = "story2"
        generateStoryPopup(currentStory, poopColor)
    } else if (!stories["story3"]["resolved"] && stories["story2"]["resolved"] && poop >= 200) {
        currentStory = "story3"
        generateStoryPopup(currentStory, poopColor)
    } else if (!stories["story4"]["resolved"] && stories["story3"]["resolved"] && poop >= 500) {
        currentStory = "story4"
        generateStoryPopup(currentStory, farmColor)
    } else if (!stories["story5"]["resolved"] && stories["story4"]["resolved"] && crops >= 200) {
        currentStory = "story5"
        generateStoryPopup(currentStory, farmColor)
    } else if (!stories["story6"]["resolved"] && stories["story5"]["resolved"] && crops >= 800) {
        currentStory = "story6"
        generateStoryPopup(currentStory, pastureColor)
    } else if (!stories["story7"]["resolved"] && stories["story6"]["resolved"] && crops >= 1000) {
        currentStory = "story7"
        generateStoryPopup(currentStory, pastureColor)
    } else if (!stories["story8"]["resolved"] && stories["story7"]["resolved"] && crops >= 8000 && meat >= 1000) {
        currentStory = "story8"
        generateStoryPopup(currentStory, pastureColor)
    } else if (!stories["story9"]["resolved"] && stories["story8"]["resolved"] && crops >= 15000 && meat >= 2000) {
        currentStory = "story9"
        generateStoryPopup(currentStory, dangerColor)
    } else if (!stories["story10"]["resolved"] && stories["story9"]["resolved"] && poop >= 500) {
        currentStory = "story10"
        generateStoryPopup(currentStory, dragonColor)
    } else if (!stories["story11"]["resolved"] && stories["story10"]["resolved"] && dragonSize >= 3) {
        currentStory = "story11"
        generateStoryPopup(currentStory, dragonColor)
    } else if (!stories["story12"]["resolved"] && stories["story11"]["resolved"] && dragonSize >= 10) {
        currentStory = "story12"
        generateStoryPopup(currentStory, dragonColor)
    } else if (!stories["story13"]["resolved"] && stories["story12"]["resolved"] && dragonSize >= 12) {
        currentStory = "story13"
        generateStoryPopup(currentStory, dangerColor)
    } else if (!stories["story14"]["resolved"] && stories["story13"]["resolved"] && dragonSize >= 15) {
        currentStory = "story14"
        generateStoryPopup(currentStory, dangerColor)
    } else if (!stories["story15"]["resolved"] && stories["story14"]["resolved"] && dragonSize >= 20) {
        currentStory = "story15"
        generateStoryPopup(currentStory, dangerColor)
    } else if (!stories["story16"]["resolved"] && stories["story15"]["resolved"] && upgrades["upgradeDrakeEmberArmor"]["purchased"] && upgrades["upgradeMercenaryConscription"]["purchased"] && upgrades["upgradeStockedGranaries"]["purchased"]) {
        currentStory = "story16"
        generateStoryPopup(currentStory, dangerColor)
    }
}

function resolveStoryStates() {
    if (currentStory === "story1") {
        stories["story1"]["resolved"] = true
    } else if (currentStory === "story2") {
        stories["story2"]["resolved"] = true
        poopPerClick += 2
        comprehensiveUpdate()
    } else if (currentStory === "story3") {
        stories["story3"]["resolved"] = true
        poopPerClick += 2
    } else if (currentStory === "story4") {
        stories["story4"]["resolved"] = true
        poopPanel.classList.remove("col-span-2")
        farmPanel.classList.remove("hidden")
        cropsCounterContainer.classList.remove("hidden")
        displayUpgrade("upgradeSugarRush")
        displayUpgrade("upgradeFieldPloughing")
    } else if (currentStory === "story5") {
        stories["story5"]["resolved"] = true
        farmDescription.innerText = "Delicious, poop-grown crops."
        poopPerClick += 15
        displayUpgrade("upgradeBrownFingers")
        displayUpgrade("upgradeFibrePackedDiet")
        displayUpgrade("upgradeAgriculturalWasteComposting")
    } else if (currentStory === "story6") {
        stories["story6"]["resolved"] = true
        crops -= 400
    } else if (currentStory === "story7") {
        stories["story7"]["resolved"] = true
        pasturePanel.classList.remove("hidden")
        meatCounterContainer.classList.remove("hidden")
        displayUpgrade("upgradeProteinSufficiency")
        displayUpgrade("upgradeBalancedDiet")
        displayUpgrade("upgradeSpecializedAnimalFeed")
        displayUpgrade("upgradeWildergrazeManure")
        displayUpgrade("upgradeSelectiveBreeding")
        displayUpgrade("upgradeNutritionResearch")
    } else if (currentStory === "story8") {
        stories["story8"]["resolved"] = true
        displayUpgrade("upgradeHireFarmhands1")
        displayUpgrade("upgradeHireFarmhands2")
        displayUpgrade("upgradeHireFarmhands3")
    } else if (currentStory === "story9") {
        stories["story9"]["resolved"] = true
        poopPanel.classList.add("col-span-2")
        farmPanel.classList.add("hidden")
        pasturePanel.classList.add("hidden")
        pasturePanel.classList.remove("col-span-2")
        resetUpgrades()
        resetStats()
        meat = 100
        displayUpgrade("upgradeMuscleMemory")
    } else if (currentStory === "story10") {
        stories["story10"]["resolved"] = true
        poopPanel.classList.remove("col-span-2")
        dragonPanel.classList.remove("hidden")
        meat -= 1
    } else if (currentStory === "story11") {
        stories["story11"]["resolved"] = true
        farmPanel.classList.remove("hidden")
        pasturePanel.classList.remove("hidden")
        displayUpgrade("upgradeSugarRush")
        displayUpgrade("upgradeFieldPloughing")
        displayUpgrade("upgradeBrownFingers")
        displayUpgrade("upgradeFibrePackedDiet")
        displayUpgrade("upgradeAgriculturalWasteComposting")
        displayUpgrade("upgradeProteinSufficiency")
        displayUpgrade("upgradeBalancedDiet")
        displayUpgrade("upgradeSpecializedAnimalFeed")
        displayUpgrade("upgradeWildergrazeManure")
        displayUpgrade("upgradeSelectiveBreeding")
        displayUpgrade("upgradeNutritionResearch")
        displayUpgrade("upgradeHireFarmhands1")
        displayUpgrade("upgradeHireFarmhands2")
        displayUpgrade("upgradeHireFarmhands3")
    } else if (currentStory === "story12") {
        stories["story12"]["resolved"] = true
        displayUpgrade("upgradeTelekinesis")
        displayUpgrade("upgradeManaFueledGrowth")
        displayUpgrade("upgradeManaFacilitatedHerding")
    } else if (currentStory === "story13") {
        stories["story13"]["resolved"] = true
        displayUpgrade("upgradeBoneFertilizer")
        displayUpgrade("upgradeProteinFortifiedFeed")

    } else if (currentStory === "story14") {
        stories["story14"]["resolved"] = true
        displayUpgrade("upgradeSoulmancy")
        displayUpgrade("upgradeCorpseComposting")
    } else if (currentStory === "story15") {
        stories["story15"]["resolved"] = true
        displayUpgrade("upgradeDrakeEmberArmor", "container-upgrade-item-danger")
        displayUpgrade("upgradeMercenaryConscription", "container-upgrade-item-danger")
        displayUpgrade("upgradeStockedGranaries", "container-upgrade-item-danger")
    } else if (currentStory === "story16") {
        stories["story16"]["resolved"] = true
        triggerEnding()
    }
    comprehensiveUpdate()
}

alertBtn.addEventListener("click", () => {
    alertPopup.classList.add("hidden")
    resolveStoryStates()
    paused = false
    toggleButtons()
})

// PAGE ELEMENT UPDATE HANDLING
function updateBuildingCounters() {
    poopPerClickCtr.innerText = `Poop/click: ${poopPerClick * poopMultiplier}`
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
    cropsPerSecond = farms * cropsBaseProduction * cropMultiplier
    meatPerSecond = pastures * meatBaseProduction * meatMultiplier
    manaPerSecond = Math.max((dragonSize - 7) * manaMultiplier, 0) ** 2

    cropsPerSecondCounter.innerText = `Crops/sec: ${cropsPerSecond}`
    meatPerSecondCounter.innerText = `Meat/sec: ${meatPerSecond}`
    manaPerSecondCounter.innerText = `Mana/sec: ${manaPerSecond}`
}

function updateCostDisplay() {
    farmBtn.innerText = `Buy for ${farmCost} Poop`
    pastureBtn.innerText = `Buy for ${pastureCost} Crops`
    dragonBtn.innerText = `Feed for ${dragonCost} Meat`
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
    poop += poopPerClick * poopMultiplier;
    poopResourceCounter.innerText = `Poop: ${poop}`
})

farmBtn.addEventListener("click", () => {
    if (poop >= farmCost) {
        poop -= farmCost
        farms++
        farmCost = (farms + 1) ** 2 * 10
        comprehensiveUpdate()
    }
})

pastureBtn.addEventListener("click", () => {
    if (crops >= pastureCost) {
        crops -= pastureCost
        pastures++
        pastureCost = (pastures + 1) ** 2 * 100
        comprehensiveUpdate()
    }
})

dragonBtn.addEventListener("click", () => {
    if (meat >= dragonCost) {
        meat -= dragonCost
        dragonSize++
        dragonCost = (dragonSize) ** 4
        comprehensiveUpdate()
        updateDragonDescription()
        updateDragonImage()
    }
})

let dragonStages = [
    "It's but a wee hatchling.",
    "Watch your fingers, it's teething.",
    "Loves to snuggle up in hats.",
    "Its roars are tiny squeaks.",
    "Loves playing with its shadows.",
    "Keeps your home rat-free.",
    "Portable lighter.",
    "Sprouting the Tiniest of Wings.",
    "Voracious appetite.",
    "Breathes a gorgeous blue flame.",
    "Enjoys sunbathing on the roof.",
    "Its scales glisten like jewels in the light.",
    "Can do back flips in the sky.",
    "Majestic and fearsome, it's a sight to behold.",
    "A legendary force to be reckoned with."
]

let updateDragonDescription = () => {
    if (dragonSize < dragonStages.length) {
        dragonDescription.innerText = dragonStages[dragonSize - 1]
    } else {
        dragonDescription.innerText = "Draconic Monarch."
    }
}

let updateDragonImage = () => {
    if (dragonSize >= 15) {
        dragonIcon.src = "./src/dragon-3.svg"
    } else if (dragonSize >= 8) {
        dragonIcon.src = "./src/dragon-2.svg"
    }
}


// PURCHASABLE UPGRADE HANDLING
function displayUpgrade(upgradeName, optionalStyleClass = "") {
    let upgradeDiv = document.createElement('div');
    upgradeDiv.className = 'container-upgrade-item container-upgrade-item-unpurchasable';
    if (optionalStyleClass !== "") {
        upgradeDiv.classList.add(optionalStyleClass)
    }
    upgradeDiv.id = upgradeName;
    upgradeDiv.innerHTML = `
            <h3>${upgrades[upgradeName].title}</h3>
            <p>${upgrades[upgradeName].description}</p>
            <p><i>Cost: ${upgrades[upgradeName].cost}</i></p>`;
    upgradeDiv.onclick = function () {
        purchaseUpgrade(upgradeName);
    };
    upgradesContainer.appendChild(upgradeDiv);
    // }
}

function haveUpgradeResources(upgradeName) {
    let upgrade = upgrades[upgradeName]
    return poop >= upgrade.costDictionary["poop"] &&
        crops >= upgrade.costDictionary["crops"] &&
        meat >= upgrade.costDictionary["meat"] &&
        mana >= upgrade.costDictionary["mana"]
}

function deductUpgradeResources(upgradeName) {
    let upgrade = upgrades[upgradeName]
    poop -= upgrade.costDictionary["poop"]
    crops -= upgrade.costDictionary["crops"]
    meat -= upgrade.costDictionary["meat"]
    mana -= upgrade.costDictionary["mana"]
}

function markUpgradePurchase(upgradeName) {
    upgrades[upgradeName].purchased = true;
    updateResourceCounters()
    updateResourcePerSecondCounters()
    let element = document.getElementById(upgradeName);
    upgradesContainer.removeChild(element);
}

function resetUpgrades() {
    for (let upgrade in upgrades) {
        upgrades[upgrade].available = false
        upgrades[upgrade].purchased = false
        upgradesContainer.innerHTML = ""
    }
}

function resetStats() {
    poop = 0
    poopMultiplier = 1
    poopPerClick = 5

    farms = 0
    crops = 0
    cropsBaseProduction = 1
    cropMultiplier = 1
    cropsPerSecond = 0

    pastures = 0
    meat = 0
    meatBaseProduction = 1
    meatMultiplier = 1
    meatPerSecond = 0

    dragonSize = 1
    mana = 0
    manaBaseProduction = 1
    manaMultiplier = 1
    manaPerSecond = 0

    farmCost = 10;
    pastureCost = 100;
    dragonCost = 1;
}

function checkUpgradesPurchaseAvailability() {
    //check if each upgrade in the upgrade div is purchasable, if yes, remove container-upgrade-item-unpurchasable. else, add it back. Upgrades are in upgradeContainer
    let upgradeDivs = upgradesContainer.childNodes
    for (let i = 0; i < upgradeDivs.length; i++) {
        let upgradeName = upgradeDivs[i].id
        if (haveUpgradeResources(upgradeName)) {
            upgradeDivs[i].classList.remove("container-upgrade-item-unpurchasable")
        } else {
            upgradeDivs[i].classList.add("container-upgrade-item-unpurchasable")
        }
    }
}

function purchaseUpgrade(upgradeName) {
    if (haveUpgradeResources(upgradeName)) {
        let upgrade = upgrades[upgradeName]
        deductUpgradeResources(upgradeName)
        if (upgrade.outcomeDictionary.hasOwnProperty("poopMultiplier")) {
            poopMultiplier *= upgrade.outcomeDictionary["poopMultiplier"]
        }
        if (upgrade.outcomeDictionary.hasOwnProperty("cropsBaseProduction")) {
            cropsBaseProduction += upgrade.outcomeDictionary["cropsBaseProduction"]
        }
        if (upgrade.outcomeDictionary.hasOwnProperty("cropMultiplier")) {
            cropMultiplier *= upgrade.outcomeDictionary["cropMultiplier"]
        }
        if (upgrade.outcomeDictionary.hasOwnProperty("meatBaseProduction")) {
            meatBaseProduction += upgrade.outcomeDictionary["meatBaseProduction"]
        }
        if (upgrade.outcomeDictionary.hasOwnProperty("meatMultiplier")) {
            meatMultiplier *= upgrade.outcomeDictionary["meatMultiplier"]
        }
        if (upgrade.outcomeDictionary.hasOwnProperty("manaBaseProduction")) {
            manaBaseProduction += upgrade.outcomeDictionary["manaBaseProduction"]
        }
        if (upgrade.outcomeDictionary.hasOwnProperty("manaMultiplier")) {
            manaMultiplier *= upgrade.outcomeDictionary["manaMultiplier"]
        }
        markUpgradePurchase(upgradeName)
        checkUpgradesPurchaseAvailability()
    }
}

// SET INTERVAL LOOP
setInterval(() => {
    if (!paused) {
        triggerStories()
    }
    //Prevent Resource Counters Directly Updating after Alert Popup
    if (!paused) {
        // Update Counters
        updateBuildingCounters()
        updateResourcePerSecondCounters()
        addPerSecondResources()
        updateResourceCounters()
        checkUpgradesPurchaseAvailability()
    }
}, 1000)
