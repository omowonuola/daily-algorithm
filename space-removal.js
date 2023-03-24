// input:("Mr John Smith", 13)

const space = (str, n) => {
    let newStr = ''

    for (let i = 0; i < n; i++) {
        if (str[i] === ' ') {
            newStr += '%20';
        } else {
            newStr += str[i]
        }
        
    }
    return newStr;
}

console.log({
    removed: space("Mr John Smith", 13)
})


// create an empty str
// loop through the str using for loop
// check if the index of each string has space and replace it with %20

