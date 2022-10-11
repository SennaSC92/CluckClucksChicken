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

let fname = id("name-input"), address = id("address-input"),
    town = id("town-input"), postcode = id("postcode-input"), tel = id("tel-input"), email = id("email-input"),
    nameOnCard = id("nameoncard-input" ), cardNo = id("cardnumber-input"), expDate = id("expdate-input"), cvv = id("CVV-input"),
    form = id("payment-form"),
    
    errorMsg = classes("error"), successIcon = classes("success-icon"), failureIcon = classes("failure-icon");

// continue event listener for all input fields.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation(fname, 0, "Name cannot be blank");
 
    validation(address, 1, "Please enter Address");
    validation(town, 2, "Please enter town");
    validation(postcode, 3, "Please enter postcode");
    validation(tel, 4, "Please enter contact number");
    validation(email, 5, "Please enter your email address");
    validation(nameOnCard, 6, "Please your name as it appears on your card");
    validation(cardNo, 7, "Please enter 14 digit card number");
    validation(expDate, 8, "Please enter expiery date");
    validation(cvv, 9, "Please enter 3 digit CVV number");
        
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







