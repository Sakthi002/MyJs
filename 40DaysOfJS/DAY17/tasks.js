console.log("******************** TASKS DAY 17 ********************");
// 1. Find the Most Frequent Word in a Paragraph
// Consider the follwoing HTML:

// <div id="text">This is a test. This test is only a test.</div>
// Now, find and display the most frequently occurring word. Also put a count of occurance beside it.
// Hints:
// Use document.querySelector() or getElementById() to select the paragraph.
// Convert the text into an array of words.
// Use querySelector() to display the most frequent word along with the count inside another <div>.

const divElem = document.getElementById("text");
const divText = divElem.innerText.toLowerCase();

// Split into words, removing punctuation
  const words = divText.match(/\b\w+\b/g);

let occurrences = words.reduce((acc, curr) => {

    acc[curr] = (acc[curr] || 0) + 1;

    return acc;

}, {});


let highestValue = Math.max(...Object.values(occurrences));

let freqWord = Object.keys(occurrences).find(word => occurrences[word] === highestValue);

document.getElementById("result").innerText = `${freqWord} (${highestValue})`
 
// 2. Create a zebra pattern
// Consider the following HTML:

// <ul id="cars">
//     <li>BMW</li>
//     <li>Mahindra</li>
//     <li>Audi</li>
//     <li>Toyota</li>
//     <li>Honda</li>
//     <li>Hundai</li>
//     <li>Tata</li>
//     <li>Suzuki</li>
// </ul>
// Now put alternate colors and background colors to each of the list tags. for example,
// If tne BMW is in white color text, the background should be in black color.
// Then for the next car it will be reversed, the color is black and the background is white.
// Then again the next one is white color and background black
// So on.


let liElems = document.querySelectorAll("ul#cars li");
console.log(liElems);

liElems.forEach((element, index) => {
    
    if(index % 2 === 0) {

        element.style.backgroundColor = "black";
        
        element.style.color = "white";
    } else {
        
        element.style.backgroundColor = "white";
        
        element.style.color = "black";
    }
})

// 3. Write different ways we can access DOM and what they returns
// document.getElementById - returns HTML Element
// document.getElementsByClassName - returns HTMLCollection
// document.getElementsByTagName - returns HTMLCollection
// document.querySelector - returns Element
// document.querySelectorAll - returns NodesList

// 4. Find and Replace Text Inside a Page
// Write a script that finds all occurrences of a word inside a <p> tag and replaces them with another word dynamically.

const para = document.getElementById("textPara");
const findInput = document.getElementById("findWord");
const replaceInput = document.getElementById("replaceWord");
const replaceBtn = document.getElementById("replaceBtn");

replaceBtn.addEventListener("click", () => {
    const findWord = findInput.value;
    const replaceWord = replaceInput.value;

    if (!findWord) return alert("Please enter a word to find");

    // Split the paragraph text into words
    const words = para.innerText.split(" ");

    // Replace matching words
    const updatedWords = words.map(word => {
        // Compare case-insensitively and remove punctuation for exact match
        const cleanWord = word.replace(/[.,!?;:]/g, ""); 
        return cleanWord.toLowerCase() === findWord.toLowerCase() ? replaceWord : word;
    });

    // Join back into a string
    para.innerText = updatedWords.join(" ");
});

// 5. Extract and Count Unique Links from a Page
// Count all the unique hyperlinks (<a>) in a page and display their count.

// Select all <a> tags
const links = document.querySelectorAll("a");

// Object to track unique hrefs
const uniqueLinksObj = {};

// Loop through all links
links.forEach(link => {
    const href = link.href;
    if (!uniqueLinksObj[href]) {
        uniqueLinksObj[href] = true;
    }
});

// Count the unique keys
const uniqueCount = Object.keys(uniqueLinksObj).length;

// Display the count
document.getElementById("linkCount").innerText = `Unique links: ${uniqueCount}`;
