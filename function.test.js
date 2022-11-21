//const { default: test } = require('node:test')
//const { default: test } = require('node:test')
//const { default: test } = require('node:test')
//const { describe } = require('yargs')
const functionjs = require('./function.js')

test('Return Two test', () => {
    expect(functionjs.returnTwo()).toBe(2)
})

test('Greeting Name test', () => {
    expect(functionjs.greeting('James')).toBe(`Hello, James.`)
    expect(functionjs.greeting('Jill')).toBe(`Hello, Jill.`)
})

test('Add test', () => {
    expect(functionjs.add(1, 2)).toBe(3)
    expect(functionjs.add(5, 9)).toBe(14)
})

describe('Math Functions', () => {
    test('Multiply', () => {
        expect(functionjs.multiply(3, 4)).toBe(12)
    })

    test('Divide', () => {
        expect(functionjs.divide(4, 2)).toBe(2)
    })

    test('Subtract', () => {
        expect(functionjs.subtract(3, 4)).toBe(-1)
    })
})