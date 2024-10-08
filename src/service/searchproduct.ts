

import {productList} from '../model/productlist';


export function findProductById(productId: number) {
  return productList.find((product) => product.id === productId);
}

export function deleteProductById(productId: number) {
    const index = productList.findIndex((product) => product.id === productId);
    if (index !== -1) {
      productList.splice(index, 1);
    }
  }


  
export function findProductsByName(productName: string) {
    return productList.filter((product) => product.name.toLowerCase().includes(productName.toLowerCase()));
  }


