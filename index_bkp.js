const URL = "https://6712bd3c6c5f5ced6624864b.mockapi.io/products";
const productsContainer = document.querySelector(".products");

document.addEventListener("DOMContentLoaded", displayProducts);

function displayProducts() {
  fetch(URL)
    .then((response) => response.json())
    .then(
      (products) =>
        (productsContainer.innerHTML = products
          .map(
            (product) => `
            <div class="card">
                <div class="info">
                    <div class="img">
                        <img src=${product.imageURL} alt="">
                    </div>
                    <div class="name">
                        <h4>${product.name}</h4>
                    </div>
                    <div class="price">${product.price} lei</div>
                </div>
                <button class="add-to-cart">Adauga in cos</button>
            </div>
            `
          )
          .join(""))
    );
}