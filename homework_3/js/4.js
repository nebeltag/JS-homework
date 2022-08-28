"use strict";

const products = [
  {
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg",
    ],
  },
  {
    id: 8,
    price: 78,
  },
];

const pictureProduct = products.filter((picture) => {
  return picture.photos && picture.photos.length != 0;
});

// const pictureProduct = products.filter((product) => {
//   return "photos" in product && product.photos.length != 0;
// });

// const pictureProduct = products.filter(product =>
//   product.photos?.length > 0);

console.log(pictureProduct);

products.sort((a, b) => {
  return a.price - b.price;
});

console.log(products); 