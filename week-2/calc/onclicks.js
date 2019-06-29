var log_button = document.getElementById("log");
log_button.onclick = function() {
                            print_vals(a,b);
                           }
var add_button = document.getElementById("add");
add_button.onclick = function() {
                            do_math(a,b,add);
                           }
var subtract_button = document.getElementById("subtract");
subtract_button.onclick = function() {
                            do_math(a,b,subtract);
                           }
var multiply_button = document.getElementById("multiply");
multiply_button.onclick = function() {
                            do_math(a,b,multiply);
                           }
var divide_button = document.getElementById("divide");
divide_button.onclick = function() {
                            do_math(a,b,divide);
                           }
