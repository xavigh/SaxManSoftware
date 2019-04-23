
//validate Register form
function validateForm(){
      // form input values
      var fname    = document.querySelector('#fname');
      var surname  = document.querySelector('#surname');
      var email2   = document.querySelector('#email2');
      var selectList = document.querySelector('#selection');
      var password = document.querySelector('#pwd');
      var password = document.querySelector('#pwd2');
      // testing use
      // console.log("fname = "+fname +",surname = "+ surname + ",email2 = " + email2)
      // regExp to validate input email format
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
      let noErr = true;

      fname.classList.remove('is-invalid');
      fname.classList.add('is-valid');
      surname.classList.remove('is-invalid');
      surname.classList.add('is-valid');
      selectList.classList.remove('is-invalid');
      selectList.classList.add('is-valid');
      email2.classList.remove('is-invalid');
      email2.classList.add('is-valid');


      //validation of input fields star here
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
            erEmail.classList.remove('hide');
            email2.classList.remove('is-valid');
            email2.classList.add('is-invalid');
            erEmail.innerHTML = "wrong email format";
            noErr = false;
      }
      if (selectList.value == "select city"){
          event.preventDefault();
          erCity.classList.remove('hide');
          selectList.classList.remove('is-valid');
          selectList.classList.add('is-invalid');
          erCity.innerHTML = "Select a city";
      }
      if(noErr) {
            event.preventDefault()
            console.log('form validation with no errors');
            console.log('selection city = '+ selectList);
            console.log(noErr);
      }

}//end function validate Form
