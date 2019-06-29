var project = {
    name: 'Project one',
    link: 'https://github.com/Berihugebre/javascript-1-cross-module/tree/master/week-2',
    discription: 'This is our second project on javascript-1 week two' 
 };
function print_deets(obj){
for (let prop in project){
    console.log(prop + ': '+ obj[prop]);
}
}
