// Javascript Regular Expressions & related functions
/*
* When we first see the Regular Expressions, they may seem like a random string. While they might look awkward because they have confusing syntax, they are also extremely useful. This tutorial acts as an introduction to using regular expressions in JavaScript. In this tutorial, we will cover some useful ways to use them. As we know, regular expressions are notably hard to read as they gain in complexity, but it is necessary for the developer to have some knowledge of regular expressions to know what is being tested. 

! What are Regular Expressions ?
* Regular expressions are the patterns that are used to match character combinations in strings. Regular expressions are a powerful way of doing search and replace in strings. It is a small language which is a part of many programming languages like JavaScript, Python, and Java. Regular expression allows us to check a string of characters like a password for patterns, to see if the set password matches with the pattern defined by that regular expression. In this tutorial, we will create a regular expression by using forward slashes ( / ) to enclose the pattern. 

! Syntax:-
* /pattern/modifiers;

! Example:-
? let str = /Code with Harry/i;
* Here /Code with Harry/i is a regular expression. “Code with Harry” is a pattern and “i” is a modifier that modifies the search to be case-insensitive. If we write /Code with Harry/g, here “g” performs a global match that will find all matches rather than stopping after the first match.

! Regular Expressions Methods:-
* Regular expressions are used with the RegExp methods like test() and exec() and with the string methods match() , replace() , search() , and split() . These methods are explained in detail below with examples.

! exec():-
* This method will executes a search for a match in a string. It returns an array of information or null on a mismatch. Here is an example:

? let obj = /h/.exec("Code with harry");

! test():-
* This method tests for a match in a string. It returns true or false. Here is an example:

? let str = /Code/;
? str.test("Code with harry!");

! match():-
* This method will return an array containing all of the matches, including capturing groups, or null if no match is found. Here is an example:

? let str = "JavaScipt tutorial from begineer to advance level"; 
? let result = str.match(/ial/);

! search():-
* This method will tests for a match in a string. It returns the index of the match, or -1 if the search fails. Here is an example:

? let str = 'Code with harry';
? let reg = /od/;
? // search if the pattern is in string variable
? let result = str.search(reg);
? console.log(result); 

! replace():-
* This method will executes a search for a match in a string, and replaces the matched substring with a replacement substring. Here is an example:

? let str = "Code with abc!";
? let result = str.replace("abc", "Harry");

! split():-
* This method uses a regular expression or a fixed string to break a string into an array of substrings. Here is an example:

? // splitting strings into array elements
? const test = /[\s,]+/;
? let res = 'Hello world! '.split(re);
? console.log(result); // ["I", "am", "learning", "JavaScript", "RegEx"]

*/
console.log("This is tutorial 46")

let reg = /harry/       // This is a regular expression literal in JS
reg = /harry/g          // (g stands for global flag checks full string)
// reg = /harry/i         // (i means case insensitive)


console.log(reg);
console.log(reg.source);

let s = "This is great code with harry and also harry bhai"

// ! Functions to match expression
// ? 1. exec() - This function will return an array for match or null for no match

let result = reg.exec(s);

// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); // ---> We can use multiple exec with global flag

if (result){
    console.log(result);        
    console.log(result.input);
    console.log(result.index);
}

// 2. test() - return true or false
let result2 = reg.test(s);
console.log(result2);        // This will only print true of 'reg' is there in string 'a'

// 3. match() - It will return an array of results or null
// let result = reg.match(s);           // This is wrong
let result3 = s.match(reg)
console.log(result3)

// 4. search() => returns index of first match else  -1
let result4 = s.search(reg)
console.log(result4)

//5 . replace() - returns new replaced string with all the replacements (if no global flag is given, first match will be replaced)
let result5 = s.replace(reg,'SHUBHAM')
console.log(result5)
