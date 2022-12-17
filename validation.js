

const productNameEdit = document.getElementById("nameEdit");
const productNumberEdit = document.getElementById("productNumberEdit");
const priceEdit = document.getElementById("priceEdit");
const formEdit = document.getElementById("formEdit");
const colorEdit = document.getElementById("colorEdit");



const productNameCreate = document.getElementById("nameCreate");
const productNumberCreate = document.getElementById("productNumberCreate");
const priceCreate = document.getElementById("priceCreate");
const formCreate = document.getElementById("formCreate");
const colorCreate = document.getElementById("colorCreate");




const validationInput = document.querySelector(".validation-input");
const errorMessageName = document.querySelector(".error-message-name");
const errorMessageNumber = document.querySelector(".error-message-number");
const errorMessagePrice = document.querySelector(".error-message-price");



formEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputsEdit();
})

function checkInputsEdit() {
    const nameValueEdit = productNameEdit.value;
    const numberValueEdit = productNumberEdit.value;
    const priceValueEdit = priceEdit.value;
    const colorValueEdit = colorEdit.value;



    if(nameValueEdit === '') {
        errorMessageName.style.visibility = "visible";

    }

    if(numberValueEdit === '') {
        errorMessageNumber.style.visibility = "visible";
    }
    if(colorValueEdit === '') {
        errorMessageNumber.style.visibility = "visible";
    }
    
    if(priceValueEdit === '' || priceValueEdit < 0.1 && priceValue> 10000) {
        errorMessagePrice.style.visibility = "visible";
    }
}

formCreate.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputsCreate();
})

function checkInputsCreate() {
    const nameValueCreate = productNameCreate.value;
    const numberValueCreate = productNumberCreate.value;
    const priceValueCreate = priceCreate.value;
    const colorValueCreate = colorCreate.value;



    if(nameValueCreate === '') {
        errorMessageName.style.visibility = "visible";

    }
    
    if(numberValueCreate === '') {
        errorMessageNumber.style.visibility = "visible";
    }

    if(colorValueCreate === '') {
        errorMessageName.style.visibility = "visible";

    }
    
    if(priceValueCreate === '' || priceValueCreate < 0.1 && priceValue> 10000) {
        errorMessagePrice.style.visibility = "visible";
    }
}

