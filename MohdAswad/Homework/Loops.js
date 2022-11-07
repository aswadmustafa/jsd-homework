// ## The even/odd reporter

// Write a `for` loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (x = 0; x < 21; x++){
    if (x%2==0) {
        console.log(x+" is even")
    } else {
        console.log(x+" is odd")
    }

}

// ## Multiplication Tables

// Write a `for` loop that will iterate from 1 to 12. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (x = 1; x < 13; x++){
    console.log(x+"*9="+x*9);
}

// ## The Grade Assigner

// Use the grade assigner code you wrote from the conditionals exercises for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
for (x = 60; x < 101; x++){

var testScore = x;
if (testScore>90) {
    console.log("For "+x+", you got an A.");
} else if(testScore>80){
    console.log("For "+x+", you got an B.");
} else if (testScore>70){
    console.log("For "+x+", you got an C.");
} else if(testScore>60){
    console.log("For "+x+", you got an D.");
} else if(testScore>50){
    console.log("For "+x+", you got an E.");
} else {
    console.log("For "+x+", you got an F.");
}
}

// ## Golf

// Using the Golf condition you made before in the conditionals exercise, log out the nickname of every score from 1 to 8 on a par 5 hole
for (x = 1; x < 9; x++){

var golfScore = x;
for (y = 3; y < 6; y++){
var golfPar = y;
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
}
}

// ## 99 Bottles of Beer

// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics [here](http://www.99-bottles-of-beer.net/lyrics.html).

// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

for (x = 99; x > 0; x--){
    let y =x-1;
    if( x==1) {
        console.log(x+" bottle of beer on the wall, "+x+" bottle of beer.");
        console.log("Take one down and pass it around, " + y +" bottle of beer on the wall.")
    } else {
        console.log(x+" bottles of beer on the wall, "+x+" bottles of beer.");
        console.log("Take one down and pass it around, " + y +" bottles of beer on the wall.")
    }
}
