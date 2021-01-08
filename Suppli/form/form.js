function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var name = document.contactForm.name.value;
    var surname = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    
    
    var nameErr =surnameErr= emailErr = mobileErr =  true;
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex =  /^.*(?=.{8,30})(?=.*[a-z])(?=.*[A-Z])(?=.*[-_]).*$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(surname == "") {
        printError("surnameErr", "Please enter your surname");
    } else {
        var regex =  /^.*(?=.{8,30})(?=.*[a-z])(?=.*[A-Z])(?=.*[-_]).*$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid surname");
        } else {
            printError("surnameErr", "");
            surnameErr = false;
        }
    }
    
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[0-9]\d{9,11}$/; // as inthe spec, a mobile number can be between 9 and 11 numbers eg.826465764 or 27826465764
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
  
    
    if((nameErr ||surname || emailErr || mobileErr ) == true) {
       return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Surname: " + surname + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
       
        alert(dataPreview);
    }
};
