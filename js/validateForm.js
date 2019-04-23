
//validate Register form
function validateForm(){
      // form input values
      var fname    = document.querySelector('#fname').value;
      var surname  = document.querySelector('#surname').value;
      var email2   = document.querySelector('#email2').value;
      var selectList = document.querySelector('#selection').value;
      var password = document.querySelector('#pwd').value;
      var password = document.querySelector('#pwd2').value;
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

      //validation of input fields star here
      if (fname == "" || fname.length < 3) {
            event.preventDefault();
            event.stopPropagation();
            erFname.classList.remove('hide');
            erFname.innerHTML = "Fill in your first name";
            noErr = false;
     }
     if(surname == "" || surname.length < 3) {

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
      if (selectList == "select city"){
        event.preventDefault();
        erCity.classList.remove('hide');
        erCity.innerHTML = " Select a city";
      }
      if(noErr) {
            // event.preventDefault()
            console.log('form validation with no errors');
            console.log('selection city = '+ selectList);
            console.log(noErr);
      }

}//end function validate Form
