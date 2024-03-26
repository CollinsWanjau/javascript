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
    }
]

// initialize buttons
// Using dot notation to set the onClick property to function reference of goStore
button1.onclick = goStore;

button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    const button1 = document.querySelector('#button1')
    button1.innerText = location["button text"][0]
    button2.innerText = location["button text"][1]
    button3.innerText = location["button text"][2]

    text.innerText = location.text
    /* Updating the onclick property for each button to run each of the functions */
    button1.onclick = location["button functions"][0]
    button2.onclick = location["button functions"][1]
    button3.onclick = location["button functions"][2]
}


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

function fightSlime() {
    fighting = 0
    goFight()
}

function fightBeast() {
    // Your code here
    fighting = 1
    beast = 1
    goFight()
}

function fightDragon() {
    fighting = 2
    dragon = 2
    goFight()
}

function goFight() {

}

function attack() {

}

function dodge() {

}