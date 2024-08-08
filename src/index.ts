var readlineSync = require('readline-sync');

import {productList} from './model/productlist';

import {findProductById} from './service/searchproduct';
import {deleteProductById} from './service/searchproduct';

//console.log(productList);

console.log("Product list if u want to show the product list just do ");

const showProductList = readlineSync.question("yes/no");

if (showProductList.toLowerCase() === "yes") {
    console.log('Product list:', productList);
  }

const Productid = parseInt(readlineSync.question("enter ur product id"));

// console.log(productList);

const foundProduct = findProductById(Productid);

if (foundProduct) {
  console.log('Found product:', foundProduct);
  deleteProductById(foundProduct.id);
  console.log('Product removed from the list.');
  console.log('Updated product list:', productList);
} else {
  console.log('Product not found.');
}




