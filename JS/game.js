
const rock = "rock";
const paper = "paper";
const scissors = "scissors";



let playerScore = 0;
let computerScore = 0;

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

    let allConditionsMet = false;

    /* evaluates win conditions */


    const conditions = [playerString == rock && computerString == scissors, playerString == scissors && computerString == paper, playerString == paper && computerString == rock];

    if (conditions.includes(true)) {

        allConditionsMet = true;

    }




    if (allConditionsMet) {

        increment("player");


        if (playerScore == 5) {
            reset();
            return "player wins"
        } else {
            return "player: " + playerScore + ", computer: " + computerScore;
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
            reset();
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

function reset() {
    playerScore = 0;
    computerScore = 0;

}


function game(input) {

    let playerSelection = input;


    let computerSelection = getComputerChoice();

    showResults(playerSelection, computerSelection);

/*
    console.log(playRound(playerSelection, computerSelection));
    */

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

//displaying results on the web page

function showResults(player, computer) {

    const results = document.querySelector("#results");

    const content = document.createElement("div");

    content.classList.add("content");

    content.textContent = playRound(player, computer);

    results.appendChild(content);

}




