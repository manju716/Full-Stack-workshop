let count = 0;
let step = 1;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const stepButtons = document.querySelectorAll(".step-btn");

// Update display and color
function updateDisplay() {
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

// Increment
incrementBtn.addEventListener("click", () => {
  count += step;
  updateDisplay();
});

// Decrement 
decrementBtn.addEventListener("click", () => {
  count -= step;
  if (count < 0) {
    count = 0;
  }
  updateDisplay();
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// Step 
stepButtons.forEach(button => {
  button.addEventListener("click", () => {
    step = Number(button.getAttribute("data-step"));

    stepButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
