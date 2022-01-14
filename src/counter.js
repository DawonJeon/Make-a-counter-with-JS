
let counterDisplay = document.querySelector('.number');
let counterMinus = document.querySelector('.subOne');
let counterPlus = document.querySelector('.addOne');

let count = 0;

counterPlus.addEventListener("click",() => {
    count += 1;
    counterDisplay.innerHTML = count;
})

counterMinus.addEventListener("click",() =>{
    count -= 1;
    counterDisplay.innerHTML = count;
})