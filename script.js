let humanScore = 0,
TOPbotScore = 0,
rounds;

const gameConsole = document.querySelector(".game-console"),
 roundWinner = document.querySelector("#winner"),
 startGameBtn = document.querySelector("#start-game"),
 btnContainer = document.createElement('div'),
 paperBtn = document.createElement("button"),
 rockBtn = document.createElement("button"),
 scissorsBtn = document.createElement("button"),
 botScore = document.querySelector("#TOPbot-score"),
 playerScore = document.querySelector("#human-score")
resetGame = document.createElement("button");

// classlist
btnContainer.classList.add("button-container");
rockBtn.classList.add('choice-btn');
paperBtn.classList.add('choice-btn');
scissorsBtn.classList.add("choice-btn");
resetGame.classList.add("reset-btn");

// function to display choice button for human player
function displayChoiceBtn() {
    rockBtn.textContent = "rock";
    paperBtn.textContent = "paper";
    scissorsBtn.textContent = "scissors";
    playerScore.textContent = humanScore;
    botScore.textContent = TOPbotScore;

    startGameBtn.setAttribute('style', "display: none;");
    gameConsole.appendChild(btnContainer);
    btnContainer.appendChild(rockBtn);
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);
}

// code to trigger the start game button
startGameBtn.addEventListener("click", () => {
    displayChoiceBtn();
})


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
  

// code to get human or player choice against TOPbot to determine if the player wins or the TOPbot wins or it's a draw.

    function playRound(computerChoice, humanChoice){

        if (humanChoice === rockBtn && computerChoice === 'scissors' ||
            humanChoice === paperBtn && computerChoice === 'rock' ||
            humanChoice === scissorsBtn && computerChoice === "paper"
        ) {
            humanScore++;
            playerScore.textContent = humanScore;
            roundWinner.textContent = "You win.";
            // checkSoreToEndGame();
        }

        else if (humanChoice === scissorsBtn && computerChoice === `rock` ||
             humanChoice === paperBtn && computerChoice === `scissors` ||
             humanChoice === rockBtn && computerChoice === `paper`)
          {
            TOPbotScore++;
            botScore.textContent = TOPbotScore;
            roundWinner.textContent = "TOPbot wins.";
            // checkSoreToEndGame();
        }
        
        else {
            roundWinner.textContent = "No winner, it is a tie."
            // checkSoreToEndGame();
        }
    }

    // code to display end result after 5 rounds and start a new round.
    let checkSoreToEndGame = function () {

       
        if (TOPbotScore >= 3 && TOPbotScore > humanScore) {
            rockBtn.setAttribute("style", "display: none;");
            paperBtn.setAttribute("style", "display: none;");
            scissorsBtn.setAttribute("style", "display: none;");
            roundWinner.textContent = `TOPbot wins the game!!!
            Final score:Player: ${humanScore} vs TOPbot: ${TOPbotScore}`
            resetGame.textContent = "Reset Game";
            btnContainer.appendChild(resetGame);
        }

        else if (humanScore >= 3 && humanScore > TOPbotScore) {
            rockBtn.setAttribute("style", "display: none;");
            paperBtn.setAttribute("style", "display: none;");
            scissorsBtn.setAttribute("style", "display: none;");
            roundWinner.textContent = `You won the game!!!
            Final score:Player: ${humanScore} vs TOPbot: ${TOPbotScore}`
            resetGame.textContent = "Reset Game"
            btnContainer.appendChild(resetGame);
        }

        else {
            rockBtn.setAttribute("style", "display: none;");
            paperBtn.setAttribute("style", "display: none;");
            scissorsBtn.setAttribute("style", "display: none;");
            roundWinner.textContent = `No winner on this game!!!
            Final score:Player: ${humanScore} vs TOPbot: ${TOPbotScore}`
            resetGame.textContent = "Reset Game";
            btnContainer.appendChild(resetGame);
        }
    }

    
    
        rockBtn.addEventListener("click", () => {
            playRound(getComputerChoice(), rockBtn);
        });
        paperBtn.addEventListener("click", () => {
            playRound(getComputerChoice(), paperBtn);
        });
        scissorsBtn.addEventListener("click", () => {
            playRound(getComputerChoice(), scissorsBtn);
        });
