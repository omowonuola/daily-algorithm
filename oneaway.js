// compare if the two str are the same
// create char map for both str
// check if the char are the same type and value
// if they're not, increase the counter
// if the counter is 2 or more, then return false
// return true 


const charMap = (str) => {
    let obj = {}

    for (const char of str) {
        (!obj[char]) ? obj[char]=1 : obj[char]++
        return obj
    }
}

const change = (str1, str2) => {
    if (str1 === str2) return false

    const obj1 = charMap(str1)
    const obj2 = charMap(str2)

    let counter = 0

    for (let i in obj1) {
        if (obj1[i] !== obj2[i]) {
            counter++  
        } else if (counter >= 2) {
            return false
        }
    }
    return true
}

console.log({
    check: change('pale', 'bake')
})