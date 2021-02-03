'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonant = "";
    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u" ) {
            console.log(s[i]);
        } else {
            consonant = consonant + s[i];
        }
    }
    for ( let i = 0 ; i < consonant.length ; i++ ) {
        console.log(consonant[i]);
    }
}

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonant = "";
    let vowels = new Set("aeiou");
    for ( let i = 0 ; i < s.length ; i++ ) {        
        if ( vowels.has(s[i]) ) {
            console.log(s[i]);
        } else {
            consonant = consonant + s[i];
        }
    }
    for ( let i = 0 ; i < consonant.length ; i++ ) {
        console.log(consonant[i]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}