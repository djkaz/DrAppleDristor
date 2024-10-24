const productsTableBody = document
  .getElementById("products-table")
  .querySelector("tbody");

document.addEventListener("DOMContentLoaded", displayProducts);

const URL = "https://6712bd3c6c5f5ced6624864b.mockapi.io/products";

function displayProducts() {
  fetch(URL)
    .then((response) => response.json())
    .then(
      (products) =>
        (productsTableBody.innerHTML = products
          .map(
            (product) => `
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><img width="50px" src=${product.imageURL} /></td>
            <td>${product.details} </td>
            <td>
                <button class="editBtn" data-productId=${product.id}>Edit</button>
            </td>
            <td>
                <button class="deleteBtn" data-productId=${product.id}>Delete</button>
            </td>
        </tr>
    `
          )
          .join(""))
    );
}

// Save me product
const form = document.getElementById("product-form");
const nameInput = document.getElementById("name");
const priceInput =  document.getElementById("price");
const imageUrlInput = document.getElementById("image-Url");
const detailInput = document.getElementById("details");
const saveProductBtn = document.getElementById("save-btn");;
let currentEditableProductId;
let editMode = false;

saveProductBtn.addEventListener("click", saveProduct);

function saveProduct(event) {
  event.preventDefault();

  const product = {
      name : nameInput.value,
      price: Number(priceInput.value),
      imageURL: imageUrlInput.value,
      details: detailInput.value,
  };

  if(editMode) {
    fetch(URL, {
      method: 'PUT', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    }).then(()=> displayProducts()

    })
  }
  else {
    fetch(URL, {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    }).then(()=> 
      displayProducts());

  }
}


// function addNewProduct(product) {
//   fetec
// }

productsTableBody.addEventListener('click', handleActions);
if (event.target.classList.contains("editBtn")) {
    currentEditableProductId= event.target.getAttribute("data-productId");
    fetch(`{URL}/${currentEditableProductId}`).then();

} else if(event.target.classList.contains("delete-btn")) {
    const id = event.target.getAttribute("data-productId");
    fetch(`${URL}/${id}`, {
      method : "DELETE",
    }).then(()=> displayProducts());
};