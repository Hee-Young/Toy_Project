const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");

function startCalculate() {
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");
    
    if(fieldValue.value == ""){
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if(Number(timeValue.value) > 24){
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        loading.style.display = "none";
        result.style.display = "flex";
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000/Number(timeValue.value)), 10);
    }, 1800);   
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal){
        closeModal();
    }
};

function copyUrl() {
    let url = window.location.href;

    /*  js에서 제공하는 clipboard api를 사용한 클립보드 복사 
        Clipboard API는  promise 방식을 기반으로 작동하며, 
        비동기로 클립보드 데이터에 접근할 수 있기 때문에 클립보드의 데이터를 읽거나 데이터를 직접 넣을 수 있다. 
    */
    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다"); 
    });

    // execCommand(=> 이제는 사용되지 않음) 사용하는 클립보드 복사 코드 
    /* 
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    
    alert("URL이 복사되었습니다"); 
    */
}

startButton.addEventListener("click", startCalculate);
shareButton.addEventListener("click", copyUrl);
closeButton.addEventListener("click", closeModal);
openButton.addEventListener("click", openModal);
