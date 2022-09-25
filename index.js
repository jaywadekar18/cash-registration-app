let noOfNotes = document.querySelectorAll(".no-of-notes");
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountToBeReturned =
        Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});
function calculateChange(amount) {
  for (let i = 0; i < availableNotes.length; i++) {
    if (amount / availableNotes[i] < 1) {
      noOfNotes[i].innerText = 0;
    } else {
      let floatNum = amount / availableNotes[i];
      let wholeNum = Math.floor(floatNum);
      amount = amount - availableNotes[i] * wholeNum;
      noOfNotes[i].innerText = wholeNum;
      console.log(availableNotes[i], "-->", wholeNum);
    }
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
