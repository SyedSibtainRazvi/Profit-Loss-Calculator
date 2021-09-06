let initialPrice = document.querySelector("#initial-price");
let quantity = document.querySelector("#quantity");
let currentPrice = document.querySelector("#current-price");
let checkBtn = document.querySelector("#calculate");
let clear = document.querySelector("#clear");

let output = document.querySelector("#output");

checkBtn.addEventListener("click", checkHandler);

function submitHandler() {
    let inPrice = Number(initialPrice.value);
    let quant = Number(quantity.value);
    let sellPrice = Number(currentPrice.value);

    calculateProfitAndLoss(inPrice, quant, sellPrice)
}


function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = ((initial - current) * quantity).toFixed(2);
        let lossPercentage = ((loss / (initial * quantity)) * 100).toFixed(2);
        showMessage(`Your total loss is ${loss} rupees and loss percentage is ${lossPercentage}%`);
        showColorRed();
    } else if (current > initial) {
        let profit = ((current - initial) * quantity).toFixed(2);
        let profitPercentage = ((profit / (initial * quantity)) * 100).toFixed(2);
        showMessage(`Your total profit is ${profit} rupees and profit percentage is ${profitPercentage}%`);
        showColorGreen();
    } else {
        showMessage("The Stocks are at same price!");
    }
};

function showMessage(msg) {
    output.innerHTML = msg;
};

function showColorRed() {
    output.style.color = "red";
};

function showColorGreen() {
    output.style.color = "green";
};



function checkHandler() {
    if (initialPrice.value > 0 && quantity.value > 0 && currentPrice.value > 0) {
        submitHandler()
    } else {
        showMessage("Please enter values greater than 0")
    }
};

clear.addEventListener("click", function clear() {
    initialPrice.value = '';
    quantity.value = '';
    currentPrice.value = '';
    output.innerHTML = '';
});