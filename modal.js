//MODAL SECTION
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementById("close-btn");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


//If delivery button is clicked the fields for address input become visible

function deliveryAddressFunction() {
    if (document.getElementById('delivery').checked) {
        document.getElementById('delivery-address').style.display = 'grid';
        
    }
    else{
        document.getElementById('delivery-address').style.display = 'none';
        
    }
}

//Validate form

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let fname = id("firstname-input"), sname = id("surname-input"), houseFlat = id("houseFlat-input"), street = id("street-input"),
    town = id("town-input"), postcode = id("postcode-input"), tel = id("tel-input"), email = id("email-input"),
    nameOnCard = id("nameoncard-input" ), cardNo = id("cardnumber-input"), expDate = id("expdate-input"), cvv = id("CVV-input"),
    billingPost = id("billing-post-input"), form = id("payment-form"),
    
    errorMsg = classes("error"), successIcon = classes("success-icon"), failureIcon = classes("failure-icon");

// continue event listener for all input fields.
form.addEventListener("submit", (e) => {
    e.preventDefault();

    deliveryAddressFunction();
    validation(fname, 0, "First name cannot be blank");
    validation(sname, 1, "Surname cannot be blank");
    validation(houseFlat, 2, "Please enter House/Flat number");
    validation(street, 3, "Please enter street name");
    validation(town, 4, "Please enter town");
    validation(postcode, 5, "Please enter postcode");
    validation(tel, 6, "Please enter contact number");
    validation(email, 7, "Please enter your email address");
    validation(nameOnCard, 8, "Please your name as it appears on your card");
    validation(cardNo, 9, "Please enter 14 digit card number");
    validation(expDate, 10, "Please enter expiery date");
    validation(cvv, 11, "Please enter 3 digit CVV number");
    validation(billingPost, 12, "Please enter the postcode registered to your card");


    
});

let validation = (id, serial, message) => {
    if (id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        //icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";

    }

    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        //icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}







