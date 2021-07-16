
    
let dice = document.getElementsByTagName("img");
let startAgain = document.querySelector("#startAgain")
let displayPoints = document.querySelector("#displayPoints")
let displayDice = document.querySelector("#displayDice")
let roll = document.querySelector("#roll")
let rolledonce = document.getElementById("rolledonce")
let pointsCounter = 0;

startAgain.style.display = "none";
displayDice.style.display = "none";

roll.addEventListener("click", (event) => {
    play();
});

startAgain.addEventListener("click", (event) => { 
    pointsCounter = 0;
    play();
    startAgain.style.display = "none"
    roll.style.display = "block";
});


function play() {
    const diceRoll = Math.floor(Math.random()*6) + 1;
    displayDice.style.display = "block";
    rolledonce.innerHTML =`You rolled ${diceRoll}`;


    if (diceRoll === 1) {
        displayDice.src = "dice1.png"
        displayPoints.innerText = "Game over";
        roll.style.display = "none";
        startAgain.style.display = "block";     
    } else if (diceRoll === 2) {
        displayDice.src = "dice2.png"
        pointsCounter += diceRoll;
        displayPoints.innerText = `The sum of your points including this throw is ${pointsCounter}`;
    } else if (diceRoll === 3) {
        displayDice.src = "dice3.png"
        pointsCounter += diceRoll;
        displayPoints.innerText = `The sum of your points including this throw is ${pointsCounter}`;
    } else if (diceRoll === 4) {
        displayDice.src = "dice4.png"
        pointsCounter += diceRoll;
        displayPoints.innerText = `The sum of your points including this throw is ${pointsCounter}`;
    } else if (diceRoll === 5) {
        displayDice.src = "dice5.png"
        pointsCounter += diceRoll;
        displayPoints.innerText = `The sum of your points including this throw is ${pointsCounter}`;
    } else  {
        displayDice.src = "dice6.png"
        pointsCounter += diceRoll;
        displayPoints.innerText = `The sum of your points including this throw is ${pointsCounter}`;
    }
    
    if (pointsCounter >= 20 ){
       
        displayPoints.innerText = "You won!";
       displayDice.src = "cake.jpg"
       rolledonce.innerHTML ="congratulations !"
       play();
    }
}
    console.log(pointsCounter);