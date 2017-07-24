let buttons = document.querySelectorAll('button');
let solutionWindow = document.getElementById('solutionWindow');
let equal = document.getElementById('equal');
let clear = document.getElementById('clearButton')


function calculate(){
  (solutionWindow.value = eval(solutionWindow.value))};

buttons.forEach(function(button){button.addEventListener('click', function() {(solutionWindow.value += button.value)})});
clear.addEventListener('click', function(){solutionWindow.value = " "});
equal.addEventListener('click', calculate)
