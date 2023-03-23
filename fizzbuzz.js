// using for loop to check the length of the value
// use if else statement to check for number that are divisible by the values

const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
    
        if (i%3 === 0 && i%5 === 0) {
            console.log('fizzbuzz')
            continue;
        } else if (i%3 === 0) {
            console.log('fizz')
            continue;
        } else if (i%5 === 0) {
            console.log('buzz')
            continue;
        } else if (i > num) {
            break;
            
        } else {
            console.log(i)
        }

    }
}

fizzBuzz(45)

