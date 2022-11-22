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
//
function sumMix(arr) {
    //arr.reduce to a sum
    // the 0 will set the type to a number
    // will need to makesure each current value is a number.
    return arr.reduce((a, c) => { a + Number(c), 0 })
    // is there anything you see here I missed or didnt consider.
}



//  It's the academic year's end, fateful moment of your school report.The averages must be calculated.All the students come to you and entreat you to calculate their average for them.Easy! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//     getAverage([2, 2, 2, 2]), 2);
// getAverage([1, 2, 3, 4, 5,]), 3);
// getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
// Reduce the sum and divide by the length to get the average and then round down

function getAverage(arr) {
    return Math.Floor(arr.reduce((a, c) => { a + c, 0 }) / arr.length)
}

// find the numbers that only appear once and sum them
// brute force might be loop thru check for repeat push to array then sum that array
function repeats(arr) {
    // arr -> filter single values -> reduce
    // index of num is last index of num
    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n).reduce((a, c) => { a + c, 0 }))
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15)
console.log(repeats([9, 10, 19, 13, 19, 13]), 19)


// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array(in the same order).The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//     ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
//         ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]



function evenNumbers(array, number) {
    return array.filter(n => n % 2 === 0).slice(-number)
}


// function transformStr(str) {
//split str " " -> reverse -> join
// split str""-> map char === char.toUpperCase()?char.toLowerCase():char.toUpperCase
//yes you can chain all these.. but to start we can seperate out.
// let reversedStr = str.split(' ').reverse().join(' ')
// let transformedStr = reversedStr.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
// return transformedStr

// one string
const transformStr = str => str.split(' ').reverse().join(' ').split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
// }




function deleteNth(arr, allowed) {
    let count = {}

    return arr.filter((element) => {
        count[element] = count[element] ? count[element] + 1 : 1

        console.log(count[element], 'check')

        return count[element] <= allowed
    })
}


function deleteNth(arr, n) {

    const res = [];
    const countNums = {};

    arr.forEach((el, idx) => {
        countNums[el] = countNums[el] ? countNums[el] + 1 : 1;
        if (countNums[el] <= n) {
            res.push(el);
        }
    })

    return res;
}

//Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

//         arrayDiff([1, 2], [1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

//     arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3]

//     arrayDiff([], [4, 5]), [], "a was [], b was [4,5]"

//     arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]"

//     arrayDiff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []"

function arrayDiff(a, b) {
    // if(a.length===0||b.length === 0){return a}
    // set is kind of like an array
    let newSet = new Set(b) // means no duplicate - linear complexity
    // means filter all the values that do not appear in this set.
    return a.filter(n => !newSet.has(n))
}
//set is linear, .has is constant?
// contains() for strings,  includes () for arrays, has() for objects is property for your set.

/** 
You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example(just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

Hint:
spread array, sort it and grab the middle value.Throw that into indexOf the array itself - does time complexity matter for this problem ?
*/

function gimme(arr) {
    // sort -> grab 1st index
    // go back to original array 
    // find indexOf num from above
    //arr-> indexOf num^
    return arr.indexOf([...arr].sort((a, b) => a - b)[1])
}

console.log(gimme([2, 3, 1], '0'))


/**
 * 
 You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]) 
 */

function sortArray(array) {
    let oddList = array.filter(num => num % 2).sort((a, b) => b - a);

    return array.map(num => {
        return num % 2 ? oddList.pop() : num;
    });
}

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.For example:
const removeConsecutiveDuplicates = s => s.split(' ').filter((e, ind, arr) => e !== arr[ind - 1]).join(' ')