const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rate = document.getElementById('rate');

//event listeners

currencyOne.addEventListener('change',calculate);
currencyOne.addEventListener('input',calculate);
amountOne.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
    const tempVar = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = tempVar;
    calculate();
})

calculate();


function calculate(){
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const rateNew = data.rates[currency_two];
        rate.innerText = `1 ${currency_one} = ${rateNew} ${currency_two}`;
        amountTwo.value = (amountOne.value * rateNew).toFixed(2);
    })
}
