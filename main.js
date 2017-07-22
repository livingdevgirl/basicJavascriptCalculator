
function calculate(){
  solutionWindow.value = eval(solutionWindow.value);
}

let buttons = document.querySelectorAll('button');
let result = document.getElementById('solutionWindow').value
 buttons.forEach(function(button) {button.addEventListener("click", function() {solutionWindow.value += button.value})});
 document.querySelector('#clearButton').addEventListener("click", function() {solutionWindow.value = (" ");});
 document.querySelector('#equal').addEventListener("click", calculate);
