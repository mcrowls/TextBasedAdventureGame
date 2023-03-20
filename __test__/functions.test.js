const { healthDecrease, getPlayer, guiltIncrease, playerDead, playerTooGuilty, interactionAfterCellar } = require('../functions/functions')
const { combatLog } = require('../stored/userItems')
const player = getPlayer()
let consoleSpy

beforeEach( () => {consoleSpy = jest.spyOn(global.console, 'log')})
afterEach( () => {jest.restoreAllMocks()})

describe('player function tests', () => {

    test('decrease health by 1', () => {
        expect.assertions(1)
        const currentHealth = player.health

        healthDecrease(1)

        expect(player.health).toBe(currentHealth - 1)
    })

    test('increase guilt by 1', () => {
        expect.assertions(1)
        const currentGuilt = player.guilt

        guiltIncrease(1)

        expect(player.guilt).toBe(currentGuilt + 1)
    })

    test('playerDead calls gameOver', () => {
        expect.assertions(4)

        playerDead()
        
        expect(consoleSpy).toHaveBeenCalled()
        expect(consoleSpy).toHaveBeenCalledTimes(2)
        expect(consoleSpy).toHaveBeenCalledWith('You have escaped in spirit, if not in body. You are dead.')
        expect(consoleSpy).toHaveBeenCalledWith('GAME OVER!')
    })

    test('playerTooGuilty calls gameOver', () => {
        expect.assertions(4)

        playerTooGuilty()
        
        expect(consoleSpy).toHaveBeenCalled()
        expect(consoleSpy).toHaveBeenCalledTimes(2)
        expect(consoleSpy).toHaveBeenCalledWith('Your conscience has finally caught up with you. You have handed yourself in to the guards. A lifetime of gruel and self-reflection awaits.')
        expect(consoleSpy).toHaveBeenCalledWith('GAME OVER!')
    })
})

describe('fight function tests', () => {

    test('fight in sewer reduces health by 1 and increases guilt by 2', () => {
        expect.assertions(3)
        const currentHealth = player.health
        const currentGuilt = player.guilt

        interactionAfterCellar('sewer', 'stand and fight', combatLog)

        expect(player.health).toBe(currentHealth - 1)
        expect(player.guilt).toBe(currentGuilt + 2)
        expect(consoleSpy).toHaveBeenCalled()
    })

    test('fight in office reduces health by 4 and increases guilt by 2', () => {
        expect.assertions(3)
        const currentHealth = player.health
        const currentGuilt = player.guilt

        interactionAfterCellar('office', 'stand and fight', combatLog)

        expect(player.health).toBe(currentHealth - 4)
        expect(player.guilt).toBe(currentGuilt + 2)
        expect(consoleSpy).toHaveBeenCalled()
    })

    test('run in yard reduces health by 0 and increases guilt by 4', () => {
        expect.assertions(3)
        const currentHealth = player.health
        const currentGuilt = player.guilt

        interactionAfterCellar('yard', 'run away', combatLog)

        expect(player.health).toBe(currentHealth)
        expect(player.guilt).toBe(currentGuilt + 4)
        expect(consoleSpy).toHaveBeenCalled()
    })

    test('invalid causes no console log', () => {
        expect.assertions(1)

        interactionAfterCellar('yard', 'invalid', combatLog)

        expect(consoleSpy).toHaveBeenCalledTimes(0)
    })
})