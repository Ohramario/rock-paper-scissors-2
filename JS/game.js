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

    let playerString = playerSelection.toLowerCase();


    /* evaluates and returns draw condition */
    if (playerString == computerSelection) {

        let drawMessage = "It is a draw !";

        return drawMessage;
    }

    /*evaluates and returns win condition */

    if ((playerString == "rock" && computerSelection == "scissors") || (playerString == "scissors" && computerSelection == "paper") || (playerString == "paper" && computerString == "rock")) {
        let winMessage = "Player wins !";

        return winMessage;
    }

    /*evaluates and returns loss condition */

    if ((playerString == "rock" && computerSelection == "paper") || (playerString == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        let lossMessage = "Player loses !";

        return lossMessage;
    }
}


function game {

    const playerSelection = "rock";

    const computerSelection = getComputerChoice();


    console.log(playRound(playerSelection, computerSelection));


}



