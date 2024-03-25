document.addEventListener('DOMContentLoaded', function() {
    
    const products = [
        { id: 1, name: "T-Shirt", price: 25, image: "top.avif" },
        { id: 2, name: "Jeans", price: 30, image: "jeans.webp" },
        { id: 3, name: "Dress", price: 40, image: "dress1.jpeg" },
        { id: 4, name: "Sweater", price: 50, image: "sweater.jpg" },
        { id: 5, name: "Skirt", price: 25, image: "skirt.jpeg" },
        { id: 6, name: "Jacket", price: 60, image: "jacket.jpg" },
        { id: 7, name: "Shorts", price: 20, image: "shorts.jpeg" },
        { id: 8, name: "Blouse", price: 35, image: "blouse.jpeg" },
        { id: 9, name: "Coat", price: 70, image: "coat.jpg" },
        { id: 10, name: "Sweatshirt", price: 45, image: "sweatshirt.jpeg" },
        { id: 11, name: "Cozypants", price: 30, image: "cozy pants.jpeg" },
        { id: 12, name: "Hoodie", price: 46, image: "hoodie.webp" },
        { id: 13, name: "Sneakers", price: 100, image: "sneakers.webp" },
        { id: 14, name: "Beanie", price: 20, image: "beanie.jpeg" },
        { id: 15, name: "Leathercoat", price: 75, image: "leathercoat.avif" },
        { id: 16, name: "Shirt", price: 45, image: "shirt1.jpeg" },  
        { id: 17, name: "Suit Salwar", price: 95, image: "suitsalwar.jpeg" },
        { id: 18, name: "Kurta", price: 85, image: "kurta.webp" },
        { id: 19, name: "Saree", price: 185, image: "saree.webp" },
        { id: 20, name: "Lehenga", price: 200, image: "lehenga.webp" },
        { id: 21, name: "ShortKurti", price: 75, image: "shortkurti.jpeg"},
        { id: 22, name: "ShararaSuit", price: 175, image: "shararasuit.jpeg"}
    ];

    const productsSection = document.getElementById('products');
    const cartItemsList = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');

    function displayProducts() {
        productsSection.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.image}" alt="${product.name}">
                <p>Price: $${product.price}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            `;
            productsSection.appendChild(productElement);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.dataset.id = product.id;
            cartItem.dataset.price = product.price;
            cartItem.innerHTML = `
                ${product.name} - $${product.price}
                <button class="remove-from-cart-btn">Remove</button>
            `;
            cartItemsList.appendChild(cartItem);
        }
    }

    function removeFromCart(productId) {
        const cartItem = document.querySelector(`.cart-item[data-id="${productId}"]`);
        if (cartItem) {
            cartItem.remove();
        }
    }

    function calculateTotalPrice() {
        let totalPrice = 0;
        document.querySelectorAll('.cart-item').forEach(cartItem => {
            const price = parseFloat(cartItem.dataset.price);
            totalPrice += price;
        });
        return totalPrice.toFixed(2);
    }

    function checkout() {
        const totalPrice = calculateTotalPrice();
        alert(`Total Price: $${totalPrice}`);
    }

    productsSection.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    cartItemsList.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-from-cart-btn')) {
            const productId = parseInt(event.target.closest('.cart-item').getAttribute('data-id'));
            removeFromCart(productId);
        }
    });

    checkoutBtn.addEventListener('click', checkout);

    displayProducts();
});
