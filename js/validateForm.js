
//validate Register form
var fname    = document.querySelector('#fname');
var surname  = document.querySelector('#surname');
var selectCity = document.querySelector('#selection');
var email2   = document.querySelector('#email2');
var password1 = document.querySelector('#pwd1');
var password2 = document.querySelector('#pwd2');

// trigger event handler to detect the keyboard
//user is registering compare password input
password2.addEventListener('keypress', start, false);
password2.addEventListener('keyup',spellCheck, false);

  // form input values
function validateForm(){

      // comments: regExp to validate input email format
      var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      // error messages target element
      var erFname = document.querySelector('#er-fname');
      var erSurname = document.querySelector('#er-surname');
      var erEmail = document.querySelector('#er-email');
      var erCity = document.querySelector('#er-city');

      //DOM element var to show and hide errors
      erFname.classList.add('hide');
      erSurname.classList.add('hide');
      erEmail.classList.add('hide');
      erCity.classList.add('hide');
      erPass1.classList.add('hide');
      erPass2.classList.add('hide');

      let noErr = true;


        fname.classList.add('is-valid');
        surname.classList.add('is-valid');
        email2.classList.add('is-valid');
        selectCity.classList.add('is-valid');
        password1.classList.add('is-valid');
        password2.classList.add('is-valid');

        fname.classList.remove('is-invalid');
        surname.classList.remove('is-invalid');
        selectCity.classList.remove('is-invalid');
        email2.classList.remove('is-invalid');
        password1.classList.remove('is-invalid');
        password2.classList.remove('is-invalid');


    //validation of input fields, check errors
     if (fname.value == "" || fname.value.length < 3) {
            event.preventDefault();
            event.stopPropagation();
            erFname.classList.remove('hide');
            fname.classList.remove('is-valid');
            fname.classList.add('is-invalid');

            erFname.innerHTML = "Fill in your first name";
            noErr = false;
     }
     if(surname.value == "" || surname.value.length < 3) {

            event.preventDefault();
            erSurname.classList.remove('hide');
            surname.classList.remove('is-valid');
            surname.classList.add('is-invalid');
            erSurname.innerHTML = "Fill in your Surname";
            noErr = false;
    }
    if(!email2.value.match(emailFormat)){
            event.preventDefault();
            email2.classList.remove('is-valid');
            email2.classList.add('is-invalid');
            erEmail.classList.remove('hide');
            erEmail.innerHTML = "wrong email format";
            noErr = false;
    }

    if (selectCity.value == "select city"){
            event.preventDefault();
            selectCity.classList.remove('is-valid');
            selectCity.classList.add('is-invalid');
            erCity.classList.remove('hide');
            erCity.innerHTML = "Select a city";
              noErr = false;
      }

      if (password1.value == ""){

            event.preventDefault();
            password1.classList.remove('is-valid');
            password1.classList.add('is-invalid');
            erPass1.classList.remove('hide');
            erPass1.innerHTML = "wrong password format";
            noErr = false;
      }
      if (password1.value.length < 3){
            event.preventDefault();
            password2.classList.remove('is-valid');
            password2.classList.add('is-invalid');
            erPass2.classList.remove('hide');
            erPass2.innerHTML = "The minimum length of password is 3!";
            noErr = false;
      }  // form input values
      if (password2.value == ""){
            event.preventDefault();
            password2.classList.remove('is-valid');
            password2.classList.add('is-invalid');
            erPass2.classList.remove('hide');
            erPass2.innerHTML = "wrong password format";
            noErr = false;
      }  // form input values
      if (password2.value.length < 3){
            event.preventDefault();
            password2.classList.remove('is-valid');
            password2.classList.add('is-invalid');
            erPass2.classList.remove('hide');
            erPass2.innerHTML = "Minimum length of password is 3!";
            noErr = false;
      }  // form input values

      if(password1.value != password2.value && (password1 !="" || password2 !="")){
              event.preventDefault();
              console.log(password1.value +""+ password2.value);

              password1.classList.remove('is-valid');
              password1.classList.add('is-invalid');
              erPass1.classList.remove('hide');
              erPass1.innerHTML = "wrong password match";

              password2.classList.remove('is-valid');
              password2.classList.add('is-invalid');
              erPass2.classList.remove('hide');
              erPass2.innerHTML = "wrong password match";
              noErr = false;

      }

      if( spellCheck() == false ){
        console.log("spellCheck()="+ spellCheck());
            event.preventDefault();
            password2.classList.remove('is-valid');
            password2.classList.add('is-invalid');
            erPass2.classList.remove('hide');
            erPass2.innerHTML = "Passwords do not match 1";
            noErr = false;
      }
      if(noErr) {
            event.preventDefault();
            console.log('form validation with no errors');
            console.log('selection city = '+ selectCity);
            console.log('noErr = '+ noErr);
      }

}//end function validate Form



function spellCheck(){
      var inputPassword2 = password2.value;
      var comparingPas1 = password1.value.substring(0,inputPassword2.length);

      console.log("inputInPas2substring = " +comparingPas1);

      if(inputPassword2 !="" && inputPassword2 != comparingPas1 && inputPassword2.length != comparingPas1.length){
        event.preventDefault();
        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.add('hide');
        erPass2.innerHTML = "password do not match 2 !";
        return false;

      }
      if(inputPassword2 == comparingPas1 && inputPassword2 != "" && inputPassword2.length >2){
        password2.classList.remove('is-invalid');
        // password2.classList.add('is-valid');
        erPass2.classList.add('hide');
        return true;
      }


      else {
        event.preventDefault();
        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.remove('hide');
        erPass2.innerHTML = "password do not match 2 !";
        return false;

      }



}

function start(){
      var textEnteredLength =  password2.value.length;
      console.log(textEnteredLength);

}
