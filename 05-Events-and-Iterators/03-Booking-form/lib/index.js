// TODO: write your code here!
// Select the buttons - add and subtract
// innertext will be a string - change it to an integer
// so we can add and subtract from it in order to change the value
// we start at 1 - it can never go below 0
// if the middle value is equal to 1, we should disable the minus button
// when a user presses the add button, we need to change the
// middle value. add 1 to it. then the minus button will be enabled
// through the if statement? - can also minus
// need two event listeners? nested within an if statement?

const increaseCounter = document.querySelector("#plus");
const decreaseCounter = document.querySelector(".minus");
const counter = document.querySelector("#counter");
const counterNumber = Math.floor(counter.dataset.count);
let newNumber = 1;
const submit = document.querySelector("#submit");
const priceInput = document.querySelector("#price");
const changePrice = document.querySelector("#price-input");
let newValue = 15000;
let newPayment = 150;


increaseCounter.addEventListener("click", () => {
  newNumber += counterNumber;
  counter.innerText = newNumber.toString();
  newValue += 15000;
  changePrice.value = newValue;
  newPayment += 150;
  submit.value = `Pay ${newPayment}€`;
});

decreaseCounter.addEventListener("click", (event) => {
  if (counter.innerText === '1') {
    event.preventDefault();
  } else {
    newNumber -= counterNumber;
    counter.innerText = newNumber.toString();
    newValue -= 15000;
    changePrice.value = newValue;
    newPayment -= 150;
    submit.value = `Pay ${newPayment}€`;
  }
});
