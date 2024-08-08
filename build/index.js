"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require('readline-sync');
const productlist_1 = require("./model/productlist");
const searchproduct_1 = require("./service/searchproduct");
//console.log(productList);
let Productid = readlineSync.question("enter ur product id");
console.log(productlist_1.productList);
const productIdToSearch = 2; // Change this to the desired product ID
const foundProduct = (0, searchproduct_1.findProductById)(Productid);
if (foundProduct) {
    console.log('Found product:', foundProduct);
}
else {
    console.log('Product not found.');
}
