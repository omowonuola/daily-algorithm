// convert int to string
// convert str to arr
// reverse the arr
// convert arr back to str
// convert str to int

const convertInt = (int) => {
    let arr = int.toString().split('')
    let str = arr.reverse().join('')
    let integer = parseInt(str)
    if (int < 0) {
        return -(integer)
    } else {
        return (integer)
    }
    
}

console.log({
    testcase1: convertInt(7508),
    testcase2: convertInt(-91),
    testcase3: convertInt(007),
})
