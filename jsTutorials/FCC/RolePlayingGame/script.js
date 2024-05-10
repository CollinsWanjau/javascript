let xp = 0;

let health = 100;

let gold = 50;

// corresponds to an index in the weapons array.
let currentWeapon = 0;

let fighting;

let monsterHealth;

let inventory = ['stick'];

const button1 = document.querySelector('#button1');

const button2 = document.querySelector('#button2')

const button3 = document.querySelector('#button3');

const text = document.querySelector('#text');

const xpText = document.querySelector('#xpText');

const healthText = document.querySelector('#healthText')

const goldText = document.querySelector('#goldText')

const monsterStats = document.querySelector('#monsterStats')

const monsterName = document.querySelector('#monsterName')

const monsterHealthText = document.querySelector('#monsterHealth')

const weapons = [
    { name: "stick", power: 5 },
    { name: "dagger", power: 30 },
    { name: "claw hammer", power: 50 },
    { name: "sword", power: 100 },
    
]

const monsters = [
        {name: 'slime', level: 2, health: 15},
        {name: 'fanged beast', level: 8, health: 60},
        {name: 'dragon', level: 20, health: 300}
]

/**
 * Array of locations in the game.
 * @type {Array<Object>}
 */
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, goTown],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;"
    },
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"

    }
]

// initialize buttons
// Using dot notation to set the onClick property to function reference of goStore
button1.onclick = goStore;

button2.onclick = goCave;
button3.onclick = fightDragon;


/**
 * Updates the game location and buttons based on the provided location object.
 *
 * @param {Object} location - The location object containing the updated information.
 */
function update(location) {
    monsterStats.style.display = "none"
    const button1 = document.querySelector('#button1')
    button1.innerText = location["button text"][0]
    button2.innerText = location["button text"][1]
    button3.innerText = location["button text"][2]

    text.innerHTML = location.text
    /* Updating the onclick property for each button to run each of the functions */
    button1.onclick = location["button functions"][0]
    button2.onclick = location["button functions"][1]
    button3.onclick = location["button functions"][2]
}


/**
 * Function to go to the town location.
 */
function goTown() {
    // bracket notation - values in an array accessed by index
    update(locations[0])
}

function goStore() {
    update(locations[1])
}

function goCave() {
    update(locations[2])
}

function fightDragon() {
    console.log('Fighting dragon.')
}


/**
 * Decreases the player's gold by 10 and increases their health by 10.
 * Updates the gold and health text elements accordingly.
 */
function buyHealth() {
    if (gold >= 10) {
        gold -= 10
        health += 10
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health."
    }
}

/**
 * Buys a weapon if the player has enough gold.
 */
function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++
            goldText.innerText = gold
            // tell the player what weapon they bought
            let newWeapon = weapons[currentWeapon].name
            text.innerText = 'You now have a ' + newWeapon + '.'
            inventory.push(newWeapon)
            text.innerText += ' In your inventory you have: ' + inventory
        } else {
            text.innerText = 'You do not have enough gold to buy a weapon.'
        }
    } else {
        text.innerText = 'You already have the most powerful weapon!'
        button2.innerText = 'Sell weapon for 15 gold'
        button2.onclick = sellWeapon
    }
}

/**
 * Sells a weapon from the inventory and adds gold to the player's balance.
 * @function sellWeapon
 */
function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15
        goldText.innerText = gold
        let currentWeapon
        currentWeapon = inventory.shift()
        text.innerText = 'You sold a ' + currentWeapon + '.'
        text.innerText += ' In your inventory you have: ' + inventory
    } else {
        text.innerText = "Don't sell your only weapon!"
    }
}

/**
 * Function to initiate a fight with a slime.
 */
function fightSlime() {
    fighting = 0
    goFight()
}

/**
 * Function to initiate a fight with a beast.
 */
function fightBeast() {
    // Your code here
    fighting = 1
    beast = 1
    goFight()
}

/**
 * Function to initiate a fight with a dragon.
 */
function fightDragon() {
    fighting = 2
    dragon = 2
    goFight()
}

/**
 * Function to initiate a fight.
 * @function goFight
 */
function goFight() {
    update(locations[3])
    monsterHealth = monsters[fighting].health
    monsterStats.style.display = 'block'
    monsterName.innerText = monsters[fighting].name
    monsterHealthText.innerText = monsterHealth
}

/**
 * Performs an attack action in the game.
 * Updates the text display with attack information.
 * Decreases the player's health based on the monster's attack value.
 * Calculates the damage inflicted on the monster based on the player's weapon power and experience points.
 * Updates the health display for both the player and the monster.
 * Triggers the appropriate game outcome (win, lose, or defeat monster) based on the health values.
 */
function attack() {
    text.innerText = 'The ' + monsters[fighting].name + ' attacks.'
    text.innerText += " You attack it with your " + weapons[currentWeapon].name +  "."
    health -= getMonsterAttackValue(monsters[fighting].level)
    if (isMonsterHit()) {
        // Calculate monster health damage based on attack and experience points
        monsterHealth -= (weapons[currentWeapon].power + Math.floor(Math.round() * xp) + 1)
    } else {
       text.innerText += " You miss."
    }
    
    healthText.innerText = health
    monsterHealthText.innerText = monsterHealth
    if (health <= 0) {
        lose()
    } else if(monsterHealth <= 0) {
        
        if (fighting === 2) {
            winGame()
        } else {
            defeatMonster()
        }
    }
    // there should be a chance that the player's weapon breaks.
    if (Math.random() <= .1) {
        text.innerText += " Your <weapon>"
    }
}

/**
 * Calculates the attack value of a monster based on its level.
 * @param {number} level - The level of the monster.
 */
function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp))
    console.log(hit)
    return hit > 0 ? hit : 0
}

/**
 * Checks if the monster is hit.
 * @returns {boolean} Returns true if the monster is hit, false otherwise.
 */
function isMonsterHit() {
    return Math.random() > .2 || health < 20
}

/**
 * Dodges the attack from the current monster.
 */
function dodge() {
    text.innerText = 'You dodge the attack from the ' + monsters[fighting].name
}

/**
 * Defeats the current monster and updates the player's gold, experience points, and location.
 */
function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7)
    xp += monsters[fighting].level
    goldText.innerText = gold
    xpText.innerText = xp
    update(locations[4])
}

/**
 * Updates the location to the specified location index when the player loses.
 * @param {number} locationIndex - The index of the location to update to.
 */
function lose() {
    update(locations[5])
}

/**
 * Function to handle winning the game.
 * @function winGame
 * @returns {void}
 */
function winGame() {
    update(locations[6])
}

/**
 * Restarts the game by resetting the player's attributes and calling the goTown function.
 */
function restart() {
    xp = 0
    health = 100
    gold = 50
    currentWeapon = 0
    inventory = ['stick']
    goldText.innerText = gold
    healthText.innerText = health
    xpText.innerText = xp
    goTown()
}
