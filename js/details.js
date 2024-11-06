const URL = "https://6712bd3c6c5f5ced6624864b.mockapi.io/products";

// Function to fetch product data and display it on the page
async function displayProductDetails() {
  try {
    const response = await fetch(URL);
    const products = await response.json();

    // Get the container element where we'll display the product details
    const container = document.getElementById("product-details");

    // Loop through the products and create HTML elements to display the data
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const nameElement = document.createElement("h3");
      nameElement.textContent = product.name;

      const priceElement = document.createElement("p");
      priceElement.textContent = `Price: $${product.price}`;

      // const pictureElement = document.createElement("p");
      // pictureElement.textContent = `Picture: ${product.imageURL}`;
      // pictureElement.textContent = `Picture: ${product.imageURL}`;
      const pictureElement = document.createElement("img");
      pictureElement.src = product.imageURL;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = product.details;

      productElement.appendChild(nameElement);
      productElement.appendChild(priceElement);
      productElement.appendChild(pictureElement);
      productElement.appendChild(descriptionElement);

      container.appendChild(productElement);
    });
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
}

// Call the displayProductDetails function when the page loads
window.addEventListener("DOMContentLoaded", displayProductDetails);