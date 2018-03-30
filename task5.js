try {
    var str = process.argv[2]
    if (typeof str !== 'string') throw new Error('Illegal input. Expected string argument.\n')
    
} catch(e) {
    console.log(e.message)
    process.exit(1)
}

if (checkPalindrom(str)) {
    console.log('String is palindrome')
} else {
    console.log('String isnt palindrome')
}

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}