let formElem;
function init(){
    let i;
    
    formElem = document.querySelector("form");
    formElem.persons.parentNode.style.color = "#999";
    formElem.persons.disabled = true;

    for(i = 0; i < formElem.roomType.length; i++){
        formElem.roomType[i].addEventListener("click", event => {
            checkIfFamilyRoom();
            checkCost();
        });
    }
    formElem.nights.addEventListener("click", checkCost);

    for(i = 0; i < formElem.addition.length; i++){
        formElem.addition[i].addEventListener("click", event => {
            checkIfFamilyRoom();
            checkCost();
        })
    }

    formElem.campaigncode.addEventListener("focus", promotionCodeIsFocus);
    formElem.campaigncode.addEventListener("keyup", checkingPromotionCode);

    formElem.zipcode.addEventListener("blur", zipCode);

    formElem.city.addEventListener("blur", makeCityUpperCase);

    formElem.telephone.addEventListener("blur", phoneNumber);

}

window.onload = init;

function checkIfFamilyRoom(){
    if(formElem.roomType[2].checked === true){
        formElem.persons.parentNode.style.color = "#000";
        formElem.addition[2].parentNode.style.color = "#999";
        formElem.persons.disabled = false;
        formElem.addition[2].disabled = true;
    }else{
        formElem.persons.parentNode.style.color = "#999";
        formElem.addition[2].parentNode.style.color = "#000";
        formElem.persons.disabled = true;
        formElem.addition[2].disabled = false;
    }
}

function checkCost(){
    let extra = 0;
    let roomType = Number(formElem.roomType.value.split(",")[1]);
    let nights = Number(formElem.nights.value);
    
    for(i = 0; i < formElem.addition.length; i++){
        
        if(formElem.addition[i].checked && !formElem.addition[i].disabled){
            extra += Number(formElem.addition[i].value.split(",")[1]);
        }
        
    }

    let totalCost = document.getElementById("totalCost");
    totalCost.innerHTML = ((nights * roomType) + (nights * extra));
}

function checkingPromotionCode(){
    let regexPromotionCode = /^[A-Za-z]{3}-[0-9]{2}-[A-Za-z]{1}[0-9]{1}$/;
    console.log(formElem.campaigncode.value);
    console.log(regexPromotionCode);
    if(regexPromotionCode.test(formElem.campaigncode.value)){
        formElem.campaigncode.style.background = "#90EE90";
    }else{
        formElem.campaigncode.style.background = "#FFCCCB";
    }
}

function promotionCodeIsFocus(){
    formElem.campaigncode.style.background = "#FFCCCB";
}

function zipCode(){
    let regexZipCode = /^\d{3} ?\d{2}$/;
    let errorMessage = formElem.zipcode.parentNode.parentNode.getElementsByTagName("span")[1];
    console.log(regexZipCode);
    if(regexZipCode.test(formElem.zipcode.value) === false){
        errorMessage.innerHTML = "Fel format. Postnummer anges med fem siffror (0-9).";
    }else{
        errorMessage.innerHTML = "";
    }
}

function makeCityUpperCase(){
    let input = document.getElementById("city").value;
    let makeLettersUpperCase = input.toUpperCase();
    formElem.city.value = makeLettersUpperCase;
}

function phoneNumber(){
    let regexPhoneNumber = /^0\d{1,3}[-]?\d{5,8}$/;
    let errorMessage = formElem.telephone.parentNode.parentNode.getElementsByTagName("span")[1];
    console.log(regexPhoneNumber);
    if(regexPhoneNumber.test(formElem.telephone.value) === false){
        errorMessage.innerHTML = "Telefonnummer ska börja med 0 och sedan innehålla 6 till 11 siffror."
    }else{
        errorMessage.innerHTML = "";
    }
}