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

-What it does: This method when given one argument a substring to search for, searches the entire calling string and returns the index of the first occurance. If given a second argument: a number, the method returns the index of the first occurrence of the specified substring at a position greater than or equal to that position number.

-How it works: When passing in the substring that you are searching indexOf searches the string and returns the index when it is first found.

-Time Complexity: why?:

-Example:
const myString = 'brie, pepper jack, cheddar';
console.log(`myString.indexOf("cheddar") is ${myString.indexOf('cheddar')}`);
// logs 19
const myCapString = 'Brie, Pepper Jack, Cheddar';
console.log(`myCapString.indexOf("cheddar") is ${myCapString.indexOf('cheddar')}`);
// logs -1
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"
console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

# match

-What it does: Retrieves the result of matching a string against a regular expression (regrex)

-How it works: calls the match method of the arguiment with the string as the first parameter. Returns an array with contents that depend on the presence or absence of the global (g) flag

-Time Complexity: why?:

-Example:
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);
// expected output: Array ["T", "I"]

const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)_)/i;
const found = str.match(re);
console.log(found);
// logs [ 'see Chapter 3.4.5.1',
// 'Chapter 3.4.5.1',
// '.1',
// index: 22,
// input: 'For more information, see Chapter 3.4.5.1' ]
// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)_)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.

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
