
const rock = "rock";
const paper = "paper";
const scissors = "scissors";



let playerScore = 0;
let computerScore = 0;
let runningScore = "player: " + playerScore + ", computer: " + computerScore;




function getComputerChoice() {


    /* computer options places within an array */
    const strings = ["rock", "paper", "scissors"];

    /*get random index */
    let randomIndex = Math.floor(Math.random() * strings.length);

    /*use random index to get wanted string from the 'strings' array */
    let computerString = strings[randomIndex];

    return computerString;
}



function playRound(playerSelection, computerSelection) {

    let playerString = playerSelection;

    let computerString = computerSelection;

    /* evaluates win conditions */


    const conditions = [playerString == rock && computerString == scissors, playerString == scissors && computerString == paper, playerString == paper && computerString == rock];

    const allConditionsMet = conditions.every(condition => condition);






    if (allConditionsMet) {

        increment("player");


        if (playerScore == 5) {
            return "player wins"
        } else {
            return runningScore;
        }

    }


    /* evaluates and returns draw condition */
    else if (playerString == computerString) {

        let drawMessage = "It is a draw !";

        return drawMessage;
    }


    /*evaluates and returns loss condition */


    else {

        increment("computer");

        if (computerScore == 5) {
            return "computer wins!"
        } else {
            return "player: " + playerScore + ", computer: " + computerScore;

        }

    }
}

function increment(variable) {
    if (variable == "player") {
        playerScore++;
    } else if (variable == "computer") {
        computerScore++;
    }
}



function game(input) {

    let playerSelection = input;


    let computerSelection = getComputerChoice();


    console.log(playRound(playerSelection, computerSelection));

}


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        game(button.id);
    });
});



