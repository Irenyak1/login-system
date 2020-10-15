const Validate = () => {
  // var myId = document.registration.userId;
  // var pass = document.registration.password;
  // var nam = document.registration.nam;
  // var uadd = document.registration.address;
  //var ucountry = document.registration.myselect;
  // var myZip = document.registration.zipCode;
  // var myMail = document.registration.email;
  // var male = document.registration.msex;
  // var female = document.registration.fsex;
  // var eng = document.registration.eng;
  // var nonEng = document.registration.noneng;

  var myId = document.getElementById("userId");
  var pass = document.getElementById("passw");
  var nam = document.getElementById("nme");
  var uadd = document.getElementById("addre");
  var selector = document.getElementById("selector");
  var myZip = document.getElementById("zip");
  var myMail = document.getElementById("mail");
  var male = document.getElementById("mal");
  var female = document.getElementById("femal");
  var eng = document.getElementById("eng");
  var nonEng = document.getElementById("non-eng");

  const idregex = /^\w{5,12}$/;
  if (idregex.test(myId.value) == false) {
    myId.style.border = "1px solid red";
    document.getElementsByClassName("message")[0].innerHTML =
      "Required and must be of length 5 to 12.";
    document.getElementsByClassName("message")[0].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    myId.focus();
    return false;
  }

  const passregex = /^\w{7,12}$/;
  if (passregex.test(pass.value) == false) {
    pass.style.border = "1px solid red";
    document.getElementsByClassName("message")[1].innerHTML =
      "Required and must be of length 7 to 12.";
    document.getElementsByClassName("message")[1].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    pass.focus();
    return false;
  }
  // const myName = /^[a-zA-Z].*[\s\.]*$/; // strings with space separator
  const myName = /^[A-Za-z]+$/; // strings without space separator
  if (!nam.value.match(myName)) {
    nam.style.border = "1px solid red";
    document.getElementsByClassName("message")[2].innerHTML =
      "Required and alphabetes only.";
    document.getElementsByClassName("message")[2].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    nam.focus();
    return false;
  }

  const address = /^[0-9a-zA-Z]+$/;
  if (!uadd.value.match(address)) {
    uadd.style.border = "1px solid red";
    document.getElementsByClassName("message")[3].innerHTML =
      "Required and alphanumeric characters only.";
    document.getElementsByClassName("message")[3].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    uadd.focus();
    return false;
  }

  //using name of the selection
  // var ucountry = document.registration.myselect;
  // if (ucountry.value == "Default") {
  //   ucountry.style.border = "1px dotted red";
  //   document.getElementsByClassName("message")[4].innerHTML =
  //     "Required.Must select a country.";
  //   document.getElementsByClassName("message")[4].style =
  //     "color: red; font-family:Arial, Helvetica, sans-serif;";
  //   return false;
  //   // alert('Select your country from the list');
  //   ucountry.focus();
  //   return false;
  // }

  //using id of the selection
  if (selector.value == "Default") {
    selector.style.border = "1px solid red";
    document.getElementsByClassName("message")[4].innerHTML =
      "Required.Must select a country.";
    document.getElementsByClassName("message")[4].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    selector.focus();
    return false;
  }

  // const NIN(XYZ678979ERTY) = /^[A-Z]{3}[0-9]{6}[A-Z]{4}$/;
  const zipcod = /^[0-9]+$/;
  if (!myZip.value.match(zipcod)) {
    myZip.style.border = "1px solid red";
    document.getElementsByClassName("message")[5].innerHTML =
      "Required.Must be numeric only.";
    document.getElementsByClassName("message")[5].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    myZip.focus();
    return false;
  }

  const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailregex.test(myMail.value) == false) {
    myMail.style.border = "1px solid red";
    document.getElementsByClassName("message")[6].innerHTML =
      "Required.Must be a valid email.";
    document.getElementsByClassName("message")[6].style =
      "color: red; font-family:Arial, Helvetica, sans-serif;";
    myMail.focus();
    return false;
  }

  if (male.checked == false && female.checked == false) {
    document.getElementsByClassName("message")[7].innerHTML =
      "Required. Select one";
    document.getElementsByClassName("message")[7].style =
      "color: red; font-family:Arial, Helvetica, sans-serif; padding-left: 79px;";
    return false;
  }

  if (nonEng.checked == false && eng.checked == false) {
    document.getElementsByClassName("message")[8].innerHTML =
      "Required. Select one";
    document.getElementsByClassName("message")[8].style =
      "color: red; font-family:Arial, Helvetica, sans-serif; padding-left: 30px;";
    return false;
  } else {
    alert("Form Succesfully Submitted");
    // window.location.reload();
    return true;
  }
};
