// Given 2 str, write a method to decide if one is a permutation of the other

// check if they are the same exact str
// check the length of the 2 strings
// create object for each str
// check if the obj char count are equal return false - else 
// return true

const isObj = (str) => {
    let obj = {}

    for (let char of str) {
        (!obj[char]) ? obj[char]=1 : obj[char]++
    }
    return obj
}

const isPermutation1 = (str1, str2) => {
    if (str1 === str2) {
        return true;
    } else if (str1.length !== str2.length) {
        return false;
    } else {
        const obj1 = isObj(str1)
        const obj2 = isObj(str2)

        for (const char in obj1) {
            if (obj1[char] !== obj2[char]) {
                return false;       
            }
        }
    }

}


// SOLUTION 2
const isPermutation2 = (str1, str2) => {
    const checkArr = str => str.split('').sort().join('')

    let permutation = (checkArr(str1) === checkArr(str2))
    return permutation
}
const A = 'kunle'
const B = 'eunlk'
const C = 'boyds'

console.log({
    Permutation: isPermutation(A,C)
})

