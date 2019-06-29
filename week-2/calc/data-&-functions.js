//data
var a = 5;
var b = 10;
//functions
function print_vals(a,b){
    console.log(a,b);
};
function do_math(a, b, fun){
   let result =  fun(a,b);
   console.log(result);

};
function add(a, b){
   return a + b;
};
function subtract(a, b){
    return a - b;
    
 };
 function multiply(a, b){
    return a * b;
 };
 function divide(a, b){
    return a / b;
 };
