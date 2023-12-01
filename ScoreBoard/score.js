const leftScore = document.querySelector("#scoreL");
const rightScore = document.querySelector("#scoreR");
const winScore = document.querySelector("#winScore");
const p1Button = document.querySelector("#player1");
const p2Button = document.querySelector("#player2");
const resetButton = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isFinish = false;

p1Button.addEventListener('click', function(){
    if(p1Score != winningScore){
        p1Score += 1;
        leftScore.textContent = p1Score;
    }
    else{
        finish();
    }
})
p2Button.addEventListener('click', function(){
    if(p2Score != winningScore){
        p2Score += 1;
        rightScore.textContent = p2Score;
    }
    else{
        finish();
    }
})
resetButton.addEventListener('click', function() {
    isFinish = false;
    p1Score = 0;
    p2Score = 0;

    leftScore.textContent = p1Score;
    rightScore.textContent = p2Score;
})

function finish() {
    isFinish = true;
}