let counter = 1;

function clickHeader() {
    let message= "header was clicked " + counter;
    toastr.info(message);
    toastr.success(message);
    counter ++;
}

// let intro = document.getElementById("intro");
// console.log(intro);

let button = document.getElementById("intro");
console.log(button)