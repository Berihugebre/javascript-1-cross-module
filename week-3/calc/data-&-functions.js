//data
var a = 5;
var b = 10;
//functions
function print_vals(x,y){
    console.log(x,y);
};
function do_math(x, y, func){
   let result =  func(x,y);
   console.log(result);

};
function add(x, y){
    return  x + y;
};
function subtract(x, y){
    return  x - y;
    
 };
 function multiply(x, y){
    return  x * y;
 };
 function divide(x, y){
    return x / y;
 };