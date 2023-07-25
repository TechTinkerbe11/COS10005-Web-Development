// Function to validate form inputs
function validate() {
    // Get form input values
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var creditnumber = document.getElementById("creditnumber").value;
    var delivery = document.getElementById("delivery").checked;
    var pickup = document.getElementById("pickup").checked;
    var paypickup = document.getElementById("paypickup").checked;
    var payonline = document.getElementById("payonline").checked;
    var errMsg = "";
    var result = true;

    // Check for order type selection
    if (!delivery && !pickup) {
        errMsg += "An order type must be selected.\n";
    }
    
    // Check for contact number input
    if (contact == "") {
        errMsg += "Contact number cannot be empty.\n";
    }

    // Check for email input
    if (email == "") {
        errMsg += "Email cannot be empty.\n";
    }

    // Check for payment method selection
    if (!paypickup && !payonline) {
        errMsg += "A payment method must be selected.\n";
    }

    // Check for card number length if respective card type is selected
    if ((document.getElementById("visacard").checked) && (creditnumber.length != 16)) {
        errMsg += "Visa card number has to be 16-digit.\n";
    }
    if ((document.getElementById("mastercard").checked) && (creditnumber.length != 16)) {
        errMsg += "Mastercard number has to be 16-digit.\n";
    }
    if ((document.getElementById("americancard").checked) && (creditnumber.length != 15)) {
        errMsg += "American Express card number has to be 15-digit.\n";
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

// Function to copy delivery address to billing address if checkbox is checked
function addressFunction() {
    if (document.getElementById("same").checked) {
        document.getElementById("billaddress").value = document.getElementById("deliadd").value;
    }
    else {
        document.getElementById("billaddress").value = "";
    }
}

// Register addressFunction for onchange event
window.onchange = addressFunction;

// Function to show or hide additional form fields based on delivery option
function yesnoCheck() {
    if (document.getElementById('delivery').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else {
        document.getElementById('ifYes').style.visibility = 'hidden';
    }
}

// Function to show or hide additional form fields based on payonline option
function yesCheck() {
    if (document.getElementById('payonline').checked) {
        document.getElementById('ifyeah').style.visibility = 'visible';
    }
    else {
        document.getElementById('ifyeah').style.visibility = 'hidden';
    }
}

// Function to copy delivery address to billing address when checkbox is checked
function copy(event) {
    var deliveryaddress = document.getElementById("deliveryaddress");
    var billaddress = document.getElementById("billaddress");
    var checked = document.getElementById("same").checked;
    if (checked) {
        if (deliveryaddress.value) {
            billaddress.value = deliveryaddress.value;
        }
        else {
            alert('Please enter your delivery address first.');
            event.preventDefault();
        }
    }
}

// Register all the event functions for onchange event
window.onchange = function() {
    yesnoCheck();
    yesCheck();
    copy();
}
