const player1 = {
    score : 0,
    button : document.querySelector("#player1"),
    text : document.querySelector("#scoreL")
}

const player2 = {
    score : 0,
    button : document.querySelector("#player2"),
    text : document.querySelector("#scoreR")
}

const selectWinScore = document.querySelector("#winScore");
const resetButton = document.querySelector("#reset");

let winningScore = 5;
let isFinish = false;

function updateScores(player, opponent){
    if(!isFinish){
        player.score += 1;
        player.text.textContent = player.score;
        if(player.score == winningScore){        
            isFinish = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.text.classList.add('win');
            opponent.text.classList.add('lose');
        }
    }
}

player1.button.addEventListener('click', function(){
    updateScores(player1, player2);
})

player2.button.addEventListener('click', function(){
    updateScores(player2, player1);
})
resetButton.addEventListener('click', function() {
    reset();
})

selectWinScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isFinish = false;
    player1.score = 0; // 점수 리셋
    player2.score = 0;
    player1.text.textContent = player1.score;
    player2.text.textContent = player2.score;
    player1.text.classList.remove('win', 'lose'); // 점수 색 리셋 되도록
    player2.text.classList.remove('win', 'lose');
    player1.button.disabled = false; // button disable 풀어주기
    player2.button.disabled = false;
}