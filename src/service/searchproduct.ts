
// Import the product list from product-list.ts
import {productList} from '../model/productlist';

// Function to find a product by ID
export function findProductById(productId: number) {
  return productList.find((product) => product.id === productId);
}

export function deleteProductById(productId: number) {
    const index = productList.findIndex((product) => product.id === productId);
    if (index !== -1) {
      productList.splice(index, 1);
    }
  }



// // Example usage:
// const productIdToSearch = 2; // Change this to the desired product ID
// const foundProduct = findProductById(productIdToSearch);
// if (foundProduct) {
//   console.log('Found product:', foundProduct);
// } else {
//   console.log('Product not found.');
// }