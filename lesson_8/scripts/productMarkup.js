'use strict';

const pathToImage = 'images';
const pathToProdImage = `${pathToImage}/featured`;
const featuredItemEl = document.querySelector('.featuredItems');

//функция обрабатывает клик по всем кнопкам "добавить в корзину"
function butnEventListenerCycle (){
    const addToCartBtn = document.querySelectorAll('button[data-productId]');
    addToCartBtn.forEach (function (button){
        button.addEventListener ('click', addProdHandler);
    });
}

// функция обрабатывает на какой конкретно кнопке произошел клик "добавить в корзину"
function addProdHandler (event){
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductInShopingCart(productId);
}

//функция добавляет карточки товаров на страницу
function addProdOnPage (products, featuredItemEl){
    let productMarkup = '';
    for (let product of products) {
        productMarkup += addProductMarkup(product);
    }
    featuredItemEl.insertAdjacentHTML ("beforeend", productMarkup)
}

//разметка карточки товара
function addProductMarkup(product) {
    return `
        <div class="featuredItem">

            <div class="featuredImgWrap">
                <img src="${pathToProdImage}/${product.image}" alt="${product.name}">
                <div class="featuredImgDark">
                    <button data-productId="${product.id}">
                        <img src="${pathToImage}/cart.svg" alt="">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="featuredData">
                <div class="featuredName">
                    ${product.name}
                </div>
                <div class="featuredText">
                    ${product.description}
                </div>
                <div class="featuredPrice">
                    $${product.price}
                </div>
            </div>

        </div>
    `;
}

addProdOnPage(products, featuredItemEl);
butnEventListenerCycle();