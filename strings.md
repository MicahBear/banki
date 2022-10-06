# charAt

- What it does: Takes in an index and a string and returns the specific character at the location
- How it works: See if the specified index passed into the method matches any index available within the string, then returns the character at that index, if available.

- Time Complexity: O(1) why?:

- Example:
  let text1 = "Sample Text"
  console.log(text1.charAt(0)) -> S
  console.log(text1.charAt(text1.length-1)) -> t
  console.log(text1.charAt('0')) -> S
  console.log(text1.charAt('test')) -> S
  let test1 = ''
  console.log(text1.charAt('')) S

# charCodeAt

-What it does: Takes in an index value and a string and returns an integer for the UTF-16 value located at that index

-How it works: Sees if the specified index passed into the method matches any index available within the string, then returns the UTF-16 integer value at that index, if available. If the integer value is larger than 655536, then charCodeAt(i+1) should be used to get the other half of the value pair.

-Time Complexity: why?:

-Example:
let text2 = "Sample Text!"
console.log(text2.charCodeAt(0)); --> 83
console.log(text2.charCodeAt(text2.length-1)); --> 33
console.log(text2.charCodeAt(1)); --> 97
console.log(text2.charCodeAt(15)); --> NaN

# concat

-What it does: Joins 2 or more strings toether an outputs a single new string

-How it works: Similar to addition/string concatenation (+,+=), except concat() coerces its arguments directly to strings. The result is a String value not a String object.

-Time Complexity: why?:

-Example:
const hello = 'Hello, ';
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.
const greetList = ['Hello', ' ', 'Venkat', '!'];
"". concat(...greetList)
"Hello Venkat!"

# includes

-What it does: Performs a case-sensitive search to determine whether one string may be found within another string. Return true or false.

-How it works: A string to be searched for within str. Cannot be a regex.
includes(searchString, position): The position within the string at which to begin searching for searchString. (Defaults to 0.)

-Time Complexity: why?:

-Example:
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
const str = 'To be, or not to be, that is the question.'
console.log(str.includes('To be')) // true
console.log(str.includes('To be', 1)) // false

# indexOf

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# match

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# repeat

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# replace

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# search

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# slice

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# split

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# substr

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# toLowerCase

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# toUpperCase

-What it does:

-How it works:

-Time Complexity: why?:

-Example:

# trim

-What it does:

-How it works:

-Time Complexity: why?:

-Example:
