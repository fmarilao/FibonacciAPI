function calculateFibonacci(n){
    let nextFib = 1
    let currentFib = 0

    for(let i=0; i<n; i++){
        let temp = nextFib
        nextFib = nextFib + currentFib
        currentFib = temp
    }

    return currentFib
}

module.exports = calculateFibonacci;