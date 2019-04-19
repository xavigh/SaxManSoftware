

function validateForm(){

  var fname = document.getElementById('fname').value;
  var surname = document.getElementById('surname').value;
    if (fname == "") {
      // alert("Name must be filled in");

            event.preventDefault();
            event.stopPropagation();

            //document.getElementById('er-fname').innerHTML = "Fill in your First name";


    }
    if (surname == "") {
      // alert("Surname must be filled out");

            event.preventDefault();
            event.stopPropagation();
            //document.getElementById('er-surname').innerHTML = "Fill in your Surname";


    }
}
