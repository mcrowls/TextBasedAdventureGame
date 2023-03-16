
function healthSetter(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function guiltSetter(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
const randomHealth = healthSetter(3, 10)
    
const randomGuilt = guiltSetter(1, 7)
    
let player = {
     name: "",
    weapon: "",
    health: randomHealth,
    guilt: randomGuilt
}

const weapons = ["shoelace", "soap in a sock", "morning breath", "beer bottle"]

const escapeCellMethods = ["dig through wall", "knock out the guard"]

const weaponWithGuard = {'shoelace': 1, 'soap in a sock': 3, 'morning breath': 0, 'bottle': 1}

const cellarOptions = ['run through the office', 'squeeze through the sewer', 'bust through the yard']

const fightOptions = ['stand and fight', 'run away']

const combatLog = {'sewer': {'run away': {'health': 2, 'guilt': 3}, 'stand and fight': {'health': 2, 'guilt': 3}, 'enemy': 'rat'}, 
'office': {'run away': {'health': 2, 'guilt': 3}, 'stand and fight': {'health': 2, 'guilt': 3}, 'enemy': 'guard'},
'yard': {'run away': {'health': 2, 'guilt': 3}, 'stand and fight': {'health': 2, 'guilt': 3}, 'enemy': 'snitch'}}

const directions = {'N': {'where':'city', 'description':"you are free. You bunked down in your uncle's wheely bin. It's not much of a life, but you eventually change your name to Oscar the Grouch and go on to star in an award winning childrens television show. Well done."}, 'S': {'where':'desert', 'description':"you are free, but for how long? You slowly sucumb to dehydration and eventually you are devoured by a giant sand worm."}, 'E': {'where':'pub', 'description':"you idiot. The publican has barred you after that outrageous display last night. He calls the bill and you're nicked. Straight back to prison for you"}, 'W': {'where':'ocean', 'description':"you are free. Your old mate rocks up in one of Putin's repossessed mega-yachts. You sail off to Antigua to live a life of luxury for the rest of your days."}}


module.exports = {
    player, 
    weapons, 
    escapeCellMethods, 
    weaponWithGuard,
    cellarOptions,
    fightOptions,
    combatLog,
    directions
}