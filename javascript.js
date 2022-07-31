// Regex freecodecamp

/dog|cat/.test('dog')              // true, Alternation OR operator |
/dog/i.test('Dog')                 // true, ignore case flag i
/do./.test('dog')                  // true, wildcard character . matches any one character
/d[uo]g.test('dog')                // true for dug and dog, character class [] defines multiple characters to search for
/d[u-z]g.test('dog')               // true for dug not dog, search for range in character class with hyphen
/[^aeiou]/ig.test('dog')           // true, negated character set, matches all characters that are not vowels

"dog and fish".match(/fish/)       // ['fish', index:8, input: 'dog and fish', groups: undefined]
"dog and dog".match(/dog/g)        // ['dog', 'dog'], global search flag
"Fish and fish".match(/fish/gi)    // ['Fish', 'fish'], multiple flags
"dog".match(/[a-z0-9]/)            // ['d', 'o', 'g'], search all letters and numbers within character set
"3 blind mice".test(/[^a-z0-9]/ig) // [' ', ' ', '.']
"aabc".match(/a+/g)                // ['aa'], match character that appears one or more times in a row
