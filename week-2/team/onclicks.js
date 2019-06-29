var team_name_button = document.getElementById("teamName");
team_name_button.onclick = function() {
                            print_team_names(team_name);
                           }
var team_member_button = document.getElementById("teamMembers");
team_member_button.onclick = function() {
                          print_team_members(team_members);
                           }
var team_intro_button = document.getElementById("introduction");
team_intro_button.onclick = function() {
                          introduce(team_name,team_members)
                           }