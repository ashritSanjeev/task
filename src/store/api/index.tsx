import React from 'react';
const BASE_URL = 'https://fakestoreapi.com';

// API to fetch all categories
// `https://fakestoreapi.com/products/categories`
//  [
//     "electronics",
//     "jewelery",
//     "men's clothing",
//     "women's clothing"
//  ]

// `https://fakestoreapi.com/products/categories/${selectedCategory}`

// API to fetch produce
// `https://fakestoreapi.com/products/${selectedProduceId}`

//
// Gets all configs present in the config table
export const getAllcategories = () => {
    const ApiLink = `${BASE_URL}/products/categories`;
    return fetch(ApiLink).then((response: any) => response.json())
        .catch((error: any) => console.log('Error in getAllConfigs: ', error));
}; 

export const getAllproducts =(key:any) => {
    const ApiLink = `${BASE_URL}/products/category/${key}`;
    return fetch(ApiLink).then((response: any) => response.json())
        .catch((error: any) => console.log('Error in getAllConfigs: ', error));
};
