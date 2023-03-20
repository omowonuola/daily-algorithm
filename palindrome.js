// find palindromes
// palindrome("abba")=== true
// palinrome("abcdefg")=== false
// steps
// convert the string to array and reverse it
// convert the array back to string
// conpare the converted string with the value

const palindrome = (str) => {
    let arr = str.split('');
    checkPalindrome = arr.reverse().join('');
    console.log(str === checkPalindrome);
  };
  
  palindrome('abba')