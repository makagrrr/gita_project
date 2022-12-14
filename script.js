let products = [
    {
        name: "Apples",
        number: "Apples22",
        price: 2.50,
        color: "yellow",
        category: "Friuts",
    },
    {
        name: "Oranges",
        number: "Oranges222",
        price: 3.50,
        color: "orange",
        category: "Friuts",
    },
    {
        name: "Shoes",
        number: "Shoes222",
        price: 33.50,
        color: "Black",
        category: "Shoes",
    },
];

let index = 0;

let productsTable = document.getElementById("productsTable");





function addRowInTable()
{
    let rowToClone = document.getElementById("rowUsedOnlyForCloning");
    let copy = rowToClone.cloneNode(true);
    productsTable.appendChild(copy);
}

function addRowInTableWithJQuery()
{
    if(index >= products.length) return;

    let rowToClone = $("#rowUsedOnlyForCloning");
    let row = rowToClone.clone();
    let product = products[index];
    row.find(".name").text(product.name);
    row.find(".number").text(product.number);
    row.find(".price").text(product.price);
    row.find(".color").text(product.color);
    row.find(".category").text(product.category);
    $("#productsTable").append(row);
    index++;
}
