// implement an algorithm to detemine if a string has all unique characters

// set an empty object
// loop through the str and set the value to 1 if the value is not in the object if yes, increament value
// loop through the obj

const isUnique = (str) => {

    let obj = {}

    for (let char of str) {
        (!obj[char])?(obj[char])=1 : obj[char]++
    }
    console.log(obj)
    for (let char in obj)
        if (obj[char] > 1) {
            return false        
    }
    return true

}
console.log({
    IsUnique: isUnique('chear')
})
