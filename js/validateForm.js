
  // form input values
  var fname    = document.querySelector('#fname');
  var surname  = document.querySelector('#surname');
  var selectCity = document.querySelector('#selection');
  var email2   = document.querySelector('#email2');
  var password1 = document.querySelector('#pwd1');
  var password2 = document.querySelector('#pwd2');
  // comments: regExp to validate input email format
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var noErr = false;
  var shortString1 = false;
  var shortString2 = false;

  // trigger event handler to detect the keyboard
  fname.addEventListener('blur', validateName,false);
  surname.addEventListener('blur', validateSurname,false);
  selectCity.addEventListener('blur',validateCity,false);
  email2.addEventListener('keyup', validateEmail,false);
  password1.addEventListener('blur',validatePassword, false);
  password2.addEventListener('presskey',spellCheck, false);

  // error messages target element
  var erFname   = document.querySelector('#er-fname');
  var erEmail   = document.querySelector('#er-email');
  var erSurname = document.querySelector('#er-surname');
  var erCity    = document.querySelector('#er-city');
  var erEmail   = document.querySelector('#er-email');
  var erPass1   = document.querySelector('#er-pwd1');
  var erPass2   = document.querySelector('#er-pwd2');



//validate Register form
  function validateForm() {

      // add valid before validating
      fname.classList.add('is-valid');
      email2.classList.add('is-valid');
      surname.classList.add('is-valid');
      selectCity.classList.add('is-valid');
      password1.classList.add('is-valid');
      password2.classList.add('is-valid');

      // remove invalid before validating
      fname.classList.remove('is-invalid');
      selectCity.classList.remove('is-invalid');
      surname.classList.remove('is-invalid');
      email2.classList.remove('is-invalid');
      password1.classList.remove('is-invalid');
      password2.classList.remove('is-invalid');

      //DOM element var to show and hide errors
      erFname.classList.add('hide');
      erSurname.classList.add('hide');
      erEmail.classList.add('hide');
      erCity.classList.add('hide');
      erPass1.classList.add('hide');
      erPass2.classList.add('hide');

      var noErr = true;
    //validation of input fields, check errors
     if (fname.value == "") {
            event.stopPropagation();
            erFname.classList.remove('hide');
            fname.classList.remove('is-valid');
            fname.classList.add('is-invalid');
            erFname.innerHTML = "Fill in your first name";
            noErr = false;
     }
     if ( fname.value.length < 3 && fname != "") {

            event.stopPropagation();
            erFname.classList.remove('hide');
            fname.classList.remove('is-valid');
            fname.classList.add('is-invalid');

            erFname.innerHTML = "Minimum 3 characters..";
            noErr = false;
     }
     if(surname.value == "" ) {

            erSurname.classList.remove('hide');
            surname.classList.remove('is-valid');
            surname.classList.add('is-invalid');
            erSurname.innerHTML = "Fill in your Surname";
            noErr = false;
    }
    if(surname.value.length < 3 && fname != "") {


           erSurname.classList.remove('hide');
           surname.classList.remove('is-valid');
           surname.classList.add('is-invalid');
           erSurname.innerHTML = "Minimum 3 characters..";
           noErr = false;
   }

    if(!email2.value.match(emailFormat)){

            email2.classList.remove('is-valid');
            email2.classList.add('is-invalid');
            erEmail.classList.remove('hide');
            erEmail.innerHTML = "wrong email format";
            noErr = false;
    }

    if (selectCity.value == "select city"){

            selectCity.classList.remove('is-valid');
            selectCity.classList.add('is-invalid');
            erCity.classList.remove('hide');
            erCity.innerHTML = "Select a city";
              noErr = false;
      }
    if ( noErr && validatePassword() ) {

            console.log('form validation with no errors');
            console.log('selection city = '+ selectCity);
            console.log('noErr = '+ noErr);
        //user is registering compare password input
      }
}//end function validate Form

// this fuction is to check the input by the user and compare string entered.
function spellCheck(){

      var inputPassword2 = password2.value;
      var subStringPw1  = password1.value.substring(0,inputPassword2.length);

      if(inputPassword2 !="" && inputPassword2 != subStringPw1 && inputPassword2.length != subStringPw1.length ){

        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.add('hide');
        erPass2.innerHTML = "password do not match...if one !";

        console.log("inputInPas2substring = " +subStringPw1);
        console.log("subStringPw1 = " +subStringPw1);
        return false;

      }
      if(inputPassword2 == subStringPw1 && inputPassword2 != "" ){
        password1.classList.remove('is-invalid');
        password1.classList.add('is-valid');
        password2.classList.remove('is-invalid');
        password2.classList.add('is-valid');
        erPass2.classList.add('hide');
        erPass1.classList.add('hide');

        console.log("inputInPas2substring = " +subStringPw1);
        console.log("subStringPw1 = " + inputPassword2);
        return true;
      }

}

