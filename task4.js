try {
    var numbers = process.argv.slice(2).map((el) => {
        let num = parseInt(el)
        if (isNaN(num)) throw new Error('Illegal input. Expected number.\n')
        return num
    })

    if (numbers.length != 2) throw new Error('Illegal input. Expected 2 numbers.\n')
    
} catch(e) {
    console.log(e.message)
    process.exit(1)
}

const gcd = function(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};

const lcm = (a, b, gcdResult = gcd(a,b)) => Math.abs(a*b) / gcdResult

let results = {}
results.gcd = gcd(...numbers)
results.lcm = lcm(...numbers, results.gcd)

console.log(`GCD == ${results.gcd}, LCM == ${results.lcm}`)