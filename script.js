let humanScore = 0,
computerScore = 0,
draw = 0,
rounds;

// code to get computer choice against human choice.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) +1;
    if (computerChoice === 1) {
      return `rock`;
    }
    else if (computerChoice === 2) {
      return `paper`;
    }
    else {
      return `scissors`;
    }
  }
  

// code to get human or player choice against the computer.
  function getHumanChoice() {
    let humanChoice = prompt(`Enter one of the following to play against the computer suggestion. 
        1. Rock
        2. Paper
        3. Scissors`);
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
  }

  
    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        if (humanChoice === `rock` && computerChoice === `scissors`) {
            alert(`You won`);
            humanScore++;
        }

        else if (humanChoice === `scissors` && computerChoice === `rock`) {
            alert(`Computer wins`);
            computerScore++;
        }
        

        else if (humanChoice === `scissors` && computerChoice === `paper`) {
            alert(`You won`);
            humanScore++;
        }

        else if (humanChoice === `paper` && computerChoice === `scissors`) {
            alert(`Computer wins`);
            computerScore++;
        }

        else if (humanChoice === `paper` && computerChoice === `rock`) {
            alert(`You won`);
            humanScore++;
        }

        else if (humanChoice === `rock` && computerChoice === `paper`) {
            alert(`Computer win`);
            computerScore++;
        }
        else {
            alert(`That's a tied.`);
            draw++;
        }
        alert(`Round ${rounds} result:
            Your score ${humanScore} : Computer score ${computerScore} : Draw score ${draw}`);
    }

function playGame() {
    for (rounds = 1; rounds <= 5; rounds++) {
        playRound();
    }
    if (humanScore > computerScore && (humanScore >= draw || draw >= humanScore)) {
        alert(`You are the winner`);
    }
    else if (computerScore > humanScore && (computerScore >= draw || draw >= computerScore)) {
        alert (`Computer is the winner`);
    }
    else if (computerScore === humanScore) {
        alert(`no one wins`);
    }
}
playGame();