const startButton = document.querySelector(".start_btn");
const goButton = document.querySelector(".go");
const shareButton = document.querySelector("share");
const closeButton = document.querySelector(".close_btn");
const modal = document.querySelector("#modal");

function startCalculate() {
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");
    let time = Number(timeValue.vlaue);

    
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function copyUrl() {
    
}

startButton.addEventListener("click", startCalculate);
goButton.addEventListener("click", startCalculate);
shareButton.addEventListener("click", copyUrl);
closeButton.addEventListener("click", closeModal);
