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

-What it does: Extracts a section of a string and returns it as a new string, without modifying the original string.

-How it works: Parameters:
indexStart
The index of the first character to include in the returned substring.
indexEnd Optional
The index of the first character to exclude from the returned substring.
Return value
A new string containing the extracted section of the string.

slice() extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.

-Time Complexity: why?:

-Example:
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));
// expected output: "the lazy dog."
console.log(str.slice(4, 19));
// expected output: "quick brown fox"
console.log(str.slice(-4));
// expected output: "dog."
console.log(str.slice(-9, -5));
// expected output: "lazy"

const str = 'The morning is upon us.';
str.slice(-3); // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1); // returns 'The morning is upon us'
str.slice(4, -1); // returns 'morning is upon us'

const str1 = 'The morning is upon us.', // the length of str1 is 23.
str2 = str1.slice(1, 8),
str3 = str1.slice(4, -2),
str4 = str1.slice(12),
str5 = str1.slice(30);
console.log(str2); // OUTPUT: he morn
console.log(str3); // OUTPUT: morning is upon u
console.log(str4); // OUTPUT: is upon us.
console.log(str5); // OUTPUT: ""

# split

-What it does:The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

-How it works: Parameters:
separator Optional
The pattern describing where each split should occur. Can be a string or an object with a Symbol.split method — the typical example being a regular expression. If undefined, the original target string is returned wrapped in an array.
limit Optional
A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.
The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
If limit is 0, [] is returned.
Return value
An Array of strings, split at each point where the separator occurs in the given string.
If separator is a non-empty string, the target string is split by all matches of the separator without including
Description
separator in the results. For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like myString.split("\t"). If separator contains multiple characters, that entire character sequence must be found in order to split. If separator appears at the beginning (or end) of the string, it still has the effect of splitting, resulting in an empty (i.e. zero length) string appearing at the first (or last) position of the returned array. If separator does not occur in str, the returned array contains one element consisting of the entire string.

If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters", without empty strings on either ends of the resulting string.

-Time Complexity: why?:

-Example:
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"
const chars = str.split('');
console.log(chars[8]);
// expected output: "k"
const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

const emptyString = '';

// string is empty and no separator is specified
console.log(emptyString.split());
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []

The following example defines a function that splits a string into an array of strings using separator. After splitting the string, the function logs messages indicating the original string (before the split), the separator used, the number of elements in the array, and the individual array elements.

function splitString(stringToSplit, separator) {
const arrayOfStrings = stringToSplit.split(separator)

console.log('The original string is: ', stringToSplit)
console.log('The separator is: ', separator)
console.log('The array has ', arrayOfStrings.length, ' elements: ', arrayOfStrings.join(' / '))
}

const tempestString = 'Oh brave new world that has such people in it.'
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'

const space = ' '
const comma = ','

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)

The original string is: "Oh brave new world that has such people in it."
The separator is: " "
The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.

The original string is: "Oh brave new world that has such people in it."
The separator is: "undefined"
The array has 1 elements: Oh brave new world that has such people in it.

The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
The separator is: ","
The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec

# substr - Deprecated

-What it does: The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

-How it works: Parameters

start

    The index of the first character to include in the returned substring.

length Optional

    The number of characters to extract.

Return value

A new string containing the specified part of the given string.
Description

A string's substr() method extracts length characters from the string, counting from the start index.

    If start >= str.length, an empty string is returned.
    If start < 0, the index starts counting from the end of the string. More formally, in this case the substring starts at max(start + str.length, 0).
    If start is omitted or undefined, it's treated as 0.
    If length is omitted or undefined, or if start + length >= str.length, substr() extracts characters to the end of the string.
    If length < 0, an empty string is returned.
    For both start and length, NaN is treated as 0.

Although you are encouraged to avoid using substr(), there is no trivial way to migrate substr() to either slice() or substring() in legacy code without essentially writing a polyfill for substr(). For example, str.substr(a, l), str.slice(a, a + l), and str.substring(a, a + l) all have different results when str = "01234", a = 1, l = -2 — substr() returns an empty string, slice() returns "123", while substring() returns "0". The actual refactoring path depends on the knowledge of the range of a and l.

-Time Complexity: why?:

-Example:
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"

const aString = 'Mozilla';

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''

# toLowerCase

-What it does: This method returns the calling string value to lower case.

-How it works: Syntax:toLowerCase()

Return value

A new string representing the calling string converted to lower case.
Description

The toLowerCase() method returns the value of the string converted to lower case. toLowerCase() does not affect the value of the string str itself.

-Time Complexity: why?:

-Example:
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."

console.log('ALPHABET'.toLowerCase()); // 'alphabet'

# toUpperCase

-What it does: This method returns the calling string value to uppercase.

-How it works: Syntax:toUpperCase()

Return value

A new string representing the calling string converted to upper case.
Exceptions

TypeError

    When called on null or undefined, for example, String.prototype.toUpperCase.call(undefined).

Description

The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

-Time Complexity: why?:

-Example:
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

console.log('alphabet'.toUpperCase()); // 'ALPHABET'

Conversion of non-string this values to strings

This method will convert any non-string value to a string, when you set its this to a value that is not a string:

const a = String.prototype.toUpperCase.call({
toString() {
return 'abcdef';
}
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);

# trim

-What it does:

-How it works:

-Time Complexity: why?:

-Example:
