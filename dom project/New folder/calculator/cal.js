let result = document.getElementById("result");
let operator = "";
let value1 = "";
let value2 = "";

function addValue(num) {
  if (operator == "") {
    value1 += num;
    result.value = value1;
  } else {
    value2 += num;
    result.value = value2;
  }
}

function addOperator(op) {
  operator = op;
}

function clearResult() {
  result.value = "";
  operator = "";
  value1 = "";
  value2 = "";
}

function calculate() {
  let resultValue;
  switch (operator) {
    case "+":
      resultValue = Number(value1) + Number(value2);
      break;
    case "-":
      resultValue = Number(value1) - Number(value2);
      break;
    case "*":
      resultValue = Number(value1) * Number(value2);
      break;
    case "/":
      resultValue = Number(value1) / Number(value2);
      break;
    default : console.log("Invalid operator")
  }
  result.value = resultValue;
 
}
