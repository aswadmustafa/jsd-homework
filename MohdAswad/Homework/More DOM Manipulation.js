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


 const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false
    }
  ];

//   Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// If you have read it, make the text color green. If you haven't, make the text color red.

 for ( let i = 0; i < books.length; i++ ) {
    const bookme = books[i];
    const myParagraph = document.createElement("p");
    myParagraph.innerText = "'"+bookme.title + "', author: "+bookme.author;
    if(bookme.alreadyRead){
        myParagraph.style.color = "green";
    }else{
        myParagraph.style.color = "red";
    }
    document.body.appendChild(myParagraph);
 }


