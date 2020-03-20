
// Counter is simple application for increasing and decreasing number
// Min number is 0 and max number is 20
// HAPPY CODING !!!

// Finding HTML elements by ID
let count = document.getElementById("count");
let plusBtn = document.getElementById("plus-btn");
let minusBtn = document.getElementById("minus-btn");

// Main counter
let i = 0;

// Increase function
let increase = () => {
    if(i < 20){
        i++;
    }else{
        i = 20;
    }
    count.innerHTML = i;
}

// Decreate function
let decreate = () => {
    if(i > 0){
        i--;
    }else{
        i = 0;
    }
    count.innerHTML = i;
}

// Display
plusBtn.addEventListener('click', increase);
minusBtn.addEventListener('click', decreate);