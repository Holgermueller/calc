$(document).ready(() => {
  $("#display").text("0");

  let firstNumber = "";
  let secondNumber = "";
  let operator = "";
  let result = "";

  $(".number").on("click", (e) => {
    e.preventDefault();

    if (operator === "") {
      firstNumber += e.target.value;
      result = firstNumber;
    } else {
      secondNumber += e.target.value;
      result = secondNumber;
    }

    handleDisplay();
  });

  $("#clear").on("click", (e) => {
    e.preventDefault();
    $("#display").text("0");
    result = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
  });

  $(".operator").on("click", (e) => {
    operator = e.target.value;
  });

  handleSymbol = () => {
    if (operator === "") {
      operator = e.target.value;
    } else {
      handleCalculation();
    }
  };

  $("#equals").on("click", () => {
    console.log("=");
    if (operator === "+") {
      result = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
    } else if (operator === "-") {
      result = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
    } else if (operator === "x") {
      result = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
    } else if (operator === "/") {
      result = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
    }
    result = result;

    handleDisplay();
  });

  handleDisplay = () => {
    $("#display").text(result);
  };
});
