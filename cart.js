document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products-container1');
    const totalPriceSpan = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart'));

    // Display cart items
    function displayCart() {
        productsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
           
            productCard.innerHTML = `
                <img src="${product.image}">
                <br/>
                <h6>${product.vendor}</h6>
                <br/>
                <h6>${product.badge_text || ''}</h6>
                <br/>
                <h6>Price Rs. ${product.price} | <span>${product.compare_at_price}</span></h6>
                <br/>
                <h5>${product.title}</h5>
                <h6>Quantity: ${product.quantity}</h6>
                <h6>Total: Rs. ${product.price * product.quantity}</h6>
            `;
            productsContainer.appendChild(productCard);
            total += parseFloat(product.price) * product.quantity;
        });
        totalPriceSpan.textContent = total.toFixed(2);
    }

    // Display cart initially
    displayCart();
});
