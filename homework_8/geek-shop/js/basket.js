"use strict"

const basketCountEl = document.querySelector(`.product-value`);
const basketTotalValueEl = document.querySelector(`.basketTotalValue`);
const basketTotalEl = document.querySelector(`.basketTotal`);
const basketEl = document.querySelector(`.basket`);

document.querySelector(`.cart-btn-link`).addEventListener(`click`, () => {
  basketEl.classList.toggle(`hidden`);
});

const basket = {};

document.querySelector(`.catalog-products-list`)
  .addEventListener(`click`, event => {
    if (!event.target.closest(`.product-item-btn`)) {
      return;
    }
    const productItem = event.target.closest(`.product-item`);
    const id = +productItem.dataset.id;
    const name = productItem.dataset.name;
    const price = +productItem.dataset.price;

    addToCart(id, name, price);
  });

function addToCart(id, name, price) {
  if (!(id in basket)) {
    basket[id] = { id, name, price, count: 0 };
  }
  basket[id].count++;
  basketCountEl.textContent = getTotalBasketCount().toString();
  basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
  renderProductInBasket(id);
}

function getTotalBasketCount() {
  return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

function getTotalBasketPrice() {
  return Object.values(basket)
    .reduce((acc, product) => acc + product.count * product.price, 0);
}

function renderProductInBasket(id) {
  const basketRowEl = basketEl
    .querySelector(`.basketRow[data-productid="${id}"]`);

  if (!basketRowEl) {
    renderNewProductInBasket(id);
    return;
  }
  // const product = basket[productId];
  basketRowEl.querySelector('.productCount').textContent = basket[id].count;
  basketRowEl
    .querySelector('.productTotalRow')
    .textContent = (basket[id].count * basket[id].price).toFixed(2);
};

function renderNewProductInBasket(productId) {
  const productRow = `
  <div class="basketRow" data-productid="${productId}">
    <div>${basket[productId].name}</div>
    <div>
      <span class="productCount">${basket[productId].count}</span> шт.
    </div>
    <div>$${basket[productId].price}</div>
    <div>
      $<span class="productTotalRow">
      ${(basket[productId].price * basket[productId].count).toFixed(2)}</span>
    </div>
  </div>
  `;
  basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}