// this fuction is to validate the passwords in real time input
function validatePassword() {

  var inputPassword2 = password2.value;
  password1.addEventListener('focus',validatePassword, false);


  if (password1.value.length >= 3 ){

        password1.classList.remove('is-invalid');
        password1.classList.add('is-valid');
        erPass1.classList.add('hide');
        erPass1.innerHTML = "The minimum length of password is 3!";
        var shortString1 = false;
  }
  if (password2.value.length >= 3 ){

        password2.classList.remove('is-invalid');
        password2.classList.add('is-valid');
        erPass2.classList.add('hide');
        erPass2.innerHTML = "The minimum length of password is 3!";
        var shortString2 = false;
  }

  if (password2.value.length < 3 && password2.value != ""){

        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.remove('hide');
        erPass2.innerHTML = "Minimum length of password is 3!";
        noErr = false;
        shortString2 = true;
  }
  if(inputPassword2 != password1.value){

        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.add('hide');
        erPass2.innerHTML = "password do not match !";

  }
  if (password1.value == ""){

        password1.classList.remove('is-valid');
        password1.classList.add('is-invalid');
        erPass1.classList.remove('hide');
        erPass1.innerHTML = "Enter password";
        noErr = false;
  }
  if (password1.value.length < 3 && password1.value != ""){

        password1.classList.remove('is-valid');
        password1.classList.add('is-invalid');
        erPass1.classList.remove('hide');
        erPass1.innerHTML = "The minimum length of password is 3!";
        noErr = false;
        shortString1 = true;
  }

  if (password2.value == ""){

        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.remove('hide');
        erPass2.innerHTML = "Confirm password";
        noErr = false;

  }


    if(password1.value != password2.value &&
        password1 !="" && !shortString1 &&
        password2 != "" && !shortString2){

          console.log(password1.value +""+ password2.value);
          password2.classList.remove('is-valid');
          password2.classList.add('is-invalid');
          erPass2.classList.remove('hide');
          erPass2.innerHTML = "wrong password match";
          noErr = false;
  }
  else {
    return true;
  }


}
// validate fields for the event listeners, individually
function validateName(){
  if ( fname.value.length < 3 && fname != "") {

         fname.classList.remove('is-valid');
         fname.classList.add('is-invalid');
         erFname.classList.remove('hide');
         erFname.innerHTML = "Minimum 3 characters..";
         noErr = false;
  }

  if ( fname.value != "" && fname.value.length >=3){

        fname.classList.remove('is-invalid');
        fname.classList.add('is-valid');
        erFname.classList.add('hide');
        noErr = true;
  }
}

function validateSurname(){
  if ( surname.value.length < 3 && surname != "") {
         erSurname.classList.remove('hide');
         surname.classList.remove('is-valid');
         surname.classList.add('is-invalid');
         erSurname.innerHTML = "Minimum 3 characters..";
         noErr = false;
  }
  if ( surname.value != "" && surname.value.length >=3){
      surname.classList.remove('is-invalid');
      surname.classList.add('is-valid');
      erSurname.classList.add('hide');
      noErr = true;
  }
}

function validateCity(){

    if (selectCity.value == "select city"){
          selectCity.classList.remove('is-valid');
          selectCity.classList.add('is-invalid');
          erCity.classList.remove('hide');
          erCity.innerHTML = "Select a city";
          noErr = false;
    }else {
      selectCity.classList.add('is-valid');
      selectCity.classList.remove('is-invalid');
      erCity.classList.add('hide');
      noErr = true;
    }
}

function validateEmail() {
  if(!email2.value.match(emailFormat)){

          email2.classList.remove('is-valid');
          email2.classList.add('is-invalid');
          erEmail.classList.remove('hide');
          erEmail.innerHTML = "wrong email format";
          noErr = false;
  }
  else {
          email2.classList.remove('is-invalid');
          email2.classList.add('is-valid');
          erEmail.classList.add('hide');
          noErr = true;
  }
}
