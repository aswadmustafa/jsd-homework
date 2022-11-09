// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
const heading = document.querySelector("body");
 heading.style.fontFamily = "Arial, sans-serif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
var nickname = document.getElementById("nickname");
nickname.textContent = "Rossi";
var favorites = document.getElementById("favorites");
favorites.textContent = "VR46";
var hometown = document.getElementById("hometown");
hometown.textContent = "ITALY";

// Iterate through each li and change the class to "list-item". Add a style tag that sets a rule for "list-item" to make the color "red".
//const item = document.querySelectorAll("ul li");
for (x=0; x<3;x++){
    var firstItem = document.querySelectorAll("li")[x];
    const classMe2 = firstItem.setAttribute("class", "list-item");
}


// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
 let imgMe = document.querySelector('img')
 let srcMe = imgMe.src
 srcMe = 'https://picsum.photos/400/500'
 imgMe.srcset=srcMe


