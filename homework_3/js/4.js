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

let pictureProduct = products.filter(function (picture) {

  if (typeof picture.photos !== "undefined" && picture.photos.length != 0) {
    return picture;
  }
});
console.log(pictureProduct);