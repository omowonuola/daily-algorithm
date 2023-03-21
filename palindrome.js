// find palindromes
// palindrome("abba")=== true
// palinrome("abcdefg")=== false


// steps
// convert the string to array and reverse it
// convert the array back to string
// conmpare the converted string with the value

const palindrome = (str) => {
    let arr = str.split('')
    convert = arr.reverse().join('')
    console.log(str === convert)
};
  
palindrome('abba')



