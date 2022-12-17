

let mainSection = document.querySelector(".main-product-page");
let editSection = document.querySelector(".edit-form-section");
let confirmationSection = document.querySelector(".delete-confirmation");
let createSection = document.querySelector(".create-form-section");
let productList = document.querySelector("#product-list");
let confirmDelete = document.querySelector(".confirm-delete-btn")

let productRow = document.querySelectorAll(".product-row");
let newFormCreate = document.querySelector("#formCreate");

let newEditBtn = document.querySelector(".new-product-edit-btn");

createSection.style.display="none";
editSection.style.display="none";
confirmationSection.style.display="none";
    


confirmDelete.addEventListener("click",()=>{
   deleteProductFinal()
 } );

function returnBtn (){
    mainSection.style.display="block";
    confirmationSection.style.display= "none"
    editSection.style.display="none"
};


// create new product //
const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener('click', () => {
    createSection.style.display = "block";
    mainSection.style.display = "none"
});

// edit product //
const editBtn = document.querySelector(".edit-btn");
editBtn.addEventListener('click', () => {
    console.log("btn was clicked")
    editSection.style.display = "block";
    mainSection.style.display = "none";
});

function deleteProduct() {
    editSection.style.display = "none";
    mainSection.style.display = "none";
    createSection.style.display = "none";
    confirmationSection.style.display = "block";
}
let  deleteProductFinal=()=> {
    
    confirmationSection.style.display="none";
    mainSection.style.display="block";
    productRow.remove();
    
}
function editProduct() {
    mainSection.style.display = "none"
    createSection.style.display = "none";
    confirmationSection.style.display = "none";
    editSection.style.display="block";

}
//

// confirm delete //
// productList.addEventListener('click', (e) => {
//     target = e.target;
//     console.log(target)
//     target.parentElement.parentElement.remove();
//     confirmationSection.style.display = "none";
//     mainSection.style.display = "block";

// })