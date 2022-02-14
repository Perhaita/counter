let increase = document.getElementById("increase");
let numbers = document.getElementById("numbers");
let descrease = document.getElementById("descrease");

count = 0;

function increment() {
  count += 1;

  numbers.innerHTML = count;
  displayColor();
}

function decrement() {
  count -= 1;

  numbers.innerHTML = count;
  displayColor();
}

function reset() {
  count = 0;
  numbers.innerHTML = count;
  displayColor();
}

function displayColor() {
  if (count < 0) {
    document.getElementById("numbers").style.color = "red";
  } else if (count === 0) {
    document.getElementById("numbers").style.color = "black";
  } else {
    document.getElementById("numbers").style.color = "green";
  }
}
