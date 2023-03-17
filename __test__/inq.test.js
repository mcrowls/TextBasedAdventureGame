const inquirer = require('inquirer')
jest.mock('inquirer')
const {name, selectWeapons, digOrKeys, cellarChoice, combat, finalChoice} = require('../functions/inq')

describe('name function test', () => {
    test('user input with bob', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: 'bob' })

        await expect(name()).resolves.toEqual('bob')
    })

    test('user input with numbers', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: '123' })

        await expect(name()).resolves.toEqual('invalid')
    })

    test('user input with symbols', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: '!bob%' })

        await expect(name()).resolves.toEqual('invalid')
    })
})


describe('weapon choice tests', () => {
    test('weapon choice user selects shoelace', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'shoelace' })

        await expect(selectWeapons(["shoelace", "soap in a sock", "morning breath", "beer bottle"])).resolves.toEqual('shoelace')
    })

    test('weapon choice user selects soap in a sock', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'soap in a sock' })

        await expect(selectWeapons(["shoelace", "soap in a sock", "morning breath", "beer bottle"])).resolves.toEqual('soap in a sock')
    })

    test('weapon choice user selects morning breath', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'morning breath' })

        await expect(selectWeapons(["shoelace", "soap in a sock", "morning breath", "beer bottle"])).resolves.toEqual('morning breath')
    })

    test('weapon choice user selects beer bottle', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'beer bottle' })

        await expect(selectWeapons(["shoelace", "soap in a sock", "morning breath", "beer bottle"])).resolves.toEqual('beer bottle')
    })
})


describe('dig or keys tests', () => {
    test('user selects dig', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ escapeCellMethod: 'dig through wall' })

        await expect(digOrKeys(["dig through wall", "knock out the guard"])).resolves.toEqual('dig through wall')
    })

    test('user selects knock out guard', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ escapeCellMethod: 'knock out guard' })

        await expect(digOrKeys(["dig through wall", "knock out the guard"])).resolves.toEqual('knock out guard')
    })
})


describe('cellar options tests', () => {
    test('user selects run through the office', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ officeSewerYard: 'run through the office' })

        await expect(cellarChoice(['run through the office', 'squeeze through the sewer', 'bust through the yard'])).resolves.toEqual('run through the office')
    })

    test('user selects squeeze through the sewer', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ officeSewerYard: 'squeeze through the sewer' })

        await expect(cellarChoice(['run through the office', 'squeeze through the sewer', 'bust through the yard'])).resolves.toEqual('squeeze through the sewer')
    })

    test('user selects bust through the yard', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ officeSewerYard: 'bust through the yard' })

        await expect(cellarChoice(['run through the office', 'squeeze through the sewer', 'bust through the yard'])).resolves.toEqual('bust through the yard')
    })
})

describe('combat options test', () => {

    test('user selects fight', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({fightOrFlight: 'stand and fight'})

        await expect(combat(['stand and fight', 'run away'])).resolves.toEqual('stand and fight')
    })

    test('user selects flight', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({fightOrFlight: 'run away'})

        await expect(combat(['stand and fight', 'run away'])).resolves.toEqual('run away')
    })
})


describe('freedom choice test', () => {

    test('user input h', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ NSEW: 'h' })

        await expect(finalChoice()).resolves.toEqual('invalid')
    })

    test('user input 1', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ NSEW: '1' })

        await expect(finalChoice()).resolves.toEqual('invalid')
    })

    test('user input %', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ NSEW: '%' })

        await expect(finalChoice()).resolves.toEqual('invalid')
    })

    test('user input n', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ NSEW: 'n' })

        await expect(finalChoice()).resolves.toEqual('N')
    })

    
    test('user input E', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ NSEW: 'E' })

        await expect(finalChoice()).resolves.toEqual('E')
    })

    
    test('user input s', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ NSEW: 's' })

        await expect(finalChoice()).resolves.toEqual('S')
    })

    
    test('user input W', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ NSEW: 'W' })

        await expect(finalChoice()).resolves.toEqual('W')
    })

})