
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

// Validation of input fields - figure out how to do this better
//function validateForm() { figure this out and then add in}



function validateForm() {
    if (document.getElementById('firstname-input').value == ""){
        alert("Please enter your first name");
        document.getElementById('firstname-input').style.borderColor = 'red';
        return false;
    }
    if (document.getElementById('surname-input').value == ""){
        alert("Please enter your surname");
        document.getElementById('surname-input').style.borderColor = 'red';
        return false;
    }
}



