"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProductById = findProductById;
exports.deleteProductById = deleteProductById;
const productlist_1 = require("../model/productlist");
function findProductById(productId) {
    return productlist_1.productList.find((product) => product.id === productId);
}
function deleteProductById(productId) {
    const index = productlist_1.productList.findIndex((product) => product.id === productId);
    if (index !== -1) {
        productlist_1.productList.splice(index, 1);
    }
}
