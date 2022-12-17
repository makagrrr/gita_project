let submitCreateBtn = document.querySelector(".submit-create-btn");
let createForm = document.querySelector("#formCreate");
let productListCreate = document.querySelector("#product-list")

const nname = document.querySelector("#nameCreate");
const number = document.querySelector("#productNumberCreate");
const color = document.querySelector("#colorCreate");
const cost = document.querySelector("#costCreate");
const price = document.querySelector("#priceCreate");
const size = document.querySelector("#sizeCreate");
const weight = document.querySelector("#weightCreate");
const date = document.querySelector("#dateCreate");



let day = new Date().getDate() ;
console.log( day);
let month = new Date().toLocaleString('default', {month: 'long'});
console.log(month)
let year = new Date().getFullYear();
console.log(year);

let modifiedDate = day + ' ' + month + ' ' + year;
console.log(modifiedDate);

const initialModifiedDate = document.querySelector(".modify-date");
initialModifiedDate.innerHTML = modifiedDate;

submitCreateBtn.addEventListener('click', () => {
    let nnameValue = nname.value;
    let numberValue = number.value;
    let colorValue = color.value;
    let priceValue = price.value;
    
    let newProduct = `
        <tr class="product-row">
            <td> ${nnameValue}</td>
            <td> ${numberValue}</td>
            <td> ${colorValue}</td>
            <td> ${priceValue}</td>
            <td> ${modifiedDate}</td>
            <td>
                <button type='submit' class="btn btn-secondary edit-btn edit">Edit</button>
                <button class="btn btn-danger delete product-delete-btn">Delete</button>
            </td>
        </tr>
    `
    
    productListCreate.innerHTML += newProduct;
    mainSection.style.display = "block";
    createSection.style.display = "none";
    console.log(newProduct)
    //confirmationSection.style.display = "block";
    //productDeleteBtn.style.display= "inline";
    //editBtn.style.display="inline"
});
