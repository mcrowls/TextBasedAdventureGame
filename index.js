const {name, selectWeapons, digOrKeys, cellarChoice, combat, finalChoice} = require('./functions/inq');
const { healthDecrease, guiltIncrease, checkStillAlive, interactionAfterCellar, checkTooGuilty} = require('./functions/functions');
let {player, weapons, escapeCellMethods, weaponWithGuard, cellarOptions, fightOptions, combatLog, directions} = require('./stored/userItems');

const start = async () => {
    console.log("You find yourself in a prison cell after a heavy night out. You are charged with drunk and disorderly and have been put away for life.")
    console.log("In your daze, you seem to have forgotten what your name is...")
    player.name = await name()
    console.log("Hello", player.name, ", quite the situation you find yourself in!")
    console.log("Your starting health is", player.health ,"and your starting guilt is", player.guilt ,"If your health gets to 0 or your guilt gets to 10, it will be game over man!")
    userSelectWeapon()
}


const userSelectWeapon = async () => {
    console.log("You plan to escape. It is important to arm yourself before this. Which weapon would you like to choose?")
    player.weapon = await selectWeapons(weapons)
    console.log("You are now armed with", player.weapon)
    console.log("You are now prepared to break out of prison")
    escapeCell()
}

const escapeCell = async () => {
    console.log('You can try to dig your way through the wall or knock out the guard and take his keys. Which will you choose?')
    let escapeCellMethod = await digOrKeys(escapeCellMethods)
    if (escapeCellMethod === "dig through wall"){
        console.log("you have chosen to dig through the wall")
        healthDecrease(1)
        console.log('you have torn your hands to shreds, your health is now', player.health)
    }
    else {
        console.log("Bold move! You have chosen to knock out the guard")
        guiltIncrease(1)
        healthDecrease(weaponWithGuard[player.weapon]) 
    }
    checkStillAlive()
    checkTooGuilty()
    cellar()
}

const cellar = async () => {
    console.log('You have escaped your cell, but not the prison. You arrive in a dank cellar. Ahead of you are three doors, one to the prison office, one to the sewer, and one to the exercise yard.')
    let path = await cellarChoice(cellarOptions)
    path = path.split(/(\s+)/)[path.split(/(\s+)/).length - 1]
    console.log("You run through the", path, "and you come across a", combatLog[path]['enemy'])
    let fight = await combat(fightOptions)
    interactionAfterCellar(path, fight, combatLog)
    checkStillAlive()
    checkTooGuilty()
    freedom(path)
}

const freedom = async (path) => {
    console.log("FREEDOM! After escaping the", path, "you stumble out of the fire exit into the carpark. You can now run free. But will you go North, into the city? South into the desert? East, straight back to the pub? Or west, into the ocean?")
    let direction = await finalChoice()
    console.log("You have chosen to go to the", directions[direction]['where'], ".")
    console.log(directions[direction]['description'])
}


start()