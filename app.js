const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const inputValue = document.getElementById("input-value");

incrementBtn.addEventListener("click", function () {
  inputValue.innerText = inputValue.value + 1;
});
