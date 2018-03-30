let n = parseInt(process.argv[2])

if (isNaN(n)) {
    console.log('Illegal input. Expected number.')
} else {
    console.log(`Fibonacci numbers from 1 to ${n}`)
    let memo = new Map()
    fibonacci(n, memo)
    for (let [key, value] of memo) {
        console.log(`${value}`)

    }
}

function fibonacci(num, memo = new Map()) {
    if (memo.has(num)) return memo.get(num);
    if (num <= 1) return 1;

    memo.set(num, fibonacci(num - 1, memo) + fibonacci(num - 2, memo))
    return memo.get(num);
}