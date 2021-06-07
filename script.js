let c = 0;

document
  .getElementById("incrementButton")
  .addEventListener("click", function () {
    c++;
    document.getElementById("number").innerHTML = c;
  });

document
  .getElementById("decrementButton")
  .addEventListener("click", function () {
    if (c == 0) {
      c = 0;
    } else {
      c--;
    }
    document.getElementById("number").innerHTML = c;
  });

document.getElementById("resetButton").addEventListener("click", function () {
  c = 0;
  document.getElementById("number").innerHTML = c;
});
