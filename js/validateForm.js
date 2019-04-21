
//validate Register form
function validateForm(){

      var fname    = document.querySelector('#fname').value;
      var surname  = document.querySelector('#surname').value;
      var email2   = document.querySelector('#email2').value;
      var password = document.querySelector('#pwd').value;
      var password = document.querySelector('#pwd2').value;

      console.log("fname = "+fname +",surname = "+ surname + ",email2 = " + email2)


      var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var erFname = document.querySelector('#er-fname');
      var erSurname = document.querySelector('#er-surname');
      var erEmail = document.querySelector('#er-email');

      //DOM element var to show and hide errors
      erFname.classList.add('hide');
      erSurname.classList.add('hide');
      erEmail.classList.add('hide');
      let noErr = true;

      //validation of input fields
      if (fname == "") {
            event.preventDefault();
            event.stopPropagation();
            erFname.classList.remove('hide');
            erFname.innerHTML = "Fill in your first name";
            noErr = false;
     }
     if(surname == "") {

            event.preventDefault();
            erSurname.classList.remove('hide');
            document.getElementById('er-surname').innerHTML = "Fill in your Surname";
            noErr = false;
    }
    if(!email2.match(emailFormat)){
            event.preventDefault();
            erEmail.classList.remove('hide');
            document.querySelector('#er-email').innerHTML = "wrong email format";
            noErr = false;
      }
     if(noErr) {
            console.log('form validation with no errors');
            console.log(noErr);
    }

}//end function validate Form
