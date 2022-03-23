'use strict';

const shopingCart = document.querySelector ('.shoping-cart'); //корзина покупок
const shopingCartIconCounter = document.querySelector('.cartIconWrap span');
const shopingCartTotal = document.querySelector ('.shoping-cart_total');
const totalSumm = document.querySelector ('.shoping-cart_total-price');

const shopingCartBtn = document.querySelector('.cartIconWrap');

// показывает и прячет корзину покупок
shopingCartBtn.addEventListener ('click', function(){
    shopingCart.classList.toggle ('hidden');
});

//массив корзины покупок
let shopingCartArr = {};

//функция которая определяющая разметку товаров в корзине покупок
function howToMarkupProdInShopCart (productId){
    let productLine = `
        <div class="product-line">
            <div>${products[productId].name}</div>
            <div>
                <span class="product-count" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="product-total-price" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>
    `;
    shopingCartTotal.insertAdjacentHTML("beforebegin", productLine);
}

function addProdToShopCart (productId) {
    if (productId in shopingCartArr) {
        shopingCartArr[productId]++;
    } else {
        shopingCartArr[productId] = 1;
    }
}

function showProductInShopCart(productId) {
    let productExist = document.querySelector(`.product-count[data-productId="${productId}"]`);
    if (productExist) {
        changeNumbOfProds(productId);
        changeSumForProd(productId);
    } else {
        howToMarkupProdInShopCart(productId);
    }
}

//функция показывает количество товара добавленного в корзину по каждому продукту
function changeNumbOfProds(productId) {
    const numbOfProds = document.querySelector(`.product-count[data-productId="${productId}"]`);
    numbOfProds.textContent++;
}

//высчитывает сумму каждого товара в зависимости от количества этого товара
function changeSumForProd(productId) {
    const prodTotalPriceEl = document.querySelector(`.product-total-price[data-productId="${productId}"]`);
    let totalPriceForProd = (shopingCartArr[productId] * products[productId].price).toFixed(2);
    prodTotalPriceEl.textContent = totalPriceForProd;
}

//высчитывает общую сумму в корзине покупок
function calculateTotalShopCartSum() {
    let totalSumValue = 0;
    for (let productId in shopingCartArr) {
        totalSumValue += shopingCartArr[productId] * products[productId].price;
    }
    totalSumm.textContent = totalSumValue.toFixed(2);
}

//изменение цифры в счетчике корзины
function changeProdCount() {
    shopingCartIconCounter.textContent++;
}

function addProductInShopingCart(productId) {
    changeProdCount();
    addProdToShopCart(productId);
    showProductInShopCart(productId);
    calculateTotalShopCartSum();
}