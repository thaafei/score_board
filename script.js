let gameOver = false
let matchScore = 3;
const reset = document.querySelector('#reset')
const header = document.querySelector('h1')
const p1 = {
    score: 0,
    button: document.querySelector('#p1-button'),
    display: document.querySelector('#p1-score'),
    name:"Player 1"
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2-button'),
    display: document.querySelector('#p2-score'),
    name:"Player 2"
}

const matchAmount = document.querySelector('#match')
function updateScores(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        if (player.score == matchScore) {
            header.textContent = `${player.name} wins!`
            player.display.classList.add('win')
            opponent.display.classList.add('lose')
            gameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function resetGame(p1,p2,matchAmount){
    header.textContent = 'Ping Pong Scorekeeper'
    p1.score = 0;
    p1.display.textContent = 0;
    p1.button.disabled = false;
    p2.score = 0;
    p2.display.textContent = 0;
    p2.button.disabled = false;
    gameOver = false;
    matchScore = matchAmount.value;
    p1.display.classList.remove('win')
    p1.display.classList.remove('lose')
    p2.display.classList.remove('win')
    p2.display.classList.remove('lose')
}


p1.button.addEventListener('click',function(){
    updateScores(p1,p2)
})

p2.button.addEventListener('click',function(e){
    updateScores(p2,p1)
})

reset.addEventListener('click',function(){
    resetGame(p1,p2,matchAmount)
})

matchAmount.addEventListener('change',function(){
    resetGame(p1,p2,matchAmount)
}) 