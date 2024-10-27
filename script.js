let humanScore = 0,
computerScore = 0;

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

        else if (humanChoice === `rock` && computerChoice === `rock`) {
            alert(`That's a tied.`);
        }

        else if (humanChoice === `scissors` && computerChoice === `scissors`) {
            alert(`That's a tied.`);
        }

        else if (humanChoice === `paper` && computerChoice === `paper`) {
            alert(`That's a tied.`);
        }
    }

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
}
playGame();