
const choiceBtns = document.querySelectorAll("button");

let roundNum = 0;
let playerScore = 0;
let compScore = 0;


choiceBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerChoice = e.target.id;
        roundNum++;
        let roundResult = getRoundResult(playerChoice,
                                    getComputerChoice());
    
        const outputDiv = document.querySelector(".outputContainer");
        const para = document.createElement("p")
    
        para.textContent = 'Round ' + roundNum + ': ' + roundResult;
    
        outputDiv.appendChild(para);
        
        console.log('Round ' + roundNum + ': ' + roundResult);

        const scores = document.querySelector("#scores");
        const rounds = document.querySelector("#rounds");

        scores.textContent = `Player Score: ${playerScore} | Computer Score: ${compScore}`;
        rounds.textContent = `Rounds played: ${roundNum}`;

        if (roundNum === 5) {
            const scoreDiv = document.querySelector(".scoreContainer");
            const gameOverPara = document.createElement("p");

            if (playerScore === compScore) {
                gameOverPara.textContent = "It's a tie! Game over."
            } else if (playerScore > compScore) {
                gameOverPara.textContent = "Congratulations, you won! Game over."
            } else {
                gameOverPara.textContent = "Sorry, you lost. Game over."
            }
            scoreDiv.appendChild(gameOverPara);

            roundNum = 0;
            playerScore = 0;
            compScore = 0;
        }
    
    });
});


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

function getRoundResult(playerSelection, computerSelection) {
    // trim the player selection and make only the first letter capital
    playerSelection = makeCapitalCase(playerSelection.trim());

    // compare selections and determine a winner, returning a message based on the outcome.
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection) {
                case "Rock":
                    return getResultMessage("tie", playerSelection, computerSelection);
                case "Paper":
                    compScore++;
                    return getResultMessage("lose", playerSelection, computerSelection);
                case "Scissors":
                    playerScore++;
                    return getResultMessage("win", playerSelection, computerSelection);
            }
            break ;
        case "Paper":
            switch (computerSelection) {
                case "Rock":
                    playerScore++;
                    return getResultMessage("win", playerSelection, computerSelection);
                case "Paper":
                    return getResultMessage("tie", playerSelection, computerSelection);
                case "Scissors":
                    compScore++;
                    return getResultMessage("lose", playerSelection, computerSelection);
            }
            break ;
        case "Scissors":
            switch (computerSelection) {
                case "Rock":
                    compScore++;
                    return getResultMessage("lose", playerSelection, computerSelection);
                case "Paper":
                    playerScore++;
                    return getResultMessage("win", playerSelection, computerSelection);
                case "Scissors":
                    return getResultMessage("tie", playerSelection, computerSelection);
            }
            break ;
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