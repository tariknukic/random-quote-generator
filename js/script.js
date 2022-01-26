/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array is an array of five quote objects. Every object has a 'quote' and 'source' property, and two of the object have
 * additional properties, such as 'citation', 'year' and 'tags'.
***/
let quotes = [
  { 
    quote: 'The paradigm case of a human action is when something is done in order to bring about an end.', 
    source: 'R. S. Peters',
    citation: 'The Concept of Motivation',
    year: '1958'
  },
  {
    quote: 'It is one of my sources of happiness never to desire a knowledge of other people\'s business.', 
    source: 'Frank Zappa'
  },
  {
    quote: 'Facts do not cease to exist because they are ingored.', 
    source: 'Aldous Huxley',
    citation: 'Complete Essays-Vol. II',
    year: '1926-1929',
    tags: ['fact', 'ingorance', 'truth']
  },
  {
    quote: 'No one has ever become poor by giving.', 
    source: 'Anne Frank'
  },
  {
    quote: 'In history, good intentions do not always make good consequences.', 
    source: 'Alija Izetbegovic'
  }
];


/***
 * `getRandomQuote` function returns a random quote object from the quotes array using a random generated number
***/
function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}


/***
 * `printQuote` function generates an HTML code for displaying a random qoute from the quotes array
 * with all of its properties
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let stringHTML = `<p class="quote">${randomQuote.quote}</p>
                    <p class="source">${randomQuote.source}
                  `;

  if (randomQuote.citation) {
    stringHTML += `<span class="citation">${randomQuote.citation}</span>`;
  }     
  if (randomQuote.year) {
    stringHTML += `<span class="year">${randomQuote.year}</span>`;
  } 
  if (randomQuote.tags) {
    stringHTML += `<span class="tags">${randomQuote.tags}</span>`;
  }
  stringHTML += `</p>`; 

  document.getElementById('quote-box').innerHTML = stringHTML;
       
}


//'getRandomNumber' function generates a random number in the range from 0 to maxNum - 1
function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
};

//'getRandomColor' function generates a random color in the rgb() format
function getRandomColor() {
  return `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
};

//'randomChangeBackgroundColor' changes the background color of the body element
function randomChangeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

//click event listener for the print qoute button for changing the background color of the body 
document.getElementById('load-quote').addEventListener('click', randomChangeBackgroundColor);


// Two 'setInterval' methods used to change print a random quote and change the background color every 10 seconds
setInterval(printQuote,10000);
setInterval(randomChangeBackgroundColor,10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);