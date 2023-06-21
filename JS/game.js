function getComputerChoice() {


    /* computer options places within an array */
    const strings = ["rock", "paper", "scissors"];

    /*get random index */
    let randomIndex = Math.floor(Math.random() * strings.length);

    /*use random index to get wanted string from the 'strings' array */
    let computerString = strings[randomIndex];

    return computerString;

}

let choice = getComputerChoice();

console.log(choice);