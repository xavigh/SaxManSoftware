


  // form input values
  const fname    = document.querySelector('#fname');
  const surname  = document.querySelector('#surname');
  const selectCity = document.querySelector('#selection');
  const email2   = document.querySelector('#email2');
  const password1 = document.querySelector('#pwd1');
  const password2 = document.querySelector('#pwd2');


  // trigger event handler to detect the keyboard


  password1.addEventListener('blur',validatePassword, false);

  password2.addEventListener('presskey',spellCheck, false);
  password2.addEventListener('blur',spellCheck, false);





  fname.addEventListener('keyup', validateForm,false);
  surname.addEventListener('keyup', validateForm,false);
  selectCity.addEventListener('click', validateForm,false);
  email2.addEventListener('keyup', validateForm,false);
  // error messages target element
  var erFname = document.querySelector('#er-fname');
  var erEmail = document.querySelector('#er-email');
  var erSurname = document.querySelector('#er-surname');
  var erCity    = document.querySelector('#er-city');
  var erEmail   = document.querySelector('#er-email');
  var erPass1 = document.querySelector('#er-pwd1');
  var erPass2 = document.querySelector('#er-pwd2');

  var shortString1 = false;
  var shortString2 = false;


//validate Register form
  function validateForm() {


      // comments: regExp to validate input email format
      var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




      //DOM element var to show and hide errors
      erFname.classList.add('hide');
      erSurname.classList.add('hide');
      erEmail.classList.add('hide');
      erCity.classList.add('hide');
      erPass1.classList.add('hide');
      erPass2.classList.add('hide');

      let noErr = true;


        fname.classList.add('is-valid');
        email2.classList.add('is-valid');
        surname.classList.add('is-valid');
        selectCity.classList.add('is-valid');
        password1.classList.add('is-valid');
        password2.classList.add('is-valid');

        fname.classList.remove('is-invalid');
        selectCity.classList.remove('is-invalid');
        surname.classList.remove('is-invalid');
        email2.classList.remove('is-invalid');
        password1.classList.remove('is-invalid');
        password2.classList.remove('is-invalid');


    //validation of input fields, check errors
     if (fname.value == "") {
            event.preventDefault();
            event.stopPropagation();
            erFname.classList.remove('hide');
            fname.classList.remove('is-valid');
            fname.classList.add('is-invalid');

            erFname.innerHTML = "Fill in your first name";
            noErr = false;
     }
     if ( fname.value.length < 3 && fname != "") {
            event.preventDefault();
            event.stopPropagation();
            erFname.classList.remove('hide');
            fname.classList.remove('is-valid');
            fname.classList.add('is-invalid');

            erFname.innerHTML = "Minimum 3 characters..";
            noErr = false;
     }
     if(surname.value == "" ) {

            event.preventDefault();
            erSurname.classList.remove('hide');
            surname.classList.remove('is-valid');
            surname.classList.add('is-invalid');
            erSurname.innerHTML = "Fill in your Surname";
            noErr = false;
    }
    if(surname.value.length < 3 && fname != "") {

           event.preventDefault();
           erSurname.classList.remove('hide');
           surname.classList.remove('is-valid');
           surname.classList.add('is-invalid');
           erSurname.innerHTML = "Minimum 3 characters..";
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
      if( spellCheck() == false && !shortString1 && !shortString2){
        console.log("spellCheck()="+ spellCheck());
            event.preventDefault();
            password2.classList.remove('is-valid');
            password2.classList.add('is-invalid');
            erPass2.classList.remove('hide');
            erPass2.innerHTML = "Passwords do not match validationForm()";
            noErr = false;
      }

      if (noErr) {
            event.preventDefault();
            console.log('form validation with no errors');
            console.log('selection city = '+ selectCity);
            console.log('noErr = '+ noErr);

        //user is registering compare password input
      }

}//end function validate Form


function spellCheck(){


      var inputPassword2 = password2.value;
      var subStringPw1  = password1.value.substring(0,inputPassword2.length);




      if(inputPassword2 !="" && inputPassword2 != subStringPw1 && inputPassword2.length != subStringPw1.length ){
        event.preventDefault();
        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.add('hide');
        erPass2.innerHTML = "password do not match...if one !";

        console.log("inputInPas2substring = " +subStringPw1);
        console.log("subStringPw1 = " +subStringPw1);
        return false;

      }
      if(inputPassword2 == subStringPw1 && inputPassword2 != ""  && !shortString1 && !shortString2){
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


function validatePassword() {

  var inputPassword2 = password2.value;
  password1.addEventListener('focus',validatePassword, false);

  if (password1.value.length >= 3 ){
        event.preventDefault();
        password1.classList.remove('is-invalid');
        password1.classList.add('is-valid');
        erPass1.classList.add('hide');
        erPass1.innerHTML = "The minimum length of password is 3!";
        var shortString1 = false;
  }
  if (password2.value.length >= 3 ){
        event.preventDefault();
        password2.classList.remove('is-invalid');
        password2.classList.add('is-valid');
        erPass2.classList.add('hide');
        erPass2.innerHTML = "The minimum length of password is 3!";
        var shortString2 = false;
  }

  if (password2.value.length < 3 && password2.value != ""){
        event.preventDefault();
        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.remove('hide');
        erPass2.innerHTML = "Minimum length of password is 3!";
        noErr = false;
        var shortString2 = true;
  }
  if(inputPassword2 != password1.value){

        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.add('hide');
        erPass2.innerHTML = "password do not match !";


  }
  if (password1.value == ""){
        event.preventDefault();
        password1.classList.remove('is-valid');
        password1.classList.add('is-invalid');
        erPass1.classList.remove('hide');
        erPass1.innerHTML = "Enter password";
        noErr = false;
  }
  if (password1.value.length < 3 && password1.value != ""){
        event.preventDefault();
        password1.classList.remove('is-valid');
        password1.classList.add('is-invalid');
        erPass1.classList.remove('hide');
        erPass1.innerHTML = "The minimum length of password is 3!";
        noErr = false;
        var shortString1 = true;
  }

  if (password2.value == ""){
        event.preventDefault();
        password2.classList.remove('is-valid');
        password2.classList.add('is-invalid');
        erPass2.classList.remove('hide');
        erPass2.innerHTML = "Confirm password";
        noErr = false;

  }  // form input values
    // form input values

    if(password1.value != password2.value &&
      password1 !="" && !shortString1 &&
      password2 != "" && !shortString2){
          event.preventDefault();
          console.log(password1.value +""+ password2.value);



          password2.classList.remove('is-valid');
          password2.classList.add('is-invalid');
          erPass2.classList.remove('hide');
          // erPass2.innerHTML = "wrong password match";
          noErr = false;
  }

}
