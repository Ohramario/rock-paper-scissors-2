const rock = "rock";
const paper = "paper";
const scissors = "scissors";



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

    /* evaluates win conditions */


    const conditions = [playerString == rock && computerSelection == scissors, playerString == scissors && computerSelection == paper, playerString == paper && computerString == rock];

    const allConditionsMet = conditions.every(condition => condition);


    if (allConditionsMet) {

        let winMessage = "Player Wins !"
        return winMessage;
    }


    /* evaluates and returns draw condition */
    else if (playerString == computerSelection) {

        let drawMessage = "It is a draw !";

        return drawMessage;
    }


    /*evaluates and returns loss condition */



    else {

        let lossMessage = "Player loses !";

        return lossMessage;
    }
}


function game() {

    let playerInput = prompt("Please input one of the following: rock, paper, scissors");

    let choice = playerInput.toLowerCase();


    let playerSelection = checkValidity(choice);


    let computerSelection = getComputerChoice();


    console.log(playRound(playerSelection, computerSelection));

}


/* function checks if valid player input */
function checkValidity(input) {



    if (input == rock || input == scissors || input == paper) {

        return input;


    } else {


        let againMessage = "Not valid, please refresh page";

        alert(againMessage);
    }

}

game();




