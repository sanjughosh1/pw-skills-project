// Get the cart list and quantities
const cartList = document.getElementById("cart-list");
const quantities = document.getElementsByClassName("quantity");

// Define a function to double the quantities
function doubleQuantities() {
	// Loop through each quantity and double it
	for (let i = 0; i < quantities.length; i++) {
		const quantity = parseInt(quantities[i].innerText);
		quantities[i].innerText = quantity * 2;
	}
}

// Add an event listener to the button to call the doubleQuantities function
const doubleBtn = document.getElementById("double-btn");
doubleBtn.addEventListener("click", doubleQuantities);
