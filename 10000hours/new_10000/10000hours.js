const startButton = document.querySelector(".btn-exc");
const openButton = document.querySelector(".btn-go");
const closeButton = document.querySelector(".btn-close");
const shareButton = document.querySelector(".btn-share");
const result = document.querySelector(".cont-result");
const popup = document.querySelector(".pop-up");
const loading = document.querySelector(".cont-loading");

function startCalculate() {
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");
    
    if(timeValue.value == ""){
        //timeValue.focus();
        return false;
    }
    else if(fieldValue.value == ""){
        //fieldValue.focus();
        return false;
    } 
    else if(Number(timeValue.value) > 24){
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        loading.style.display = "none";
        result.style.display = "block";
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/Number(timeValue.value)), 10);
    }, 1800/* 1.8초 */);   
}

function openPopup() {
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == popup){
        closePopup();
    }
};

function copyUrl() {
    let url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다"); 
    });
}

startButton.addEventListener("click", startCalculate);
shareButton.addEventListener("click", copyUrl);
closeButton.addEventListener("click", closePopup);
openButton.addEventListener("click", openPopup);