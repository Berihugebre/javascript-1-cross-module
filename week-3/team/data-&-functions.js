//data
let team_name = "Starks";
let team_members = ["Berihu", "Fatma","Aimal"];
//function
function print_team_names(string){
console.log('welcome to : ' + string);
};

function print_team_members(arr){
    for(let i = 0; i < arr.length; i++){
      
        console.log( i+1 +' '+ arr[i]);
    }

};
function introduce(string, arr){
console.log("Introducrion about the team : ");
console.log( print_team_names(string) + print_team_members(arr));

} 