// handler
function print_handler() {
        print_deets(project);
  }
// Event listner
var print_button = document.getElementById('print');
print_button.addEventListener('click', print_handler);