//handlers
function log_handler(){
    print_vals(a,b);
}
function a_handler(){
    var a_input = document.getElementById('inputa');
    var a_inputed = a_input.value;
    a = Number(a_inputed);
    console.log('a : ' + a)
}
function b_handler(){
    var b_input = document.getElementById('inputb');
    var b_inputed = b_input.value;
    b = Number(b_inputed);
    console.log('b : ' + b)
}

function add_handler(){
    do_math(a,b, add);
}
function subtract_handler(){
    do_math(a,b, subtract);
}
function multiply_handler(){
    do_math(a,b,multiply);
}
function divide_handler(){
    do_math(a,b,divide);
}
// Event Listner
var log_button = document.getElementById('log');
log_button.addEventListener('click', log_handler);

var change_a_button = document.getElementById('a');
change_a_button.addEventListener('click', a_handler);

var change_b_button = document.getElementById('b');
change_b_button.addEventListener('click', b_handler);

var add_button = document.getElementById('add');
add_button.addEventListener('click', add_handler);
var subtract_button = document.getElementById('subtract');
subtract_button.addEventListener('click', subtract_handler);

var multiply_button = document.getElementById('multiply');
multiply_button.addEventListener('click', multiply_handler);
var divide_button = document.getElementById('divide');
divide_button.addEventListener('click', divide_handler);