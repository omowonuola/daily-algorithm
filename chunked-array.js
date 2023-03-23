// create an empty arr for the chunk arr
// get the last chunked arr
// check if the last exist or if last equal n, if it does, push into the chunk arr if not push the elem into the last arr

const chunked = (arr, n) => {
    const chunk = []

    for (const element of arr) {
        let last = chunk[chunk.length-1]
        if(!last || last.length === n) {
            chunk.push([element])
        } else {
            last.push(element)
        }
    }
    console.log(chunk)
}

chunked([1,2,4,5,6,3,4,5,4], 3)



