/* 
   Function to validate all the inputs, radio buttons and check box 
   in the html file and return a valid response to help the 
   user know where they have inputed a wrong value. If the value provided 
   is wrong, the input will turn red and if the value is right, it will 
   turn green.
*/
const validate = () => {
    //Validating user Id making sure it is between 5 to 12 characters.
    const myId = document.getElementById("userId");
    let idregex = /^\w{5,12}$/;
    let IdValid = false;
    myId.addEventListener("input", e => {
        // Method not to drop the already typed characters.
        e.preventDefault();

        if (idregex.test(myId.value) == false) {
            myId.style.border = "1px solid red";
            IdValid = false;
        } else {
            myId.style.border = "1px solid green";
            IdValid = true;
        }
    });

    //Validating password to make sure it is between 7 to 12 characters.
    const pass = document.getElementById("passw");
    passregex = /^\w{7,12}$/;
    let passValid = false;
    pass.addEventListener("input", e => {
        e.preventDefault();

        if (passregex.test(pass) == false) {
            pass.style.border = "1px solid red";
            passValid = false;
        } else {
            pass.style.border = "1px solid green";
            passValid = true;
        }
    });

    //Validating name making sure it contains only alphabetes.
    const nam = document.getElementById("nme");
    const myName = /^[A-Za-z]+$/;
    let namVal = false;
    nam.addEventListener("input", e => {
        e.preventDefault();

        if (nam.value.match(myName)) {
            nam.style.border = "1px solid green";
            namVal = true;
        } else {
            nam.style.border = "1px solid red";
            namVal = false;
        }
    });

    //Validating country selection making sure one country is selected.
    const selects = document.getElementById("selector");
    // const sel = document.getElementById("selct");
    let selectValid = false;
    selects.addEventListener("input", () => {
        if (selects.value) {
            selects.style.border = "1px solid green";
            selectValid = true;
        } else {
            selects.style.border = "1px solid red";
            selectValid = false;
        }
    });

    //Validating zipcode to make sure it is only numeric.
    const myZip = document.getElementById("zip");
    const zipcod = /^[0-9]+$/;
    let zipVal = false;
    myZip.addEventListener("input", e => {
        e.preventDefault();

        if (myZip.value.match(zipcod)) {
            myZip.style.border = "1px solid green";
            zipVal = true;
        } else {
            myZip.style.border = "1px solid red";
            zipVal = false;
        }
    });

    // Validating email to make sure it follows the right email pattern.
    const myMail = document.getElementById("mail");
    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailValid = false;
    myMail.addEventListener("input", e => {
        e.preventDefault();

        if (emailregex.test(myMail.value) == false) {
            myMail.style.border = "1px solid red";
            emailValid = false;
        } else {
            myMail.style.border = "1px solid green";
            emailValid = true;
        }
    });

    /* 
        Getting checkbox input fields from the documents by their ids and
        assigning them to variables eng and nonEng.
    */
    const eng = document.getElementById("eng");
    const nonEng = document.getElementById("non-eng");

    //An event listener triggered when the english checkbox is checked
    eng.addEventListener("change", () => {
        //This checks if the english checkbox is checked and if so then the
        //non english checkbox will be disabled.
        if (eng.checked == true) {
            nonEng.checked = false;
        }
    });

    //An event listener triggered when the non-english checkbox is checked
    nonEng.addEventListener("change", () => {
        // This checks if the nonenglish checkbox is checked and if so then the
        //english checkbox will be disabled.
        if (nonEng.checked == true) {
            eng.checked = false;
        }
    });

    /* 
        Method to add an event listener to the submit button of the form to return a valid 
        response in case an input is not filled correctly.
    */
    
    document.getElementById("the-form").addEventListener("submit", e => {
        e.preventDefault();

        if (IdValid == false) {
            document.getElementsByClassName("message")[0].innerHTML =
                "Required and must be of length 5 to 12.";
            document.getElementsByClassName("message")[0].style =
                "color: red; font-family:Arial, Helvetica, sans-serif;";
        } else {
            document.getElementsByClassName("message")[0].innerHTML = "";
        }

        if (passValid == false) {
            document.getElementsByClassName("message")[1].innerHTML =
                "Required and must be of length 7 to 12.";
            document.getElementsByClassName("message")[1].style =
                "color: red; font-family:Arial, Helvetica, sans-serif;";
        } else {
            document.getElementsByClassName("message")[1].innerHTML = "";
        }

        if (namVal == false) {
            document.getElementsByClassName("message")[2].innerHTML =
                "Required and alphabetes only.";
            document.getElementsByClassName("message")[2].style =
                "color: red; font-family:Arial, Helvetica, sans-serif;";
        } else {
            document.getElementsByClassName("message")[2].innerHTML = "";
        }

        if (selectValid == false) {
            document.getElementsByClassName("message")[3].innerHTML =
                "Required.Must select a country.";
            document.getElementsByClassName("message")[3].style =
                "color: red; font-family:Arial, Helvetica, sans-serif;";
        } else {
            document.getElementsByClassName("message")[3].innerHTML = "";
        }

        if (zipVal == false) {
            document.getElementsByClassName("message")[4].innerHTML =
                "Required.Must be numeric only.";
            document.getElementsByClassName("message")[4].style =
                "color: red; font-family:Arial, Helvetica, sans-serif;";
        } else {
            document.getElementsByClassName("message")[4].innerHTML = "";
        }

        if (emailValid == false) {
            document.getElementsByClassName("message")[5].innerHTML =
                "Required.Must be a valid email.";
            document.getElementsByClassName("message")[5].style =
                "color: red; font-family:Arial, Helvetica, sans-serif;";
        } else {
            document.getElementsByClassName("message")[5].innerHTML = "";
        }

        /* 
            Getting radio button input fields from the document by their ids and 
            assigning them to variables male and female.
        */
        const male = document.getElementById("mal");
        const female = document.getElementById("femal");
        //Checking if a radio button is selected or none
        if (male.checked == false && female.checked == false) {
            document.getElementsByClassName("message")[6].innerHTML = "Required.";
            document.getElementsByClassName("message")[6].style =
                "color: red; font-family:Arial, Helvetica, sans-serif; padding-left: 79px;";
        } else {
            document.getElementsByClassName("message")[6].innerHTML = "";
        }

        /* 
            This loops through the group checkboxes to check if both of them are not checked and
            if both are not checked then a message is return to select one of them 
        */
        if (nonEng.checked == false && eng.checked == false) {
            document.getElementsByClassName("message")[7].innerHTML = "Required.";
            document.getElementsByClassName("message")[7].style =
                "color: red; font-family:Arial, Helvetica, sans-serif; padding-left: 30px;";
        } else {
            document.getElementsByClassName("message")[7].innerHTML = "";
        }
    });
};

//Calling the validate function.
validate();
