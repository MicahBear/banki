// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//num with no funny biz
//log each num or the appr word
//n = 5 -> 1, 2, fizz, 4, buzz
//n = 9 -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
//n = 15 ->  1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

function fizzBuzz(num) {
    //for loop from 1 to num 
    for (let i = 1; i <= num; i++) {
        //conditional 
        //if num % 3 && num % 5 === 0 -> fizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
        //if num % 3 === 0 -> fizz
        //if num % 5 === 0 -> buzz
        //log the num
    }
}

fizzBuzz(5) //1, 2, fizz, 4, buzz
fizzBuzz(9) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
fizzBuzz(15) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"
//  Use replace on the parts of the url you want gone.You can replace with an empty string ''.Then split the string using.as the seperator and take the first part[0]



/**
 * Oct 18
 * Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

 reduce the array adding each value to get a sum and make sure the current value is treated as a Number by using Number() 
 */