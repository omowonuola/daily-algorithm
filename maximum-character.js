// 32eddseew3
// #%he3#33ll#l#o
// find the character that appears the most and total number of times it appears.

// generate key value pair: 
    // create an Object
    // if the char of the string does not exist in obj, then set it's value to 1
    // if it does, do an increment

// loop through the values of the object to see which one has highest value

// const maxChar = (str) => {
//     let obj = {}

//     for (let char of str) {
//         (!obj[char]) ? obj[char] = 1 : obj[char]++;
//         // console.log(obj)
//     }

//     let maxNum = 0;
//     let maxString = ''

//     for (let char in obj) {
//         if (obj[char] >= maxNum) {
//              maxNum = obj[char];
//              maxString = char;
//         }
//         console.log(`${maxString} has highest value of ${maxNum}`)
//     }
// }

// maxChar('abbottiffeeee')

// Example 2
('geeksforgeeks')
// create an object
// loop through the object to get the total number of times each char appears
// set the highest char and the num of times it appeared 

const maxChar = (str) => {
    let obj = {}
    for (let char of str) {
        (!obj[char]) ? obj[char]=1 : obj[char]++
        // console.log(obj)
    }

    let maxNum = 0;
    let maxChar = '';

    for (let char in obj) {
        if (obj[char] >= maxNum) {
            maxNum = obj[char];
            maxChar = char;
        }
        console.log(`${maxChar} appears ${maxNum} times`)
    }
}

maxChar('geeksforgeeks')