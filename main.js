const result = document.getElementById("result");
const clearResult = document.getElementById("clear");
const buttons = document.querySelectorAll("#button");
const equal = document.getElementById("equal");
const operators = document.querySelectorAll("#num-first");
buttons.forEach((button) => {
  button.addEventListener("click", (eo) => {
    result.value += button.value;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", (eo) => {
    if (result.value === "") {
      result.value = "";
    } else {
      result.value += operator.value;
    }
  });
});
clearResult.addEventListener("click", (eo) => {
  result.value = "";
});
equal.addEventListener("click", (eo) => {
  if (result.value === "") {
    alert("Please Write a calculation");
  } else {
    const hi = eval(result.value);
    result.value = hi;
  }
});
result.addEventListener("click", (eo) => {
  if (result.value === "") {
    alert("Please Write a calculation");
  } else {
    alert("Copied !");
    setTimeout(() => {
      navigator.clipboard.writeText(result.value);
    }, 50);
  }
});
