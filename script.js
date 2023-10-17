let formElem;

function init(){
    let i;
    
    formElem = document.querySelector("form");
    console.log(formElem);
    formElem.persons.parentNode.style.color = "#999";
    formElem.persons.disabled = true;

    for(i = 0; i < formElem.roomType.length; i++){
        formElem.roomType[i].addEventListener("click", event =>{
            checkIfFamilyRoom();
            checkCost();
        });
    }
}

window.onload = init;


function checkIfFamilyRoom(){
    if(formElem.roomType[2].checked === true){
        formElem.persons.parentNode.style.color = "#000";
        formElem.extra.parentNode.style.color = "#999";
        formElem.persons.disabled = false;
    }else{
        formElem.persons.parentNode.style.color = "#999";
        formElem.persons.disabled = true;
    }
}

function checkCost(){
    let roomType = Number(formElem.roomType.value.split(",")[1])
    let nights = Number(formElem.nights.value);
    let lakeView = Number(formElem.)
    let totalCost = document.getElementById("totalCost");
    totalCost.innerHTML = (nights*roomType);
}