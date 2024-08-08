"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProductById = findProductById;
// Import the product list from product-list.ts
const productlist_1 = require("../model/productlist");
// Function to find a product by ID
function findProductById(productId) {
    return productlist_1.productList.find((product) => product.id === productId);
}
// Example usage:
const productIdToSearch = 2; // Change this to the desired product ID
const foundProduct = findProductById(productIdToSearch);
if (foundProduct) {
    console.log('Found product:', foundProduct);
}
else {
    console.log('Product not found.');
}
