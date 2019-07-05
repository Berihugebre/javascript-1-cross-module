//data
var project = {
    name: 'Project three',
    link: 'https://github.com/Berihugebre/javascript-1-cross-module/tree/master/week-3',
    discription: 'This is our third project on javascript-1 week three' 
 };
 //function
 function print_deets(obj){
     for(let prop in obj){
         console.log(prop + ': ' + obj[prop]);
     }
 }