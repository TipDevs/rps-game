let humanScore = 0,
TOPbotScore = 0,
rounds;

const gameConsole = document.querySelector(".game-console"),
 roundWinner = document.querySelector("#winner"),
 startGameBtn = document.querySelector("#start-game"),
 btnContainer = document.createElement('div'),
 paperBtn = document.createElement("button"),
 rockBtn = document.createElement("button"),
 scissorsBtn = document.createElement("button")
 botScore = document.querySelector("#TOPbot-score")
 playerScore = document.querySelector("#human-score");

// rockBtn.classList.add("rock");
// paperBtn.classList.add("paper");
// scissorsBtn.classList.add("scissors");

function displayChoiceBtn() {
    rockBtn.classList.add('choice-btn');
    rockBtn.textContent = "rock";
    paperBtn.classList.add('choice-btn');
    paperBtn.textContent = "paper";
    scissorsBtn.classList.add("choice-btn");
    scissorsBtn.textContent = "scissors";
    btnContainer.classList.add("button-container");

    startGameBtn.setAttribute('style', "display: none;");
    gameConsole.appendChild(btnContainer);
    btnContainer.appendChild(rockBtn);
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);
}

startGameBtn.onclick = displayChoiceBtn;

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

    function playRound(computerChoice, humanChoice) {

        for (rounds = 1; rounds <= 5; rounds++){
        if (humanChoice === rockBtn && computerChoice === 'scissors' ||
            humanChoice === paperBtn && computerChoice === 'rock' ||
            humanChoice === scissorsBtn && computerChoice === "paper"
        ) {
            playerScore.textContent = humanScore++;
            return "You win";
        }

        else if (humanChoice === scissorsBtn && computerChoice === `rock` ||
             humanChoice === paperBtn && computerChoice === `scissors` ||
             humanChoice === rockBtn && computerChoice === `paper`)
          {
            botScore.textContent = TOPbotScore++;
            return 'TOPbot wins';
        }
        
        else {
            return "It's a tie";
        }
    }
    
    }

    rockBtn.onclick = () => playRound(getComputerChoice(), rockBtn);
    paperBtn.onclick = () => playRound(getComputerChoice(), paperBtn);
    scissorsBtn.onclick = () => playRound(getComputerChoice(), scissorsBtn);

// function playGame() {
//     for (rounds = 1; rounds <= 5; rounds++) {
//         if (humanScore > TOPbotScore && (humanScore >= draw || draw >= humanScore)) {
//             alert(`What a brilliant work you've done😎😎😎
//                 You are the winner 🙌🙌🙌`);
//         }
//         else if (TOPbotScore > humanScore && (TOPbotScore >= draw || draw >= TOPbotScore)) {
//             alert (`So sad to say this 😥😥😥
//                 Computer is the winner 🙇‍♂️🙇‍♂️🙇‍♂️
//                 Try playing another round by clicking
//                 on the icon on the page.`);
//         }
//         else if (TOPbotScore === humanScore) {
//             alert(`You are amazing but you can do better✌.
//                 No one wins😉😉
//                 Try playing another round by clicking
//                 on the icon on the page.`);
//         }
//     }
// }
// playGame();