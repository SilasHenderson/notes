// Basic JavaScript freecodecamp

var a;                             // undeclared variables get type 'undefined'
var a;                             // 8 data types: undefined, null, bool, string, symbol, bigint, number, object
var a = 5;                         // Declare variable named 'a' and assign initial value '5' with assignment operator (=)
var a = "banana"                   // a is of string type containing "banana" string literal

NaN = 5/undefined                  // 'NaN' is a number type
var thisIsCamelCase = "camel"      // camel-case

// Arrays JavaScript freecodecamp

.pop(), .push()                    // remove or add to end of array
.shift, .unshift()                 // remove or add to start of array

/* 'VAR' VS. 'LET' */
function run(){                    
   {
       var a = 1;                   // 'var' scopes to enclosing function
       let b = 2;                   // 'let' scopes to enclosing block
   {
   console.log(a) // 1
   console.log(b) // error
      
   let c; let c;                    // 'let' can be declared only once: not valid
   var d; var d;                    // 'var' can be declared more than once: valid
}

// Regex freecodecamp

/dog|cat/.test('dog')              // true, Alternation OR operator |
/dog/i.test('Dog')                 // true, ignore case flag i
/do./.test('dog')                  // true, wildcard character . matches any one character
/d[uo]g/.test('dog')               // true for dug and dog, character class [] defines multiple characters to search for
/d[u-z]g/.test('dog')              // true for dug not dog, search for range in character class with hyphen
/[^aeiou]/ig.test('dog')           // true, negated character set, matches all characters that are not vowels

"dog and fish".match(/fish/)       // ['fish', index:8, input: 'dog and fish', groups: undefined]
"dog and dog".match(/dog/g)        // ['dog', 'dog'], global search flag
"Fish and fish".match(/fish/gi)    // ['Fish', 'fish'], multiple flags
"dog".match(/[a-z0-9]/)            // ['d', 'o', 'g'], search all letters and numbers within character set
"3 blind mice.".match(/[^a-z0-9]/ig)// [' ', ' ', '.']
"aabc".match(/a+/g)                // ['aa'], match character that appears one or more times in a row

let ternary = condition : true ? false
