// implement to perform basic str compression using the counts of repeated char

// "aabccccaaa" => "a2b1c5a3"
// "abcd" => "abcd"

// we need a count variable to keep track of each char(count=1)
// we also need count var for cases when each char are unique



const strCompression = (str) => {
    const n = str.length;
    let count = 1, output = '', uniqueCount = 0;
    for (let i = 0; i < n; i++) {
        if(str[i] === str[i+1]) count++
        else {
            output += str[i]+count
            count = 1
            uniqueCount++
        }
    }
    if(uniqueCount === n) return str;
    else return output;
}

console.log({
    "aabccccaaa": strCompression('aabccccaaa'),
    'abcd': strCompression('abcd')
})