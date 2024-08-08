var readlineSync = require('readline-sync');

import {productList} from './model/productlist';

import {findProductById} from './service/searchproduct';

//console.log(productList);




let Productid =readlineSync.question("enter ur product id");

console.log(productList);

const productIdToSearch = 2; // Change this to the desired product ID
const foundProduct = findProductById(Productid);
if (foundProduct) {
  console.log('Found product:', foundProduct);
} else {
  console.log('Product not found.');
}
