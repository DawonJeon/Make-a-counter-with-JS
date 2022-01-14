
let counterDisplay = document.querySelector('.number');
let counterMinus = document.querySelector('.subOne');
let counterPlus = document.querySelector('.addOne');


counterPlus.addEventListener("click",() => {
    // count += 1;
    // parseInt(counterDisplay);
    let counterDisplayToNumber = Number(counterDisplay.innerText)
    counterDisplayToNumber += 1;
    counterDisplay.innerText = counterDisplayToNumber;
})

counterMinus.addEventListener("click",() =>{
    // count -= 1;
    counterDisplay.innerText -= 1;
})