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

-What it does: method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together

-How it works:An integer between 0 and +Infinity, indicating the number of times to repeat the string. A new string containing the specified number of copies of the given string

-Time Complexity: why?:

-Example:
'abc'.repeat(-1) // RangeError
'abc'.repeat(0) // ''
'abc'.repeat(1) // 'abc'
'abc'.repeat(2) // 'abcabc'
'abc'.repeat(3.5) // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0) // RangeError
const chorus = 'Because I\'m happy. ';
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
// expected output: "Chorus lyrics for "Happy": // repeated 27 times.

# replace

-What it does: Returns a new string with one, some, or all matches of pattern replaced by a replacement. The pattern can be a string or a RegExp and the replacement can be a string or a function called for each match.

-How it works: method does not mutate the string value it's called on. It returns a new string.
function:The arguments to the function are as follows:

match

    The matched substring. (Corresponds to $& above.)

p1, p2, …, pN

    The nth string found by a capture group (including named capturing groups), provided the first argument to replace() is a RegExp object. (Corresponds to $1, $2, etc. above.) For example, if the pattern is /(\a+)(\b+)/, then p1 is the match for \a+, and p2 is the match for \b+. If the group is part of a disjunction (e.g. "abc".replace(/(a)|(b)/, replacer)), the unmatched alternative will be undefined.

offset

    The offset of the matched substring within the whole string being examined. For example, if the whole string was 'abcd', and the matched substring was 'bc', then this argument will be 1.

string

    The whole string being examined.

groups

    An object whose keys are the used group names, and whose values are the matched portions (undefined if not matched). Only present if the pattern contains at least one named capturing group.

The exact number of arguments depends on whether the first argument is a RegExp object — and, if so, how many capture groups it has.

-Time Complexity: why?:

-Example:
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
const str = 'Twas the night before Xmas...';
const newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr); // Twas the night before Christmas...
const re = /(\w+)\s(\w+)/;
const str = 'John Smith';
const newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
const newString = 'abc12345#$_%'.replace(/([^\d]_)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$\*%

# search

-What it does: Executes a seach for a match between a regular expression and this String object

-How it works: Parameters :regexp
A regular expression object, or any object that has a search method.
If regexp is not a RegExp object and does not have a search method, it is implicitly converted to a RegExp by using new RegExp(regexp).
Return value
The index of the first match between the regular expression and the given string, or -1 if no match was found
String.prototype.search() itself is very simple — it simply calls the Symbol.search method of the argument with the string as the first parameter. The actual implementation comes from

-Time Complexity: why?:

-Example:
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;
console.log(paragraph.search(regex));
// expected output: 43
console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation

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
