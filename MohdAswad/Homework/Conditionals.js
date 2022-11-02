// ## The World Translator

// Write an if statement that writes Hello World in different languages. Store a language in a variable.

// - If the language is `"English"`, log `"Hello World"`
// - If the language is `"French"`, log `"Bonjour le monde"`
// - If the language is `"Malay"`, log `"Hai dunia"` (I think?)
// - Add as many others as you wish!

var langMe = prompt("Language?");
if(langMe=="English"){
    console.log("Hello World");
} else if (langMe=="Malay"){
    console.log("Hai dunia");
} else if (langMe=="French"){
    console.log("Bonjour le monde");
}

// ## The Grade Assigner

// Store a `testScore` in a variable. Give the user a score (either `"A"`, `"B"`, `"C"`, `"D"`, or `"F"`) based on those test results.
var testScore = prompt("score?");
if (testScore>80) {
    console.log("A");
} else if(testScore>70){
    console.log("B");
} else if (testScore>60){
    console.log("C");
} else if(testScore>50){
    console.log("D")
} else if(testScore>40){
    console.log("E")
} else {
    console.log("F")
}

// ## Air Conditioning

// Store the current temperature, whether the A/C is functional, and what the desired temperature is.

// - If the airconditioner is functional and the current temperature is above the the desired temperature:
//   - Log `"Turn on the A/C Please"`
// - If the airconditioner is non-functional and the current temperature is above the the desired temperature
//   - Log `"Fix the A/C now!  It's hot!"`
// - If the airconditioner is non-functional and the current temperature is below the the desired temperature
//   - Log `"Fix the A/C whenever you have the chance...  It's cool..."`

var curTemp = prompt("current temperature?");
if (curTemp>30){
    console.log("Fix the A/C now!  It's hot!")
} else if (curTemp>24){
    console.log("Turn on the A/C Please")
} else if (curTemp>20){
    console.log("Fix the A/C whenever you have the chance...  It's cool...")
} 

// ## You and Your Government

// Write a program that stores a user age and logs a message based on that age.

// | Age   | Message                                          |
// |-------|--------------------------------------------------|
// | >= 35 | 'You can vote AND hold any place in government!' |
// | >= 25 | 'You can vote AND run for the Senate!'           |
// | >= 18 | 'You can vote!'                                  |
// | ELSE  | 'You can't vote yet'                             |

var curAge= prompt("Age?");
if (curAge>=35){
    console.log("You can vote AND hold any place in government!")
}else if (curAge>=25){
    console.log("You can vote AND run for the Senate!")
}else if (curAge>=18){
    console.log("You can vote!")
} else {
    console.log("You can't vote yet")
}
// Write an if statement that gives a user the nickname of their score, based on par and logs the score's nickname.

// | Score      | Nickname       |
// |------------|----------------|
// | 1          | "Hole in one"  |
// | <= par - 2 | "Eagle"        |
// | par - 1    | "Birdie        |
// | par        | "Par"          |
// | par + 1    | "Bogey"        |
// | par + 2    | "Double Bogey" |
// | >= par + 3 | "Not sure"     |

var golfScore = parseInt(prompt("Golf stroke?"));
var golfPar = parseInt(prompt("PAR?"));
if (golfScore==1){
    console.log("Hole in one")
} else if(golfScore<=2){
    console.log("Eagle")
}else if(golfScore<=(golfPar-1)){
    console.log("Birdie")
}else if(golfScore==(golfPar)){
    console.log("Par")
}else if(golfScore==(golfPar+1)){
    console.log("Bogey")
}else if(golfScore==(golfPar+2)){
    console.log("Double Bogey")
}else if(golfScore>=(golfPar+3)){
    console.log("Not sure")
}

// ## Serge Says

// Store a user's message.

// - If the user asks a question (e.g. the message ends in `?`)
//   - Log `"Sure."`
// - If the user yells (e.g. the message is in all capitals)
//   - Log `"Woah, chill out!"`
// - If the user doesn't say anything (e.g. the message is empty OR only spaces)
//   - Log `"Fine. Be that way!"`
// - Otherwise:
//   - Log `"Whatever."`

let dismessage = prompt("message?");
dismessage = dismessage.trim();
let checkUppercase = dismessage.toUpperCase;
    if (dismessage.includes("?",0)) {
        console.log("Sure")
    }else if (checkUppercase == dismessage) {
    console.log("Woah, chill out!")
}else if (dismessage="") {
    console.log("Fine. Be that way!")
}

// ## The Pluralizer
const pluralize = (val, word, plural = word + 's') => {
    const _pluralize = (num, word, plural = word + 's') =>
      [1, -1].includes(Number(num)) ? word : plural;
    if (typeof val === 'object')
      return (num, word) => _pluralize(num, word, val[word]);
    return _pluralize(val, word, plural);
  };

  var pluMe =prompt("Pluralize word?");
  var pluCnt =prompt("Count?");
  console.log(pluralize(pluCnt, pluMe));

//   ## The Rest

//   - Implement a Rock, Paper, Scissors single game
//   - Implement a Rock, Paper, Scissors best of three game
//   - Anything else you can think of!

var choice1 =prompt("Rock, Paper, Scissors?");
var choice2 =prompt("Rock, Paper, Scissors?");
if (choice1 === "paper") {
    if (choice2 === "rock") {
        console.log("paper wins");
    } else {
        if (choice2 === "scissors") {
            console.log("scissors wins");
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            console.log("rock wins");
        } else {
            if (choice2 === "paper") {
                console.log("scissors wins");
            }
        }
    }
} else if (choice1 === "rock") {
    if (choice2 === "paper") {
        console.log("rock wins");
    } else {
        if (choice2 === "scissors") {
            console.log("scissors wins");
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            console.log("rock wins");
        } else {
            if (choice2 === "paper") {
                console.log( "scissors wins");
            }
        }
    }
}else if (choice1 === "scissors") {
    if (choice2 === "scissors") {
        console.log("paper wins");
    } else {
        if (choice2 === "scissors") {
            console.log("scissors wins");
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            console.log("rock wins");
        } else {
            if (choice2 === "paper") {
                console.log("scissors wins");
            }
        }
    }
}