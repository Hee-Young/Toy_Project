const leftScore = document.querySelector("#scoreL");
const rightScore = document.querySelector("#scoreR");
const selectWinScore = document.querySelector("#winScore");
const p1Button = document.querySelector("#player1");
const p2Button = document.querySelector("#player2");
const resetButton = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isFinish = false;

p1Button.addEventListener('click', function(){
    if(!isFinish){
        p1Score += 1;
        leftScore.textContent = p1Score;
        if(p1Score == winningScore){        
            finish(leftScore);
        }
    }
})
p2Button.addEventListener('click', function(){
    if(!isFinish){
        p2Score += 1;
        rightScore.textContent = p2Score;
        if(p2Score == winningScore){        
            finish(rightScore);
        }
    }
})
resetButton.addEventListener('click', function() {
    reset();
})

selectWinScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function finish(winButton) {
    isFinish = true;
    p1Button.disabled = true;
    p2Button.disabled = true;
    if(winButton == leftScore){
        leftScore.classList.add('win');
        rightScore.classList.add('lose');
    }
    else{
        rightScore.classList.add('win');
        leftScore.classList.add('lose');
    }
}

function reset() {
    isFinish = false;
    p1Score = 0; // 점수 리셋
    p2Score = 0;
    leftScore.textContent = p1Score;
    rightScore.textContent = p2Score;
    rightScore.classList.remove('win', 'lose'); // 점수 색 리셋 되도록
    leftScore.classList.remove('win', 'lose');
    p1Button.disabled = false; // button disable 풀어주기
    p2Button.disabled = false;
}