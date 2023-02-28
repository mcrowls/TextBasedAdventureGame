const inquirer = require('inquirer')
jest.mock('inquirer')
const {name, selectWeapons, digOrKeys, cellarChoice} = require('../functions/inq')

describe('name function test', () => {
    test('user input with bob', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: 'bob' })

        await expect(name()).resolves.toEqual('bob')
    })

    test('user input with numbers', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: '123' })

        await expect(name()).resolves.toEqual('use letters only')
    })

    test('user input with symbols', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ userInput: '!bob%' })

        await expect(name()).resolves.toEqual('use letters only')
    })
})


describe('weapon choice tests', () => {
    test('weapon choice user selects shoelace', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'shoelace' })

        await expect(selectWeapons(["shoelace", "soap in a sock", "morning breath", "beer bottle"])).resolves.toEqual('shoelace')
    })

    test('weapon choice user selects shoelace', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'soap in a sock' })

        await expect(selectWeapons(["shoelace", "soap in a sock", "morning breath", "beer bottle"])).resolves.toEqual('soap in a sock')
    })

    test('weapon choice user selects shoelace', async() => {
        expect.assertions(1)
        inquirer.prompt = jest.fn().mockResolvedValue({ weaponChoice: 'morning breath' })

        await expect(selectWeapons(["shoelace", "soap in a sock", "morning breath", "beer bottle"])).resolves.toEqual('morning breath')
    })

    test('weapon choice user selects shoelace', async() => {
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