let humanScore = 0,
TOPbotScore = 0;


const gameConsole = document.querySelector(".game-console"),
 roundWinner = document.querySelector("#winner"),
 startGameBtn = document.querySelector("#start-game"),
 btnContainer = document.createElement('div'),
 paperBtn = document.createElement("button"),
 rockBtn = document.createElement("button"),
 scissorsBtn = document.createElement("button"),
 botScore = document.querySelector("#TOPbot-score"),
 playerScore = document.querySelector("#human-score"),
resetGameBtn = document.createElement("button"),
gameIntro = document.querySelector("#game-intro");

// classlist
btnContainer.classList.add("button-container");
rockBtn.classList.add('choice-btn');
paperBtn.classList.add('choice-btn');
scissorsBtn.classList.add("choice-btn");
resetGameBtn.classList.add("reset-btn");

// function to display choice button for human player
function displayChoiceBtn() {
    rockBtn.textContent = "rock";
    paperBtn.textContent = "paper";
    scissorsBtn.textContent = "scissors";
    playerScore.textContent = humanScore;
    botScore.textContent = TOPbotScore;

    startGameBtn.setAttribute('style', "display: none;");
    gameIntro.setAttribute("style", "display: none");
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
            roundWinner.textContent = `You win: TOPbot chooses ${computerChoice}`;
        }

        else if (humanChoice === scissorsBtn && computerChoice === `rock` ||
             humanChoice === paperBtn && computerChoice === `scissors` ||
             humanChoice === rockBtn && computerChoice === `paper`)
          {
            TOPbotScore++;
            botScore.textContent = TOPbotScore;
            roundWinner.textContent = `TOPbot wins: TOPbot chooses ${computerChoice}`;
        }
        
        else {
            roundWinner.textContent = `No winner, it is a tie: TOPbot chooses ${computerChoice}`;
        }
    }

    // code to display end result after 5 points from the player or the TOPbot  and start a new round.
    let checkSoreToEndGame = function () {
        if (TOPbotScore >= 5 && TOPbotScore > humanScore) {
            rockBtn.setAttribute("style", "display: none;");
            paperBtn.setAttribute("style", "display: none;");
            scissorsBtn.setAttribute("style", "display: none;");
            roundWinner.textContent = `Game has ended because TOPbot has 5 points before you and\n
            TOPbot wins the game!!!\n
            Final score: Player: ${humanScore} vs TOPbot: ${TOPbotScore}`
            resetGameBtn.textContent = "Reset Game";
            btnContainer.appendChild(resetGameBtn);
            resetGameBtn.setAttribute("style", "display: inherit");
        }

        else if (humanScore >= 5 && humanScore > TOPbotScore) {
            rockBtn.setAttribute("style", "display: none;");
            paperBtn.setAttribute("style", "display: none;");
            scissorsBtn.setAttribute("style", "display: none;");
            roundWinner.textContent = `Game has ended because You have 5 points before TOPbot and\nYou won the game!!!\n
            Final score: Player: ${humanScore} vs TOPbot: ${TOPbotScore}`
            resetGameBtn.textContent = "Reset Game"
            btnContainer.appendChild(resetGameBtn);
            resetGameBtn.setAttribute("style", "display: inherit");
        }   
}

// code to trigger the button when player choose
    rockBtn.addEventListener("click", () => {
        checkSoreToEndGame(playRound
            (getComputerChoice(), 
            rockBtn));
    });
    paperBtn.addEventListener("click", () => {
        checkSoreToEndGame(playRound
            (getComputerChoice(), 
            paperBtn));
    });
    scissorsBtn.addEventListener("click", () => {
        checkSoreToEndGame(playRound
            (getComputerChoice(), 
            scissorsBtn));
    });

    // function that runs when there is a click on the restart button
    function resetGame() {
        humanScore = 0;
        playerScore.textContent = humanScore;
        TOPbotScore = 0;
        botScore.textContent = TOPbotScore;
        roundWinner.textContent = "";
        gameIntro.setAttribute("style", "display: inherit");
        startGameBtn.setAttribute("style", "display: inherit");
        startGameBtn.addEventListener("click", () => {
            rockBtn.setAttribute("style", "display: inherit;");
            paperBtn.setAttribute("style", "display: inherit;");
            scissorsBtn.setAttribute("style", "display: inherit;");
            checkSoreToEndGame();
        }) 
    }

// code to trigger the reset button to allow the user to start the game all over
resetGameBtn.addEventListener("click", () => {
    resetGameBtn.setAttribute("style", "display: none");
    resetGame();
})
