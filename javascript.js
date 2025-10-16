var coffeePrices = {
    // Served Hot
    "Espresso": 95,
    "Double Espresso": 105,
    "Red Eye": 100,
    "Black Eye": 115,
    "Americano": 100,
    "Long Black": 115,
    "Macchiato": 115,
    "Long Macchiato": 125,
    "Cortado": 115,
    "Breve": 125,
    "Cappuccino": 125,
    "Flat White": 125,
    "Cafe Latte": 115,
    "Mocha": 120,
    "Cremma": 105,
    "Affogato": 105,
    "Cafe au lait": 125,

    // Served Cold
    "Iced Espresso": 95,
    "Iced Coffee": 105,
    "Iced Flat White": 105
};



function openOrderDialog(coffeeName) {
    var modal = document.getElementById("orderDialog");
    var coffeeNameElement = document.getElementById("coffeeName");
    coffeeNameElement.textContent = "Order " + coffeeName;
    modal.style.display = "block";
}


function closeOrderDialog() {
    var modal = document.getElementById("orderDialog");
    modal.style.display = "none";
}

function placeOrder() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var name = document.getElementById("name").value.trim();
    var location = document.getElementById("location").value.trim();
    var coffeeName = document.getElementById("coffeeName").textContent;
    
    if (isNaN(quantity) || quantity <= 0 || name === '' || location === '') {
        alert("Please enter valid values for quantity, name, and location.");
        return;
    }

    
    function calculateTotal(coffeeName, quantity) {
        // strip any accidental "Order " prefix
        coffeeName = coffeeName.replace(/^Order\s*/, '');
        var pricePerCoffee = coffeePrices[coffeeName];

        if (!pricePerCoffee) {
            console.warn("No price found for:", coffeeName);
            return 0;
        }

        return quantity * pricePerCoffee;
    }

    
    var totalValue = calculateTotal(coffeeName, quantity);
    var message = "Thank you, " + name + "! You have ordered " + quantity + " of " + coffeeName + ". Your order will be delivered to " + location + ". Total cost: $" + totalValue.toFixed(2);
    
    alert(message);
    closeOrderDialog();

    
}
