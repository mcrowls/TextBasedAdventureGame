const inquirer = require('inquirer')

const name = async () => {
    const {userInput} = await inquirer.prompt({
        type: 'input',
        name: 'userInput',
        message: 'What is your name?'
    })
    if (!userInput.match(/^[a-zA-Z]+/g)){
        return 'use letters only'
    }
    else {
        return userInput
    }
}

const selectWeapons = async (weapons) => {
    const { weaponChoice } = await inquirer.prompt({
        type: 'list',
        name: 'weaponChoice',
        message: 'Choose your Weapon',
        choices: weapons.map(weapon => weapon)
    })
    return weaponChoice
}


const digOrKeys = async (escapeCellMethods) => {
    const { escapeCellMethod } = await inquirer.prompt({
        type: 'list',
        name: 'escapeCellMethod',
        message: 'How will you escape the cell?',
        choices: escapeCellMethods.map(method => method)
    })
    return escapeCellMethod
}

const cellarChoice = async (cellarOptions) => {
    const {officeSewerYard} = await inquirer.prompt({
        type: 'list',
        name: 'officeSewerYard',
        message: 'Which way do you want to go?',
        choices: cellarOptions.map(direction => direction)
    })
    return officeSewerYard
}

const combat = async (fightOptions) => {
    const {fightOrFlight} = await inquirer.prompt({
        type: 'list',
        name: 'fightOrFlight',
        message: 'Will you fight or try to run past (like a coward)?',
        choices: fightOptions.map(fight => fight)
    })
    return fightOrFlight
}

const finalChoice = async () => {
    const { NSEW } = await inquirer.prompt({
        type: 'input',
        name: 'NSEW',
        message: 'Which way would you like to go? (N E S W)'
    })
    if (!NSEW.match(/N|S|E|W/i)){
        console.log('choose N, E, S, W')
        finalChoice()

    }
    else {
        return NSEW.toUpperCase()
    }
}

module.exports = {
    name, 
    selectWeapons, 
    digOrKeys,
    cellarChoice,
    combat,
    finalChoice
}