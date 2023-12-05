const hands = document.querySelector(".hands");
const gameRules = ["r", "p", "s"];
const playerOptions = document.querySelectorAll('.btn')

let playerScore = 0;
let opponentScore = 0;

function startGame() {
    const introScreen = document.querySelector("#introScreen");
    const playBtn = document.querySelector("#playBtn");
    const matchScreen = document.querySelector("#matchScreen");

    playBtn.addEventListener("click", function () {
        introScreen.classList.add("fadeOut");
        matchScreen.classList.add("fadeIn");
    });
}

function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * gameRules.length);
    return gameRules[randomIndex];
}

function defineWinner(player, opponent) {
    switch (true) {
        case player === "r" && opponent === "s":
            showResult("You Win")
            playerScore++;
            updateScore()
            break;
        case player === "p" && opponent === "r":
            showResult("You Win")
            playerScore++;
            updateScore()
            break;
        case player === "s" && opponent === "p":
            showResult("You Win")
            playerScore++;
            updateScore()
            break;
        case player === opponent:
            showResult("It's a Draw")
            break;
        default:
            opponentScore++;
            showResult("You Lose")
            updateScore()
    }
}
function updateScore() {
    const playerScoreEl = document.querySelector('.player-score p')
    const opponentScoreEl = document.querySelector('.opponent-score p')
    playerScoreEl.textContent = playerScore;
    opponentScoreEl.textContent = opponentScore;
}
function showResult(result) {
    const resultTitle = document.querySelector('.result')
    resultTitle.innerHTML = `${result}` 
}

playerOptions.forEach(option => {
    option.addEventListener("click", function (e) {
        hands.style.opacity = 1;
        const playerMove = e.srcElement.dataset.info;
        const opponentMove = getRandomCharacter();
        const playerHand = document.querySelector('.player-hand')
        const opponentHand = document.querySelector('.opponent-hand')
        // console.log(`"assets/${opponentMove}.png"`);
        // console.log(playerHand.src);
        playerHand.src = `assets/${playerMove}.png`
        opponentHand.src = `assets/${opponentMove}.png`
        defineWinner(playerMove, opponentMove)
    });
})

startGame();
