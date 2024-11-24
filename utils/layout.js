// export function mapProductToCard(product) {
//     return `
//           <div class="card">
//               <div class="info  flex-col items-center gap-20">
//                   <div class="img">
//                       <img src=${product.imageURL} alt="">
//                   </div>
//                   <div class="name">
//                       <h4>${product.name}</h4>
//                   </div>
//                   <div class="price">${product.price} lei</div>
//               </div>
//               <button class="add-to-cart">Adauga in cos</button>
//           </div>
//       `;
//   }
  
// export function mapProductToAdminTableRow(product) {
//     return `
//           <tr>
//               <td>${product.name}</td>
//               <td>${product.price}</td>
//               <td><img width="50px" src=${product.imageURL} /></td>
//               <td>${product.details} </td>
//               <td>
//                   <button class="edit-btn" data-productId=${product.id}>Edit</button>
//               </td>
//               <td>
//                   <button class="delete-btn" data-productId=${product.id}>Delete</button>
//               </td>
//           </tr>
//       `;
//   }

// //test. 

// export function mapProductToCartRow(product) {
//     return `<div class="product-card">
//           <h2 class="product-name">${product.name}</h2>
//           <strong>$${product.price}</strong>
//           <button class="product-btn" id=${product.id}>Add to Cart</button>
//       </div>`
// }

//New Code
export function mapProductToCard(product) {
	return `
        <div class="card">
            <div class="info">
                <div class="img">
                    <img src=${product.imageURL} alt="">
                </div>
                <div class="name">
                    <a href="pages/details.html?id=${product.id}" class="product-name-link">
                         <h4 class="product-name">${product.name}</h4>
                    </a>
                </div>
                <div class="price">${product.price} lei</div>
            </div>
            <button class="add-to-cart" 
               data-productId=${product.id}
               data-name="${product.name}"
               data-price=${product.price}
               data-image=${product.imageURL}   
            >
               Adauga in cos
            </button>
        </div>
    `;
}

export function mapProductToAdminTableRow(product) {
	return `
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><img width="50px" src=${product.imageURL} /></td>
            <td>${product.details} </td>
            <td>
                <button class="edit-btn" data-productId=${product.id}>Edit</button>
            </td>
            <td>
                <button class="delete-btn" data-productId=${product.id}>Delete</button>
            </td>
        </tr>
    `;
}
