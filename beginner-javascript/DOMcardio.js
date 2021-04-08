// Make a div
    const div = document.createElement('div')

// add a class of wrapper to it
    div.classList.add('wrapper')

// put it into the body
    document.body.appendChild(div)

// make an unordered list
// add three list items with the words "one, two, three" in them
const ul = `
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
    `
// put that list into the above wrapper
div.innerHTML = ul

// create an image
    const img = document.createElement('img')

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy

img.src = 'https://www.nawpic.com/media/2020/puppy-nawpic-2.jpg';
img.width = 250;
img.alt = 'Cute Puppy';
img.classList.add('cute');
const list = document.querySelector('ul');

// Append that image to the wrapper
div.appendChild(img)

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const HTML = `
    <div>
        <p class='abc'>Start housetraining your pup the moment he comes home. 
        It is important, and surprisingly easy, to train your puppy without him making a single toilet or chewing mistake.</p>
        <p>Each mistake will make training considerably more difficult. </p>
    </div>
`;

const text = document.createRange().createContextualFragment(HTML);
document.body.insertBefore(text, div);

//console.log(document.querySelector('body .abc'))

// add a class to the second paragraph called warning
// remove the first paragraph
const secondP = document.body.getElementsByTagName('p')[1];
secondP.classList.add('warning')

const firstP = document.body.getElementsByTagName('p')[0];
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const generatePlayerCard = (name, age, height) => {
    const playerHTML = `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
    </div>
    `;
    return document.createRange().createContextualFragment(playerHTML);
};

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');


// make 4 player cards using generatePlayerCard
const player1 = generatePlayerCard('Camila', 25 , 1.75);
const player2 = generatePlayerCard('Juan', 15 , 1.60);
const player3 = generatePlayerCard('Adriana', 20 , 1.80);
const player4 = generatePlayerCard('Carlos', 10 , 1.55);

// append those cards to the div
newDiv.appendChild(player1);
newDiv.appendChild(player2);
newDiv.appendChild(player3);
newDiv.appendChild(player4); 
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', newDiv)

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
newDiv.querySelectorAll('.playerCard').forEach((card)=>{
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete Player';

    const deleteCard = () => {
        card.remove();
    }
    deleteBtn.addEventListener('click', deleteCard)
    card.appendChild(deleteBtn);
});

// select all the buttons!
// make out delete function
// loop over them and attach a listener