const calculateFibonacci = require('../fibonacciFunction/fibonacci')

function getFibonacciNumber (index){
    if(isNaN(index)) return "you are trying to calculate fibonacci on something that is not a number"
    const fibonacciIndex = parseInt(index)
    return "Fibonacci result of "+ fibonacciIndex + " is " + calculateFibonacci(index)
}

module.exports = getFibonacciNumber;