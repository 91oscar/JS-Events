console.log("Hello!");

const colorBtn1 = document.getElementById("the-button1");
const colorBtn2 = document.getElementById("the-button2");
const colorBtn3 = document.getElementById("the-button3");
const colorBtn4 = document.getElementById("the-button4");

// OutSide
// function changeColor() {
//   document.body.style.background = "teal";
// }

// Inside;
colorBtn1.addEventListener(
  "click",
  (changeColor) => (document.body.style.background = "teal")
);

colorBtn2.addEventListener(
  "mouseover",
  (changeColor) => (document.body.style.background = "steelblue")
);

colorBtn3.addEventListener(
  "mouseout",
  (changeColor) => (document.body.style.background = "red")
);

colorBtn4.addEventListener(
  "dblclick",
  (changeColor) => (document.body.style.background = "yellow")
);

// first Argument is the event you´re listening for.this will be a string.
// The Second argumente what we want to do when someone clicks on our button.
