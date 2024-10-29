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
    let humanChoice = prompt(`Round ${rounds}
        Enter one of the following to
        play against the computer suggestion. 
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
            alert(`Round ${rounds}:
                You won`);
            humanScore++;
        }

        else if (humanChoice === `scissors` && computerChoice === `rock`) {
            alert(`Round ${rounds}:
                Computer wins`);
            computerScore++;
        }
        

        else if (humanChoice === `scissors` && computerChoice === `paper`) {
            alert(`Round ${rounds}:
                You won`);
            humanScore++;
        }

        else if (humanChoice === `paper` && computerChoice === `scissors`) {
            alert(`Round ${rounds}:
                Computer wins`);
            computerScore++;
        }

        else if (humanChoice === `paper` && computerChoice === `rock`) {
            alert(`Round ${rounds}:
                You won`);
            humanScore++;
        }

        else if (humanChoice === `rock` && computerChoice === `paper`) {
            alert(`Round ${rounds}:
                Computer win`);
            computerScore++;
        }
        else {
            alert(`Round ${rounds}:
                That's a tied.`);
            draw++;
        }
        alert(`Round ${rounds} result:
            Your score: ${humanScore}
            Computer score: ${computerScore}
            Draw score: ${draw}
            Round left: ${5-rounds}`);
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