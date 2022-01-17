$(document).ready(() => {
  $("#display").text("0");

  let firstNumber = "";
  let secondNumber = "";
  let operator = "";
  let result = "";

  $(".number").on("click", (e) => {
    e.preventDefault();

    if (operator === "") {
      firstNumber += $(this).val();
      console.log(firstNumber);
    }
  });

  $("#clear").on("click", (e) => {
    e.preventDefault();
    $("#display").text("0");
  });
});
