
///html elements 
const square = document.querySelectorAll('.square'); 
const mole = document.querySelectorAll('.mole'); 
const timeLeft = document.querySelector('#time-left'); 
console.log(timeLeft); 
//we use a let to target the score as it will change as we progress on the game
let score = document.querySelector('#score'); 
console.log(score.textContent); 
//initialization of the elements that are displayed on the browser
let result = 0; 
let currentTime = timeLeft.textContent; 
console.log(currentTime); 

///functions 
function randomSquare(){
    //we remove the class mole to every square, allowing the mole to be set to appear randomly on the grid
    square.forEach( className => {
        className.classList.remove('mole'); 
    }); 
    //now we are defining a random position for the moles in the grid, we use math.floor so the position will be always under or equivalent to 9 (our number of squares)
    //math.floor : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor
    //math.random : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
    let randomPosition = square[Math.floor(Math.random() * 9)]; 
    //we then add the moles class to it to let mole appear on the grid 
    randomPosition.classList.add('mole');
    //next we asign the random position to hitPosition for us to use later
    // element.id : https://developer.mozilla.org/fr/docs/Web/API/Element/id
    hitPosition = randomPosition.id; 
}

//we now asign an event listener on every square id to be able to know when the user hit the mole
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        //did the user hit a mole which was on one of the squares (hitPosition = square.id)? 
        if(id.id === hitPosition){
            console.log("The user hit a mole"); 
            //yes, so we add one point to the result
            result = result + 1; 
            console.log(`The user has ${result} points`); 
            //we visually display the result 
            score.textContent = result; 
            console.log(score); 
        }; 
    }); 
}); 

//then we define a function that will move the moles on the grid 
function moveMole(){
    //the function randomSquare is called with setInterval() to allow a mole to spawn on the grid one every 1000 milliseconds
    setInterval(randomSquare, 1000); 

}; 

moveMole(); 

//now we set a countdown that will go down by one incrementally so when currentTime is up, the game's over
function countDown(){
    currentTime--; 
    console.log(currentTime); 
    timeLeft.textContent = currentTime; 
    //if the time is up
    if(currentTime === 0){
        //the game is over so the moles stop spawning 
        clearInterval(timerId);  
        //and we alert the user
        alert(`GAME OVER ! Your final score is ${result}. Try again !`); 
        //and finally we refresh the page for the game to start again 
        location.reload(); 
    };
};

//we set up the countdown 
 let timerId = setInterval(countDown, 1000); 

 ///TO DO LIST 
 //Not allowing the mole to spawn in the same square more than 2 times in a row
 






