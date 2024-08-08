// index.ts

// Import the product list from product-list.ts
import {productList} from '../model/productlist';

// Function to find a product by ID
export function findProductById(productId: number) {
  return productList.find((product) => product.id === productId);
}

// Example usage:
const productIdToSearch = 2; // Change this to the desired product ID
const foundProduct = findProductById(productIdToSearch);
if (foundProduct) {
  console.log('Found product:', foundProduct);
} else {
  console.log('Product not found.');
}
