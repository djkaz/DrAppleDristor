// import { getAllProducts } from "./api/products.js";
// import { mapProductToCard } from "./utils/layout.js";

// const productsContainer = document.querySelector(".products");

// document.addEventListener("DOMContentLoaded", displayProducts);

// async function displayProducts() {
//   const products = await getAllProducts();

//   productsContainer.innerHTML = products.map(mapProductToCard).join("");
// }

// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('add-to-cart')) {
//       //Add product to cart logic here
//       // var productCard = "";
//       // productCard.forEach(function(item) {
//       //   productCard += '<div class="card">'+
//       //         '<img src="img/' + item.photo + '">'+
//       //         '<div class="name">' + item.productCard + '</div>'+
//       //         '<div class="price">$<span>' + item.price + '</span></div>'+
//       //         '<div class="cart-action">'+
//       //           '<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
//       //           '<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
//       //         '</div>'+
//       //       '</div>';
//       //       "<tr>";
        
//       // });
//       // $('#product-item-container').html(productHTML)
//       alert('The product has been added into the basket!');
//   }
// });


// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('add-to-cart')) {
//     // Get product details (replace with logic to fetch from your data source)
//     const productName = event.target.closest('.card').querySelector('.name h4').textContent; // Extract from DOM
//     const productPrice = parseFloat(event.target.closest('.card').querySelector('.price').textContent.replace(' lei', '')); // Extract and convert price

//     // Create a cart item object
//     const cartItem = {
//       name: productName,
//       price: productPrice,
//       quantity: 1 // Add a quantity property
//     };

//     // Add the item to your cart storage (adapt to your preferred storage method)
//     addToCart(cartItem);

//     // Display a confirmation message
//     alert('Produsul a fost adaugat in cos!');

//     // Optionally, update a cart badge or display a cart summary
//     updateCartDisplay();

//     // Generate HTML for a new page with the cart table (optional)
//     generateCartPage(cartItem);
//   }
// });

// // Function to add item to cart storage (replace with your preferred storage solution)
// function addToCart(item) {
//   // Logic to add item to local storage, database, or other chosen storage method
//   console.log('Adding item to cart:', item); // Placeholder for now
// }

// // Function to update cart badge or display (optional)
// function updateCartDisplay() {
//   // Update cart badge UI or cart summary based on your implementation
//   console.log('Updating cart display'); // Placeholder for now
// }

// // Function to generate HTML for a new page with the cart table (optional)
// function generateCartPage(item) {
//   const cartHtml = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <title>Your Shopping Cart</title>
//     </head>
//     <body>
//       <h1>Your Shopping Cart</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Price</th>
//             <th>Quantity</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>${item.name}</td>
//             <td>${item.price.toFixed(2)} lei</td> <td>${item.quantity}</td>
//           </tr>
//         </tbody>
//       </table>
//       </body>
//     </html>
//   `;

//   // Open the new page and display the generated HTML
//   const newWindow = window.open('', 'shoppingCart');
//   newWindow.document.write(cartHtml);
//   newWindow.document.close();
// }

// good working code
// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('add-to-cart')) {
//     // Get product details
//     const productName = event.target.parentElement.querySelector('.name').textContent.trim();
//     const productPrice = event.target.parentElement.querySelector('.price').textContent.trim();
//     // Create a cart item object (optional)
//     const cartItem = {
//       name: productName,
//       price: productPrice,
//     };

//     // Add to cart logic (choose one approach):
//     // Option 1: Using Local Storage (simple but limited storage)
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     cartItems.push(cartItem);
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));   


//     // Option 2: Send data to cart.html using URL parameters (limited data)
//     const url = new URL('./pages/cart.html', window.location.origin);
//     url.searchParams.append('product', productName);
//     url.searchParams.append('price', productPrice); // Add price if needed
//     window.location.href = url.toString();
//     alert('Produsul a fost adaugat in cos!');
//   }
// });

// async function name(params) {
//   const productsHTML = products.map(
//     (product) => `<div class="product-card">
//           <h2 class="product-name">${product.name}</h2>
//           <strong>$${product.price}</strong>
//           <button class="product-btn" id=${product.id}>Add to Cart</button>
//       </div>`
//   );
// }

//New Code

import { getAllProducts } from "./api/products.js";
import { mapProductToCard } from "./utils/layout.js";

// document.addEventListener("DOMContentLoaded", displayProducts);
//         async function displayProducts() {
//         const products = await getAllProducts();
//         // console.log(products);
        
//         document.querySelector(".products").innerHTML = products.map(mapProductToCard).join("");
// };
document.addEventListener('DOMContentLoaded', displayProducts);

async function displayProducts() {
	const products = await getAllProducts();
	document.querySelector('.products').innerHTML = products
		.map(mapProductToCard)
		.join('');

	const addToCartButtons = document.querySelectorAll('.add-to-cart');
	addToCartButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const productId = button.getAttribute('data-productId');
			const name = button.getAttribute('data-name');
			const price = button.getAttribute('data-price');
			const imageURL = button.getAttribute('data-image');

			let cart = JSON.parse(localStorage.getItem('cart')) || {};

			if (cart[productId]) {
				cart[productId].quantity++;
			} else {
				cart[productId] = {
					quantity: 1,
					price: Number(price),
					image: imageURL,
					name: name,
				};
			}

			localStorage.setItem('cart', JSON.stringify(cart));
		});
	});
}