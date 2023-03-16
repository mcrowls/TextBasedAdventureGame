let {player, fightOptions} = require('../stored/userItems')


const healthDecrease = (number) => {
    return player.health = player.health - number
}

const guiltIncrease = (number) => {
    return player.guilt = player.guilt + number
}

const checkStillAlive = () => {
    if (player.health === 0){
        console.log('You have escaped in spirit, if not in body. You are dead.')
    } 
}

const checkTooGuilty = () => {
    if (player.guilt === 10){
        console.log('Your conscience has finally caught up with you. You have handed yourself in to the guards. A lifetime of gruel and self-reflection awaits.')
    }
}


const interactionAfterCellar = (path, fight, combatLog) => {
    if (fight === 'stand and fight') {
        console.log("You bravely stand your ground against the", combatLog[path]['enemy'], "and with your trusty", player.weapon, "in hand, you manage to beat them down, losing", combatLog[path]['stand and fight']['health'], "health in the process.")
        healthDecrease(combatLog[path][fight]['health'])
        guiltIncrease(combatLog[path][fight]['guilt'])
    }
    else if (fight === 'run away') {
        console.log("Like a miserable coward, you slink shamefully past the", combatLog[path]['enemy'], "losing no health, but suffering", combatLog[path]['run away']['guilt'], "guilt. I hope you're proud of yourself.")
        healthDecrease(combatLog[path][fight]['health'])
        guiltIncrease(combatLog[path][fight]['guilt'])
    }
}

module.exports = {
    healthDecrease,
    guiltIncrease,
    checkStillAlive, 
    checkTooGuilty,
    interactionAfterCellar
}