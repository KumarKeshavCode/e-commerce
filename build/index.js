"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require('readline-sync');
const productlist_1 = require("./model/productlist");
const searchproduct_1 = require("./service/searchproduct");
const searchproduct_2 = require("./service/searchproduct");
//console.log(productList);
console.log("Product list if u want to show the product list just do ");
const showProductList = readlineSync.question("yes/no");
if (showProductList.toLowerCase() === "yes") {
    console.log('Product list:', productlist_1.productList);
}
const Productid = parseInt(readlineSync.question("enter ur product id"));
// console.log(productList);
const foundProduct = (0, searchproduct_1.findProductById)(Productid);
if (foundProduct) {
    console.log('Found product:', foundProduct);
    (0, searchproduct_2.deleteProductById)(foundProduct.id);
    console.log('Product removed from the list.');
    console.log('Updated product list:', productlist_1.productList);
}
else {
    console.log('Product not found.');
}
