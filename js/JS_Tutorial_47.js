// Regular Expressions - Metacharacters in JS
/*
* In the previous tutorial, we studied about the regular expression and it’s methods. If you have not watch the tutorial on basics of regular expression, check tutorial#46. In today’s tutorial, we explore metacharacters in JavaScript. This tutorial gets us up to speed quickly with regular expressions.

* As we know, Regular expressions are the patterns that is used to match character combinations in strings. Regular Expression, or regex in short, is extremely and amazingly powerful in searching and manipulating text strings. Regex is supported in all the scripting languages (such as Python, PHP, and JavaScript); as well as general purpose programming languages such as Java. Getting started with regex may not be easy due to its confusing syntax, but it is certainly worth the investment of our time.

! Metacharacters in Regular Expressions:-
* Metacharacters are the building blocks of regular expressions. Characters in Regular expression are understood to be either a metacharacter with a special meaning or a regular character with a literal meaning. Following are some common metacharacters in regukar expressions.

< a href = "RegularExpressions_47.jpeg>"

! Examples of Metacharacters:-
* Following are the some examples of how we can use metacharacters in JavaScript.

! Do a global search for "m.d" in a string:
? let reg = /m.d/g;
? let str = "He's mad!"; //matches

! Do a global search for at least one "e":
? let reg = /o+/g;
? let str = "Codeeeee!";//matches

! Do a global search for a "5", followed by zero or more "0" characters:
? let reg = /50*/ //g; 
/*
? let str = "5, 500 or 5000?"; //matches

! Do a global search for "javaScript" at the end of a string:
? let reg = /javaScript$/g;
? let str = "Welcome to the tutorial of javaScript"; //matches

! Do a global search for "javaScript" at the beginning of a string:
? let reg = /^javaScript/g;
? let str = "javaScript supports OOP";//matches

! Do a global search for "code" followed by " harry":
? let reg = /code(?= harry)/g;
? let str = "code with harry"; //matches

! Do a global, case insensitive search for "code" not followed by "JavaScript":
? let reg = /code(?! JavaScript/gi;
? let str = "Code JavaScript"; //does not match
*/
console.log('This is tutorial 47');

let regex = /harrydfgy/

// Lets look into some of the metacharacter symbols
regex = /^harrfdc/        // ^ = carot symbol (starts with h) {means expression will match if string starts with}         

regex = /harry$/           // means expression will match if string ends with ($ at the end of the string means "string ends with")
regex = /h.rry/            // matches any one character
regex = /h*rry/            // matches any 0 or more characters
regex = /ha?rryi?t/         // ? after character means that character is optional
regex = /h\*rry/

let str = "h*rry means codewith"
let result = regex.exec(str)
console.log("The result from exec is",result)

if (regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`)
}
