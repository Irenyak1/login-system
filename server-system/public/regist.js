/* 
  This adds an event listener to the form that is triggered when the submit 
  button is clicked. The if condition checks if the specified variable is false 
  and then styles the input and also returns a corresponding message to the element. 
  Else if the condition is not false then no message is returned
*/
// const form = document.getElementById("the-form");

// form.addEventListener("submit", e => {
//   e.preventDefault();

//   validate();
// });
/* 
   The arrow function validate to validate all the inputs, radio buttons and check box 
   in the html file and return a valid response to help the 
   user know where they have inputed a wrong value. If the value provided 
   is wrong, the input will turn red and if the value is right, it will 
   turn green.
 */
const validate = () => {
  // Getting user id input field from the document by its id and
  // assigning it to variable myId.
  const myId = document.getElementById("userId");

  // var valid = true;

  // The regular expression rule to check if the user id is between 5 to 12 characters
  let idregex = /^\w{5,12}$/;

  //Defining a variable IdValid and assigning it false
  // let IdValid = false;

  // Adding an event listener that is triggered when an input
  // is typed.
  // myId.addEventListener("input", e => {
  //   //The preventDefault() method cancels the event if it is cancelable so that
  //   // the default action that belongs to the event will not occur.
  //   e.preventDefault();

  //The condition to check if the input value does not violate the id regular expression
  if (idregex.test(myId.value) == false) {
    //Setting the style for the variable myId
    // myId.style.border = "1px solid yellow";
    //In case the id value doesn't match the regular expression, variable
    //IdValid is returned as false
    // IdValid = false;
    myId.style.border = "1px solid red";
    document.getElementsByClassName("message")[0].innerHTML =
      "Required and must be of length 5 to 12.";
    document.getElementsByClassName("message")[0].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    // valid = false;
    
  } else {
    document.getElementsByClassName("message")[0].innerHTML = "";
    myId.style.border = "1px solid green";
    // valid = true;
    // IdValid = true;
  }
  // });

  // Getting pass input field from the document by its id and
  // assigning it to variable pass.
  const pass = document.getElementById("passw");
  // The regular expression rule to check if the password is between 7 and 12 characters
  let passregex = /^\w{7,12}$/;
  // let passValid = false;
  // pass.addEventListener("input", e => {
  //   e.preventDefault();

  //  if (pass.value.match(passregex)) {
  if (passregex.test(pass.value) == false) {
    // pass.style.border = "1px solid yellow";
    // passValid = false;
    pass.style.border = "1px solid red";
    document.getElementsByClassName("message")[1].innerHTML =
      "Required and must be of length 7 to 12.";
    document.getElementsByClassName("message")[1].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    // valid = false;
    // return false;
  } else {
    pass.style.border = "1px solid green";
    // passValid = true;
    document.getElementsByClassName("message")[1].innerHTML = "";
    // valid = true;
  }
  //   pass.style.border = "1px solid yellow";
  // passValid = false;
  // }
  // });

  // Getting the name input field from the document by its id and
  // assigning it to variable nam.
  const nam = document.getElementById("nme");
  // regular expression rule to check if the name contains only alphabetes
  const myName = /^[A-Za-z]+$/;
  // let namVal = false;
  // nam.addEventListener("input", e => {
  //   e.preventDefault();

  if (nam.value.match(myName)) {
    nam.style.border = "1px solid green";
    // namVal = true;
    document.getElementsByClassName("message")[2].innerHTML = "";
    // valid = true;
  } else {
    // nam.style.border = "1px solid yellow";
    // namVal = false;
    nam.style.border = "1px solid red";
    document.getElementsByClassName("message")[2].innerHTML =
      "Required and alphabetes only.";
    document.getElementsByClassName("message")[2].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    // valid = false;
    // return false;
  }
  // });
  // Getting country input field from the document by its id and
  // assigning it to variable selects.
  const selects = document.getElementById("selector");
  // let selectValid = false;
  // selects.addEventListener("input", () => {
  //Condition to check if a country is selected
  if (selects.value) {
    selects.style.border = "1px solid green";
    // selectValid = true;
    document.getElementsByClassName("message")[3].innerHTML = "";
    // valid = true;
  } else {
    // selects.style.border = "1px solid yellow";
    // selectValid = false;
    selects.style.border = "1px solid red";
    document.getElementsByClassName("message")[3].innerHTML =
      "Required.Must select a country.";
    document.getElementsByClassName("message")[3].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    // valid = false;
    // return false;
  }
  // });

  // Getting zipcode input field from the document by its id and
  // assigning it to variable myZip.
  const myZip = document.getElementById("zip");
  // The regular expression rule to check if the zipcode contains only numeric
  const zipcod = /^[0-9]+$/;
  // let zipVal = false;
  // myZip.addEventListener("input", e => {
  //   e.preventDefault();

  if (myZip.value.match(zipcod)) {
    myZip.style.border = "1px solid green";
    // zipVal = true;
    document.getElementsByClassName("message")[4].innerHTML = "";
    // valid = true;
  } else {
    // myZip.style.border = "1px solid yellow";
    // zipVal = false;
    myZip.style.border = "1px solid red";
    document.getElementsByClassName("message")[4].innerHTML =
      "Required.Must be numeric only.";
    document.getElementsByClassName("message")[4].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    // valid = false;
    // return false;
  }
  // });

  // Getting email input field from the document by its id and
  // assigning it to variable myMail.
  const myMail = document.getElementById("mail");
  // The regular expression rule to check if the email has a valid format
  const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // var emailValid = false;
  // myMail.addEventListener("input", e => {
  //   e.preventDefault();

  if (emailregex.test(myMail.value) == false) {
    // myMail.style.border = "1px solid yellow";
    // emailValid = false;
    myMail.style.border = "1px solid red";
    document.getElementsByClassName("message")[5].innerHTML =
      "Required.Must be a valid email.";
    document.getElementsByClassName("message")[5].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    // valid = false;
    // return false;
  } else {
    myMail.style.border = "1px solid green";
    // emailValid = true;
    document.getElementsByClassName("message")[5].innerHTML = "";
    // valid = true;
  }
  // });

  // Getting checkbox input fields from the documents by their ids and
  // assigning them to variables eng and nonEng.
  const eng = document.getElementById("eng");
  const nonEng = document.getElementById("non-eng");

  // //An event listener triggered when the english checkbox is checked
  if (nonEng.checked == false && eng.checked == false) {
    document.getElementsByClassName("message")[7].innerHTML = "Required.";
    document.getElementsByClassName("message")[7].style =
      "color: red; font-family:Arial, Helvetica, sans-serif; padding-left: 30px;";
    // valid = false;
    // return false;
  } else {
    document.getElementsByClassName("message")[7].innerHTML = "";
    // valid = true;
  }

  // Getting radio button input fields from the document by their ids and
  // assigning them to variables male and female.

  const male = document.getElementById("mal");
  const female = document.getElementById("femal");
  //Checking if a radio button is selected or none
  if (male.checked == false && female.checked == false) {
    document.getElementsByClassName("message")[6].innerHTML = "Required.";
    document.getElementsByClassName("message")[6].style =
      "color: red; font-family:Arial, Helvetica, sans-serif; padding-left: 79px;";
    // valid = false;
    // return false;
  } else {
    document.getElementsByClassName("message")[6].innerHTML = "";
    // valid = true;
  }

  // return valid;
};
//Invoking the validate function.
validate();
// });
