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

  
    function playRound(computerChoice, humanChoice) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice(); 
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
        // Display round result, round score and also rounds left
        alert(`Round ${rounds} result:
            Your score: ${humanScore}
            Computer score: ${computerScore}
            Draw score: ${draw}
            Rounds left: ${5-rounds}`);
    }

function playGame() {
    for (rounds = 1; rounds <= 5; rounds++) {
        playRound();
    }
    if (humanScore > computerScore && (humanScore >= draw || draw >= humanScore)) {
        alert(`What a brilliant work you've done😎😎😎
            You are the winner 🙌🙌🙌`);
    }
    else if (computerScore > humanScore && (computerScore >= draw || draw >= computerScore)) {
        alert (`So sad to say this 😥😥😥
            Computer is the winner 🙇‍♂️🙇‍♂️🙇‍♂️
            Try playing another round by clicking
            on the icon on the page.`);
    }
    else if (computerScore === humanScore) {
        alert(`You are amazing but you can do better✌.
            No one wins😉😉
            Try playing another round by clicking
            on the icon on the page.`);
    }
}
playGame();