let isRadians = true;
let previousAnswerValue = null;

function divisionx() {
  document.getElementById("display").value += "/";
}

function inputNumber(number) {
  document.getElementById("display").value += number;
}

function multiply() {
  document.getElementById("display").value += "*";
}

function subtract() {
  document.getElementById("display").value += "-";
}

function addition() {
  document.getElementById("display").value += "+";
}

function addDot() {
  document.getElementById("display").value += ".";
}

function removeOne() {
  let displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}

function allClear() {
  document.getElementById("display").value = "";
}

function calculateSine() {
  document.getElementById("display").value += "sin(";
}

function calculateCosine() {
  document.getElementById("display").value += "cos(";
}

function calculateTangent() {
  document.getElementById("display").value += "tan(";
}

function calculateSquareRoot() {
  document.getElementById("display").value += "sqrt(";
}
function addBracket(bracket) {
  document.getElementById("display").value += bracket;
}
function calculateFactorial() {
  let displayValue = document.getElementById("display").value;
  let result = 1;
  for (let i = 2; i <= displayValue; i++) result *= i;
  previousAnswerValue = result;
  document.getElementById("display").value = result;
}
function calculatePercentage() {
  let displayValue = document.getElementById("display").value;
  let result = displayValue / 100;
  previousAnswerValue = result;
  document.getElementById("display").value = result;
}
function calculateExponential() {
  let displayValue = document.getElementById("display").value;
  let result = Math.exp(displayValue);
  previousAnswerValue = result;
  document.getElementById("display").value = result;
}
function calculateInverse() {
  let displayValue = document.getElementById("display").value;
  let result = 1 / displayValue;
  previousAnswerValue = result;
  document.getElementById("display").value = result;
}

function previousAnswer() {
  document.getElementById("display").value = previousAnswerValue;
}

function switchToRadians() {
  isRadians = true;
}

function switchToDegrees() {
  isRadians = false;
}

function calculateNaturalLog() {
  let displayValue = document.getElementById("display").value;
  let result = Math.log(displayValue);
  previousAnswerValue = result;
  document.getElementById("display").value = result;
}

function inputPi() {
  document.getElementById("display").value += "π";
}

function calculateLog() {
  document.getElementById("display").value += "log(";
}

function inputE() {
  document.getElementById("display").value += "e";
}

function solution() {
  let displayValue = document.getElementById("display").value;
  console.log(displayValue);
  let result;

  // Replace the operation names with the corresponding JavaScript Math functions
  let expression = displayValue
    .replace(/sin\(/g, "Math.sin(")
    .replace(/cos\(/g, "Math.cos(")
    .replace(/tan\(/g, "Math.tan(")
    .replace(/sqrt\(/g, "Math.sqrt(")
    .replace(/log\(/g, "Math.log10(")
    .replace(/π/g, "Math.PI")
    .replace(/e/g, "Math.E");
  console.log(expression);
  try {
    if (isRadians) {
      result = eval(expression);
    } else {
      // Convert degrees to radians for the trigonometric functions
      let radianExpression = expression
        .replace(/Math\.sin\((.*?)\)/g, "Math.sin($1 * Math.PI/180)")
        .replace(/Math\.cos\((.*?)\)/g, "Math.cos($1 * Math.PI/180)")
        .replace(/Math\.tan\((.*?)\)/g, "Math.tan($1 * Math.PI/180)");
      result = eval(radianExpression);
    }
  } catch (error) {
    console.error(error);
    result = "Error";
  }

  previousAnswerValue = result;
  document.getElementById("display").value = result;
}
