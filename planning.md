Task 1: Logic
To complete this ticket you will need to write a set of if statements that will determine the winner of rock, paper, scissors.

The two moves should be stored in two variables like so:

let playerMove = "rock";
let computerMove = "paper";
You'll want to hard-code each move in these variables (like the example above) to check each piece of logic at first.

This will be deemed as complete when all permutations of the three possible moves for each player have been handled correctly, e.g. rock vs rock is a draw, paper vs rock is a paper win, etc.

options
1
2
3

if 
rock > scissor
scissor > paper
paper > rock
rock = rock 
scissor = scissor
paper = paper
