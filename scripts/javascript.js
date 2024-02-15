// function to get the computer's choice in R-P-S
function getComputerChoice() {
    // get a random number 0, 1 or 2
    let randNo = Math.floor(Math.random() * 3);
    // console.log(randNo);
    switch (randNo) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // trim the player selection and make only the first letter capital
    playerSelection = makeCapitalCase(playerSelection.trim());

    // compare selections and determine a winner, returning a message based on the outcome.
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    return getResultMessage("tie", playerSelection, computerSelection);
                case "Paper":
                    return getResultMessage("lose", playerSelection, computerSelection);
                case "Scissors":
                    return getResultMessage("win", playerSelection, computerSelection);
            }
        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    return getResultMessage("win", playerSelection, computerSelection);
                case "Paper":
                    return getResultMessage("tie", playerSelection, computerSelection);
                case "Scissors":
                    return getResultMessage("lose", playerSelection, computerSelection);
            }
        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    return getResultMessage("lose", playerSelection, computerSelection);
                case "Paper":
                    return getResultMessage("win", playerSelection, computerSelection);
                case "Scissors":
                    return getResultMessage("tie", playerSelection, computerSelection);
            }
        default:
            return "You did not enter a valid choice."
    }
}

function makeCapitalCase(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

function getResultMessage(result, playerSelection, computerSelection) {
    switch (result) {
        case "win":
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        case "lose":
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        case "tie":
            return `Tie! You both selected ${playerSelection}.`;
    }
}


// let computerSelection = getComputerChoice();
// let playerSelection = "rock";

// console.log(playRound(playerSelection, computerSelection));

function playGame() {
    for (let roundNum = 1; roundNum <= 5; roundNum++) {
        // let playerInput = prompt();
        let roundResult = playRound(prompt("Please enter your choice: Rock, Paper or Scissors"), getComputerChoice());
        console.log('Round ' + roundNum + ': ' + roundResult);
    }
}