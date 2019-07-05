//handler
function team_name_handler(){
    print_team_names(team_name);
}
function team_members_handler(){
    print_team_members(team_members);
}
function introduction_handler(){
    introduce(team_name, team_members);
}

function add_member_handler(){
    var add_member_input = document.getElementById('inputMember');
    var add_member = add_member_input.value;
    team_members.push(add_member);
    console.log("added_member: "+ add_member);
}
// event listner
var team_name_button = document.getElementById('teamName');
team_name_button.addEventListener('click', team_name_handler);

var team_members_button = document.getElementById('teamMembers');
team_members_button.addEventListener('click', team_members_handler);

var introduce_button = document.getElementById('introduction');
introduce_button.addEventListener('click', introduction_handler);
var add_member_button = document.getElementById('addMember');
add_member_button.addEventListener('click', add_member_handler);