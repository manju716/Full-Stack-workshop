let count = 0;

let display = document.getElementById("count");

document.getElementById("plus").onclick = function () {
  count++;
  display.innerText = count;
  display.style.color = "green";
};

document.getElementById("minus").onclick = function () {
  if (count > 0) {
    count--;
    display.style.color = "red";
  }
  display.innerText = count;

  if (count === 0) {
    display.style.color = "black";
  }
};

document.getElementById("reset").onclick = function () {
  count = 0;
  display.innerText = count;
  display.style.color = "black";
};
