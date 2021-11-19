// Task 1: Logic

/*
if playerMove = paper and computerMove = rock >>> player wins
if playerMove = rock and computerMove = scissor >>> player wins
if playerMove = scissor and computerMove = paper >>> player wins
if playerMove = rock and computerMove = paper >>> computer wins
if playerMove = scissor and computerMove = rock >>> computer wins
if playerMove = paper and computerMove = scissor >>> computer wins
*/

/*console.log("Choose an option")
console.log("1 = rock")
console.log("2 = paper")
console.log("3 = scissor")*/


// let playerMove = "rock"; // Task 1 hard coded
// let playerMove = prompt("What is your move?") // Task 3.1


//let computerMove = "paper"; // Task 1 - Task 3 hard coded
/* let options = Math.floor((Math.random() * 3));
function getRandomInt(3) {
    return Math.floor(Math.random() * 3);
}
let move = ["rock", "paper", "scissor"];
console.log(options)
console.log(move[options])
let computerMove =move[options]*/

let maxMoves = 3

function getRandomInt(maxMoves) {
    return Math.floor(Math.random() * maxMoves);
}
let move = ["rock", "paper", "scissor"];
let computerMove = move[getRandomInt(maxMoves)]
// console.log(computerMove)


/*
if (playerMove === computerMove) {
    console.log("IT'S A DRAW!");
} 
else if ((playerMove === "paper" && computerMove === "rock") || (playerMove === "rock" && computerMove === "scissor") || (playerMove === "scissor" && computerMove === "paper")) {
    console.log("PLAYER WINS!")
} 
else if ((playerMove === "rock" && computerMove === "paper") || (playerMove === "scissor" && computerMove === "rock") || (playerMove === "paper" && computerMove === "scissor")) {
    console.log("COMPUTER WINS!")
}
*/

// Task 2: Function

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return 0;
    } 
    else if ((playerMove === "paper" && computerMove === "rock") || (playerMove === "rock" && computerMove === "scissor") ||     (playerMove === "scissor" && computerMove === "paper")) {
        return 1;
    } 
    else if ((playerMove === "rock" && computerMove === "paper") || (playerMove === "scissor" && computerMove === "rock") ||     (playerMove === "paper" && computerMove === "scissor")) {
        return -1;
    }
}

let result = getWinner(playerMove, computerMove); //Task 3.2
// alert(result) // Task 3.3

// Task 3: User Input

/*
1. use promt to ask player for their move
2. call function from task 2 inputting the players move as playerMove
3. show result using alert
*/

// Task 4: Computer Player


// Task 5: Game Loop

/* CHECK
console.log(playerMove)
console.log(computerMove)
console.log(`The result is: ${result}`)
*/

/*
- we need to create a loop to run indefinitely until player wants to stop
ask the player if they want to continue after each game
- ask played to type 'y' to continue and 'n' to stop playing
*/

let gamesPlayed = 0;
let gamesDraw = 0;
let gamesLost = 0;
let gamesWon = 0;


//let score = return
do {
    getWinner(prompt("What is your move?"), move[getRandomInt(maxMoves)]);
//    alert(result);
//! add +1
    gamesPlayed ++
if (result === 0){
    gamesDraw ++
} else if (result === 1){
    gamesWon ++
} else if (result === -1) {
    gamesLost ++
}
    alert(`Games played: ${gamesPlayed} \n your wins: ${gamesWon} \n your draws: ${gamesDraw} \n your losses: ${gamesLost}`)
}
while (confirm("Do you want to continue playing?"));



//let result = getWinner(playerMove, computerMove);

// alert(`you choose ${playerMove} and the computer choose ${computerMove}`);


// Task 6: Scores

