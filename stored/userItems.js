let player = {
    name: "",
    weapon: "",
    health: 10,
    guilt: 0
}

const weapons = ["shoelace", "soap in a sock", "morning breath", "beer bottle"]

const escapeCellMethods = ["dig through wall", "knock out the guard"]

const weaponWithGuard = {'shoelace': 1, 'soap in a sock': 3, 'morning breath': 0, 'bottle': 1}

const cellarOptions = ['run through the office', 'squeeze through the sewer', 'bust through the yard']

const fightOptions = ['stand and fight', 'run away']

const combatLog = {'sewer': {'run': 1, 'fight': 4, 'enemy': 'rat'}, 'office': {'run': 3, 'fight': 1, 'enemy': 'guard'}, 'yard': {'run': 1, 'fight': 4, 'enemy': 'snitch'}}

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