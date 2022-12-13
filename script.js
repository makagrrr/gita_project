

let counter = 1;

let hideMe = document.getElementById("hide-el");
let header = document.getElementById("header");


function changeText() {
    header.innerHTML = 'hello hello';
}

let button = document.getElementById("btn")
let multiply = document.getElementById("multiply");

function buttonClicked() {
    button.innerHTML = "button2";
    let message= "header was clicked " + counter;
    toastr.info(message);
    toastr.success(message);
    counter ++;
    hideMe.hidden = true;
    header.style.backgroundColor = "yellow";
    multiply.textContent = "do not";
    multiply.style.color = "blue"
    //$("#header").toggleClass("highlight");
    header.classList.add("highlight")
}


let classPar = document.querySelector(".paragr");
console.log(classPar.textContent);

let fruits = ["Banana", "Mango", "Orange", "Apple"];
fruits.sort();
console.log(fruits)

let points = [40, 100, 30, 4, 0, 16, 74, 21]
points.sort ((a, b)  =>  b-a);
console.log(points);

let points2 = points.map((value, index, array) => value * 4);
console.log(points2);

let over40 = points.filter((value, index, array) => value > 40)
console.log(over40);

let sum = points.reduce((total, value, index, array) => total  + value)
console.log(sum)

let find = points.findIndex((value, index, array) => value > 18)
console.log(find)

let today= new Date(); 
let yesterday = new Date(2022, 11, 3, 22);
let strgDate = new Date("October 13, 2014");
console.log(today, yesterday, strgDate); 



let products = [
    {
        Name : "Mango",
        Price : 2.2,
        Amounnt: 12
    },
    {
        Name: "Apple",
        Price: 3.1,
        Amount: 10
    },
    {
        Name: "Orange",
        Price: 1.8,
        Amount: 22
    }
]

function submitProducts() {

    let table = document.querySelector(".table-container");
    //let table = $(".table-container");

    for(let product of products) {
        //let tr = $("<tr></tr>");
        //$("<td></td>").text(product.Name).appendTo(tr);
        //$("<td></td>").text(product.Price).appendTo(tr);
        //$("<td></td>").append($("<button class='btn btn-primary"> Edit </button>)).appendTo(tr)
        let tr = document.createElement("tr");
        

        let nameTd = document.createElement("td");
        nameTd.textContent = product.Name;

        let priceTd = document.createElement("td");
        priceTd.textContent = product.Price;

        let editCell = document.createElement("td");
        let button = document.createElement("a");
        button.classList.add("btn", "btn-primary");
        button.href = "second.html?name=" + product.Name;
        button.textContent = "edit";
        editCell.appendChild(button);
        //table.append(tr);

        tr.appendChild(nameTd);
        tr.appendChild(priceTd);
        tr.appendChild(editCell);
        table.appendChild(tr);
    }
}

let customer = document.querySelector(".customer");
let customerContainer = document.querySelector(".customer-container");

 function addCustomer() {
    
    let newCustomer = document.createElement("div");
    newCustomer.className = "customer";
    newCustomer.textContent = "The new customer " + counter;
    customerContainer.appendChild(newCustomer);
    counter++;
 }

 let members = document.querySelector(".members");
 function submitMember() {
    let randomColor = "#" + Math.floor(Math.random()*256**3).toString(16);
    //let inputEl = "<input value='"+randomColor+"'>";
    let inputEl = "<p> '"+randomColor+"'</p>"
    members.innerHTML += inputEl;
    members.style.backgroundColor = randomColor;
   
    //inputEl.style.borderColor = "red";
    console.log(inputEl);
 }

let productsTable = document.getElementById("products-table")
//productsTable.onclick = clickEventHandler;

document.querySelectorAll("td, tr, button, table, div, footer").forEach(e => {
    //e.onclick = clickEventHandler;
    //e.addEventListener("click", clickEventHandler);
    e.addEventListener("click", clickEventHandler, true)
})

//console.log(productsTable);
let count = 0;
let prevElement;

 function clickEventHandler(e) {
    console.log(e.type);
    console.log(getPhaseName(e.eventPhase));
    console.log(e.target.nodeName, " was clicked " );
    count++;
   // console.log(e.srcElement.nodeName + " element was clicked");
   // console.log(e.srcElement.textContent);
   console.log("we subscribed in:", e.currentTarget.nodeName);
   
   e.target.style.border = "2px solid " + (count % 2 == 0 ? "red" : "green") ;
   //e.currentTarget.style.border = "5px solid blue";
   prevElement = e.currentTarget;
 }
function getPhaseName(eventPhase) {
    if(eventPhase == Event.BUBBLING_PHASE) {
        return "BUBBLING"
    } else if(eventPhase == Event.CAPTURING_PHASE) {
        return "CAPTURING"
    } else {
        return "AT-TARGET"
    }
}

function cloneTheLastRow() {
    //same with a single line code but cloning first row
    //productsTable.appendChild(document.getElementById("firstRow").cloneNode(true));
    let allTableRows = document.querySelectorAll("#products-table tr");
    console.log(allTableRows);
    let lastRow = allTableRows[allTableRows.length -1];
    let copy = lastRow.cloneNode(true);
    productsTable.appendChild(copy)
}

productsTable.addEventListener("click", e => {
    if(e.target.nodeName == "BUTTON") {
        toastr.error("subscribed with event listener")
    }
})

function createARow() {
    // let tr = document.createElement("tr");
    // var td = document.createElement("td");
    // td.textContent = "Apples";
    // tr.appendChild(td);

    // var td = document.createElement("td");
    // td.textContent = "app-22";
    // tr.appendChild(td);

    // var td = document.createElement("td");
    // td.textContent = "12";
    // tr.appendChild(td);

    // var td = document.createElement("td");
    // td.textContent = "green";
    // tr.appendChild(td);

    // var td = document.createElement("td");
    // td.textContent = "fruits";
    // tr.appendChild(td);
    // productsTable.appendChild(tr);

    let rowToClone = document.getElementById("rowUsedOnlyForCloning");
    let copiedRow = rowToClone.cloneNode(true);
    productsTable.appendChild(copiedRow);


    // adding rows with jquery
    // let cloneRowJq = $("#rowUsedOnlyForCloning");
    // let copyJq = cloneRowJq.clone();
    // productsTable.append(copyJq); 
}