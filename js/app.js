'use strict';
console.log('The category Is')

// Globals

let cottonballsArray = [];
let votingRounds = 25;

// DOM Windows

let imageContainer = document.getElementById('image-container');
let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let imageThree = document.getElementById('image-three');

let resultsButton = document.getElementById('show-results-button');
let resultsList = document.getElementById('results-container');


// Constructor Function

function cottonballs(name, imgExtension = 'jpg'){
  this.name = name;
  this.img = `image/${name}.${imgExtension}`;
  this.votes = 0;
  this.views = 0;
}

// Helper Function

function randomIndex(){
  return Math.floor(Math.random() * cottonballsArray.length);
}

function renderImg(){

  let imageOneIndex = randomIndex();
  let imageTwoIndex = randomIndex();
  let imageThreeIndex = randomIndex();

  // ** Validation to make sure numbers are unique **

  while (imageOneIndex === imageTwoIndex || imageOne === imageThreeIndex || imageTwoIndex === imageThreeIndex){
    imageTwoIndex = randomIndex();
    imageThreeIndex = randomIndex();

  }
  imageOne.src = cottonballsArray[imageOneIndex].img;
  imageTwo.src = cottonballsArray[imageTwoIndex].img;
  imageThree.title = cottonballsArray[imageThreeIndex].name;
  imageOne.title = cottonballsArray[imageOneIndex].name;
  imageTwo.title = cottonballsArray[imageTwoIndex].name;
  imageThree.title = cottonballsArray[imageThreeIndex].name;
  imageOne.alt = `this is an image of ${cottonballsArray[imageOneIndex].name}`;
  imageTwo.alt = `this is an image of ${cottonballsArray[imageTwoIndex].name}`;
  imageThree.alt = `this is an image of ${cottonballsArray[imageThreeIndex].name}`;


  cottonballsArray[imageOneIndex].views++;
  cottonballsArray[imageTwoIndex].views++;
  cottonballsArray[imageThreeIndex].views++;

  }



// **** EVENT HANDLERS *****
function handleClick(event){
 

  let imageClicked = event.target.title;

  console.log(imageClicked);

 
  for(let i = 0; i < cottonballsArray.length; i++){
    if(imageClicked === cottonballsArray[i].name){
      cottonballsArray[i].votes++;
    }
  }
  
  votingRounds--;

  
  renderImg();

  
  if(votingRounds === 0){
    imageContainer.removeEventListener('click', handleClick);
  }
}


function handleShowResults(){
  
  if(votingRounds === 0){
    for(let i = 0; i < cottonballsArray.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${cottonballsArray[i].name} - views: ${cottonballsArray[i].views} & votes: ${cottonballsArray[i].votes}`;
      resultsList.appendChild(liElem);
    }
    resultsButton.removeEventListener('click', handleShowResults);
  }

}



// **** EXECUTABLE CODE *****
let bag = new cottonballs('bag');
let banana = new cottonballs('banana');
let bathroom = new cottonballs('bathroom');
let boots = new cottonballs('boots');
let breakfast = new cottonballs('breakfast');
let bubblegum = new cottonballs('bubblegum');
let chair = new cottonballs('chair');
let cthulhu = new cottonballs('cthulhu');
let dog-duck = new cottonballs('dog-duck');
let dragon  = new cottonballs('dragon');
let pen = new cottonballs('pen');
let pet-sweep = new cottonballs('pet-sweep');
let scissors = new cottonballs('scissors');
let shark = new cottonballs('shark');
let sweep = new cottonballs('sweep');
let tauntaun = new cottonballs('tauntaun');
let unicorn = new cottonballs('unicorn');
let water-can = new cottonballs('water-can');
let wine-glass = new cottonballs('wine-glass');

cottonballs.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog-duck, dragon, pen, pet-sweep, scissors, shark, sweep, tauntaun, unicorn, water-can, wine-glass);

renderImg();

image.cottonballsContainer.addEventListener('click', handleClick);
resultsButton.addEventListener('click', handleShowResults);

// console.log(goatArray);
