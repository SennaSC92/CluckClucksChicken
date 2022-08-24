if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}

else {
    ready()
}

//MODAL SECTION
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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

// Cart Section

function ready(){
    //Remove item button
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    console.log(removeCartItemButtons);
    //for loop will loop through buttons within cart 
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        //target is essentially whatever button we click on
    }
    // Update item price when quantity is increased
    var quantityInputs = document.getElementsByClassName("cart-quantity-input")
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName("cart-btn")
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

}

function removeCartItem(event){
    var buttonClicked = event.target;
    //need to specify entire row to be removed so need to remove all parent elements on html doc, in this case there is a row (parent1) and a column(parent2)
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1;
    }
    updateCartTotal();
}

//function for add to cart button
function addToCartClicked(event){
    var button = event.target
    //3x parent elements = container; row; col
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    console.log(title, price)
    addItemToCart(title, price)
    updateCartTotal()
}

function addItemToCart(title, price){
    var cartRow = document.createElement('div')
    cartRow.classList.add('row', 'cart-sect')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for(var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText === title) {
            alert('THIS ITEM IS ALREADY ADDED IN THE CART')
            return 
        }  
    }
    var cartRowContents = `
<div class="col-5 cart-item">
<h5 class="cart-item-title"><b>${title}</b></h5>
</div>
<div class="col-2">
<h5 class="cart-price"><b>${price}</b></h5>
</div>
<div class="col-5 cart-quantity">
<input class="cart-quantity-input" type="number" value="1">
<button class="btn btn-danger" type="button">REMOVE</button>
</div>`

    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

//Update Cart total

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName(" cart-sect")
    var total = 0;
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        var price = parseFloat(priceElement.innerText.replace("£", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

    }
    total = total.toFixed(2)
    document.getElementsByClassName("cart-total-price")[0].innerText = "£" + total;
}
