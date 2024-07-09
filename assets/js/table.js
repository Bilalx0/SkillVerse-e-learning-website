// Initializing the Variables
let box = document.getElementById('box');
let text = document.getElementById('text');
let num = document.getElementById('inp1');
let range = document.getElementById('inp2');

// Creating Function For clearing
const cleared = () => {
  text.value = "";
}

// Creating Function For result
function fun() {

  text.value = '';
  // Using For Loop For Printing Output
  for (let input = 1; input <= range.value; input++) {

   
    text.value += "\n" + num.value + " x " + input + " = " + num.value * input;


  }
  num.value = "";
  range.value = "";
}
  // let result = document.getElementById('result');
  // result.innerHTML += "<br>" + num.value + " x " + input + " = " + num.value * input;

  // let num = prompt("Enter the number");
  // let range = prompt("Enter the range");

  //   for (let input = 1; input <= range.value; input++) {
  //     document.write("<center>" + "<h1>" + num.value + " x ", input + " = ", num.value * input, "<br>", "</h1>" + "</center>");

  //   }
