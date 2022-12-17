let mainSection = document.querySelector(".main-product-page");
let editSection = document.querySelector(".edit-form-section");
let confirmationSection = document.querySelector(".delete-confirmation");
let createSection = document.querySelector(".create-form-section");

createSection.style.display="none";
editSection.style.display="none";
confirmationSection.style.display="none";
let newFormCreate = document.querySelector("#formCreate");

console.log(confirmationSection)
// const nname = document.querySelector("#nameCreate");
// const number = document.querySelector("#numberCreate");
// const color = document.querySelector("#colorCreate");
// const cost = document.querySelector("#costCreate");
// const price = document.querySelector("#priceCreate");
// const size = document.querySelector("#sizeCreate");
// const weight = document.querySelector("#weightCreate");
// const date = document.querySelector("#dateCreate");


const compId = document.querySelector(".comp-id");
const compName = document.querySelector(".comp-name");
const compNumber = document.querySelector(".comp-number");
const compColor = document.querySelector(".comp-color");
const compCost = document.querySelector(".comp-cost");
const compSize = document.querySelector(".comp-size");
const compWeight = document.querySelector(".comp-weight");
const compModelId = document.querySelector(".comp-model-id");
const compModify = document.querySelector(".comp-modify");

// create new product //
const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener('click', () => {
    createSection.style.display = "block";
    mainSection.style.display = "none"
});


const productDeleteBtn = document.querySelector(".product-delete-btn");
console.log(productDeleteBtn)
productDeleteBtn.addEventListener('click', () => {
    editSection.style.display = "none";
    mainSection.style.display = "none";
    createSection.style.display = "none";
    confirmationSection.style.display = "block";
})

const editBtn = document.querySelector(".edit-btn");
editBtn.addEventListener('click', () => {
    console.log("btn was clicked")
    editSection.style.display = "block";
    mainSection.style.display = "none";
});

let productList = document.querySelector("#product-list");

const confirmBtn = document.querySelector(".confirm-delete-btn");

productList.addEventListener('click', (e) => {
    target = e.target;
    console.log(target)
    target.parentElement.parentElement.remove();
    confirmationSection.style.display = "none";
    mainSection.style.display = "block";

})
// productList.addEventListener('click', (e) => {
//         target = e.target;
//         if(target.classList.contains("delete")) {
//             target.parentElement.parentElement.remove();
//             confirmationSection.style.display = "none";
//             mainSection.style.display = "block";
//         }
//     })

// editBtn.addEventListener('click' ,() => {
//     editSection.style.display = "none";
//     createSection.style.display = "none";
//     mainSection.style.display = "none";
//     confirmationSection.display = "block";

// })




// productList.addEventListener('click', (e) => {
//     target = e.target;
    
//     if(target.classList.contains("delete")) {
//         //mainSection.style.display = "none";
//         editSection.style.display = "none";
//         createSection.style.display = "none";
//         confirmationSection.display = "block"
//         target.parentElement.parentElement.remove();
//     }
// })
// const productRow = document.querySelector(".product-row");

// function createNewProduct() {
//     mainSection.style.display = "none";
//     editSection.style.display = "none";
//     confirmationSection.style.display = "none";
// }




// newFormCreate.addEventListener('submit', (e) => {

//     if(selectedRow == null) {
//         const list = document.querySelector("#product-list");
//         const row = document.createComment("tr");

//         row.innerHTML = `
//         <td>${nname}</td>
//         <td>${number}</td>
//         <td>${color}</td>
//         <td>${cost}</td>
//         <td>${price}</td>
//         <td>${size}</td>
//         <td>${weight}</td>
//         <td>${date}</td>
//         <td>
//             <button type='submit' class="btn btn-secondary edit">Edit</button>
//             <button class="btn btn-danger delete">Delete</button>
//         </td>
//         `;
//         list.appendChild(row);
//         selectedRow = null;
//         alert("product added")
//     }
// })

// function deleteProduct() {

// }