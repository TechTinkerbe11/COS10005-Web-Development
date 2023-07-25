// Function to validate form inputs
function validate() {
    // Get form input values
    var uname = document.getElementById("uname").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    var email = document.getElementById("email").value;
    var postcode = document.getElementById("postcode").value;
    var genm = document.getElementById("genm").checked;
    var genf = document.getElementById("genf").checked;
    var flavour1 = document.getElementById("flavour1").checked;
    var flavour2 = document.getElementById("flavour2").checked;
    var flavour3 = document.getElementById("flavour3").checked;
    var errMsg = "";
    var result = true;

    // Check for username input
    if (uname == "") {
        errMsg += "Username cannot be empty.\n";
    }

    // Check for password length
    if (pwd1.length < 8) {
        errMsg += "Password has to be at least 8 characters long.\n";
    }

    // Check for retype password input
    if (pwd2 == "") {
        errMsg += "Retype Password cannot be empty.\n";
    }

    // Check if passwords match
    if (pwd1 != pwd2) {
        errMsg += "Passwords do not match.\n";
    }

    // Check for email input
    if (email == "") {
        errMsg += "Email cannot be empty.\n";
    }

    // Check for postcode length
    if (!postcode.match(/^(?=.*\d).{4}$/)) {
        errMsg += "Postcode has to be 4-digit.\n";
    }

    // Check for gender selection
    if (!genm && !genf) {
        errMsg += "A gender must be selected.\n";
    }

    // Check for flavour selection
    if (!flavour1 && !flavour2 && !flavour3) {
        errMsg += "Choose at least one type of flavour.\n";
    }

    // If there is an error, show alert with all error messages and return false
    if (errMsg != "") {
        alert(errMsg);
        result = false;
    }
    
    // Return validation result
    return result;
}

// Initialize form validation on submission
function init() {
    var regForm = document.getElementById("regform");
    regForm.onsubmit = validate;
}
window.onload = init;
