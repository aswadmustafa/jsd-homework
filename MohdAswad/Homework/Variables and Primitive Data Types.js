/*
## The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.

**Bonus**: Get the current year with JavaScript
*/
const d = new Date();
let curYear = d.getFullYear();
var birthYear = prompt("Pls input your year of birth?");
var calcMe1 = curYear - birthYear;
var calcMe2 = birthYear - curYear;
console.log("They are either "+ calcMe1 +" or " + calcMe2);

/*## The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat in total for the rest of your life.
- Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

**Bonus**: Get the details with `prompt`

---*/
var maxAge = prompt("Max Age?");
var estAmount = prompt("estimated amount per day?");
var totNeed = estAmount*365*(maxAge-calcMe1)
console.log("You will need "+ totNeed +" to last you until the ripe old age of " + maxAge);

// ## The Geometrizer

// Calculate the properties of a circle, using the definitions here.

// - Store a radius into a variable.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
// - Calculate the area based on the radius, and output "The area is NN".

// ---

var radMe = prompt("a radius?");
var area = Math.PI * radMe * radMe;
var circumference=2*Math.PI*radMe;
console.log(circumference);
console.log(area);

// ## The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// - Store the temperature (in celsius) into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."
//To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
//To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
var tempC = prompt("temperature (in celsius)?");
var convOne =tempC*1.8+32
console.log(tempC+"°C is "+convOne+"°F");
var convTwo =(convOne-32)*0.5556
console.log(convOne+"°F is "+convTwo+"°C");