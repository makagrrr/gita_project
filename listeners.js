let mainSection = document.querySelector(".main-product-page");
let editSection = document.querySelector(".edit-form-section");
let confirmationSection = document.querySelector(".delete-confirmation");
let createSection = document.querySelector(".create-form-section");
let productList = document.querySelector("#product-list");


createSection.style.display="none";
editSection.style.display="none";
confirmationSection.style.display="none";

let newFormCreate = document.querySelector("#formCreate");

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

// product delete //
const productDeleteBtn = document.querySelector(".product-delete-btn");
console.log(productDeleteBtn)
productDeleteBtn.addEventListener('click', () => {
    editSection.style.display = "none";
    mainSection.style.display = "none";
    createSection.style.display = "none";
    confirmationSection.style.display = "block";
})

// confirm delete //
productList.addEventListener('click', (e) => {
    target = e.target;
    console.log(target)
    target.parentElement.parentElement.remove();
    confirmationSection.style.display = "none";
    mainSection.style.display = "block";

})