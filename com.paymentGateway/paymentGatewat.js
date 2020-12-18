export function amountToBePaid(str) {
    let amount = parseFloat(str);
    setTheAmount(amount);
}
function setTheAmount(num) {
    let amountWrapper = document.getElementById('amountWrapper');
    amountWrapper.innerHTML = num.toString();
    console.log(amountWrapper);
}

window.open('./paymentGateway.html');