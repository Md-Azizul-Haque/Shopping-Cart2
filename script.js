
function updateCaseNumber(isIncrease,inputField){
    const caseField = document.getElementById(inputField);
    const caseFieldValue = caseField.value;
    const caseFieldNumber = parseInt(caseFieldValue);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = caseFieldNumber +1;
    }
    else{
        newCaseNumber =caseFieldNumber -1;
    }
    const inputFieldValue = caseField.value = newCaseNumber;
    return inputFieldValue;
}
function casePrice(fieldValue) {
    const casePrice = fieldValue * 59;
    const casePriceId = document.getElementById('casePrice');
    casePriceId.innerText = casePrice;
}
function phonePrice(fieldValue) {
    const casePrice = fieldValue * 1219;
    const casePriceId = document.getElementById('phonePrice');
    casePriceId.innerText = casePrice;
}
function totalPrice(phoneIdPrice) {
    const phonePice = document.getElementById(phoneIdPrice);
    const phonePiceInnerText = phonePice.innerText;
    const phonePriceInt = parseInt(phonePiceInnerText);
    return phonePriceInt;
}
function setPrice(price,setID) {
    const getCasePriceId = document.getElementById(setID);
    getCasePriceId.innerText = price;
}
function calculate() {
    const totalCasePrice = totalPrice('casePrice');
    const totalPhonePrice = totalPrice('phonePrice');
    const subtotal = totalCasePrice + totalPhonePrice;
    setPrice(subtotal,'subtotal');
    const tax =(subtotal * 0.1).toFixed(2);
    const totalTax = parseFloat(tax);
    setPrice(totalTax, 'tax');
    const total = subtotal + totalTax;
    setPrice(total,'total');
}
function remove() {
    const phonePrice = document.getElementById('phonePrice');
    phonePrice.innerText = '1219';
    const phoneInputField = document.getElementById('phoneInputField');
    phoneInputField.value = '1';
    const casePrice = document.getElementById('casePrice');
    casePrice.innerText = '59';
    const caseInputField = document.getElementById('caseInputField');
    caseInputField.value = '1';
    const subTotalId = document.getElementById('subtotal');
    subTotalId.innerText = '1278';
    const TotalId = document.getElementById('total');
    TotalId.innerText = '1278';
}


document.getElementById('caseMinusBtn').addEventListener('click', function() {
    const fieldValue = updateCaseNumber(false,'caseInputField');
     casePrice(fieldValue);
     calculate();
 })
document.getElementById('casePlusBtn').addEventListener('click', function() {
    const fieldValue = updateCaseNumber(true,'caseInputField');
     casePrice (fieldValue);
     calculate();
})

document.getElementById('phonePlusBtn').addEventListener('click', function() {
    const fieldValue = updateCaseNumber(true,'phoneInputField');
    phonePrice(fieldValue);
    calculate();
})
document.getElementById('phonMinusBtn').addEventListener('click', function(){
    const fieldValue = updateCaseNumber(false,'phoneInputField');
    phonePrice(fieldValue);
    calculate();
})
document.getElementById('casePriceRemove').addEventListener('click', function () {
    remove();
})
document.getElementById('phonePriceRemove').addEventListener('click', function () {
    remove();
})


// function btnPlus(plus) {

//     const getField = document.getElementById(plus);
//     const getFieldString = getField.value;
//     const getFieldNumber = parseInt(getFieldString);
//     const getFieldValue = getFieldNumber +1;
//     getField.value = getFieldValue;
//     return getFieldValue;
// }
// function btnMinus(minus) {
//     const getField = document.getElementById(minus);
//     const getFieldString = getField.value;
//     const getFieldNumber = parseInt(getFieldString);
//     const getFieldValue = getFieldNumber -1;
//     getField.value = getFieldValue;
//     return getFieldValue;
// }

// document.getElementById('phonMinusBtn').addEventListener('click', function() { 
//     const phoneMinusBtn = btnMinus('phoneInputField');
//     const phoneCost = phoneMinusBtn * 1219;
//     const phonePrice = document.getElementById('phonePrice');
//     phonePrice.innerText = phoneCost;
//     const subTotalId = document.getElementById('subtotal');
//     subTotalId.innerText = phoneCost - 59;
//     const total = document.getElementById('total');
//     total.innerText = phoneCost - 59;
// })
// document.getElementById('phonePriceRemove').addEventListener('click', function(){
//     const phonePrice = document.getElementById('phonePrice');
//     phonePrice.innerText = '1219';
//     const phoneInputField = document.getElementById('phoneInputField');
//     phoneInputField.value = '1';
//     const subTotalId = document.getElementById('subtotal');
//     subTotalId.innerText = '1278';
//     const TotalId = document.getElementById('subtotal');
//     TotalId.innerText = '1278';
// })
//  document.getElementById('phonePlusBtn').addEventListener('click', function(){
//     const phonePlusBtn = btnPlus('phoneInputField');
//     const phoneCost = phonePlusBtn *1219;
//     const phonePrice = document.getElementById('phonePrice');
//     phonePrice.innerText = phoneCost;
//     const subTotalId = document.getElementById('subtotal');
//     subTotalId.innerText = phoneCost+59;
//     const total = document.getElementById('total');
//     total.innerText = phoneCost + 59;

//  })
//  document.getElementById('casePlusBtn').addEventListener('click', function(){
//     const casePlusBtn = btnPlus('caseInputField');
//     const casePrice = casePlusBtn *59;
//     const getIdPrice = document.getElementById('casePrice');
//     getIdPrice.innerText = casePrice;
//     const subTotalId = document.getElementById('subtotal');
//     subTotalId.innerText = casePrice+1219;
//     const total = document.getElementById('total');
//     total.innerText = casePrice + 1219;
//  })
//  document.getElementById('caseMinusBtn').addEventListener('click', function(){
//     const caseMinusBtn = btnMinus('caseInputField')
//     const casePrice = caseMinusBtn *59;
//     const getIdPrice = document.getElementById('casePrice');
//     getIdPrice.innerText = casePrice;
//     const subTotalId = document.getElementById('subtotal');
//     subTotalId.innerText = casePrice - 1219;
//     const total = document.getElementById('total');
//     total.innerText = casePrice - 1219;
//  })

//  document.getElementById('casePriceRemove').addEventListener('click', function(){
//     const phonePrice = document.getElementById('casePrice');
//     phonePrice.innerText = '59';
//     const phoneInputField = document.getElementById('caseInputField');
//     phoneInputField.value = '1';
//     const subTotalId = document.getElementById('subtotal');
//     subTotalId.innerText = '1278';
//     const TotalId = document.getElementById('total');
//     TotalId.innerText = '1278';

// })