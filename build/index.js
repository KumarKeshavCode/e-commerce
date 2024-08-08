"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
const productlist_1 = require("./model/productlist");
const searchproduct_1 = require("./service/searchproduct");
const searchproduct_2 = require("./service/searchproduct");
const searchproduct_3 = require("./service/searchproduct");
const logger_1 = __importDefault(require("./Logger/logger"));
logger_1.default.info("two");
//console.log(productList);
let flag = true;
while (flag == true) {
    console.log("1: Perform searching and deletion by id");
    console.log("2: Search product by name and display matching product ");
    console.log("3: Exit");
    let i = readlineSync.question("enter your choice");
    switch (i) {
        case "1": {
            console.log("Product list if u want to show the product list just do ");
            const showProductList = readlineSync.question("yes/no");
            if (showProductList.toLowerCase() === "yes") {
                console.log("Product list:", productlist_1.productList);
            }
            const Productid = parseInt(readlineSync.question("enter ur product id"));
            // console.log(productList);
            const foundProduct = (0, searchproduct_1.findProductById)(Productid);
            if (foundProduct) {
                console.log("Found product:", foundProduct);
                (0, searchproduct_2.deleteProductById)(foundProduct.id);
                console.log("Product removed from the list.");
                logger_1.default.info("Product removed from the list.");
                console.log("Updated product list:", productlist_1.productList);
            }
            else {
                console.log("Product not found.");
            }
            break;
        }
        case "2": {
            console.log("search product by name");
            const yourwish = readlineSync.question("yes/no ");
            if (yourwish.toLowerCase() === "yes") {
                //console.log('Product list:', productList);
                const productName = readlineSync.question("Enter the product name: ");
                const foundProducts = (0, searchproduct_3.findProductsByName)(productName);
                console.log("1");
                console.log(foundProducts);
                console.log("2");
                if (foundProducts.length > 0) {
                    console.log("Found products:");
                    foundProducts.forEach((product) => {
                        console.log(`- ${product.name} (ID: ${product.id})`);
                    });
                }
                else {
                    console.log("No products found.");
                }
            }
            break;
        }
        default: {
            flag = false;
            break;
        }
    }
}
// console.log("Product list if u want to show the product list just do ");
// const showProductList = readlineSync.question("yes/no");
// if (showProductList.toLowerCase() === "yes") {
//     console.log('Product list:', productList);
//   }
// const Productid = parseInt(readlineSync.question("enter ur product id"));
// // console.log(productList);
// const foundProduct = findProductById(Productid);
// if (foundProduct) {
//   console.log('Found product:', foundProduct);
//   deleteProductById(foundProduct.id);
//   console.log('Product removed from the list.');
//   console.log('Updated product list:', productList);
// } else {
//   console.log('Product not found.');
// }
// console.log("search product by name");
// const yourwish = readlineSync.question("yes/no");
// if (yourwish.toLowerCase() === "yes") {
//     //console.log('Product list:', productList);
// const productName = readlineSync.question("Enter the product name: ");
// const foundProducts = findProductsByName(productName);
// if (foundProducts.length > 0) {
//   console.log('Found products:');
//   foundProducts.forEach((product) => {
//     console.log(`- ${product.name} (ID: ${product.id})`);
//   });
// } else {
//   console.log('No products found.');
// }
//   }
// const productName = readlineSync.question("Enter the product name: ");
// const foundProducts = findProductsByName(productName);
// if (foundProducts.length > 0) {
//   console.log('Found products:');
//   foundProducts.forEach((product) => {
//     console.log(`- ${product.name} (ID: ${product.id})`);
//   });
// } else {
//   console.log('No products found.');
// }
