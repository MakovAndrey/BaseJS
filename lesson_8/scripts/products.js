'use strict';

class Product {
    /**
     * @param {number} id id товара
     * @param {string} image картинка
     * @param {string} name имя 
     * @param {string} description описание 
     * @param {number} price цена 
     */

    constructor(id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

const products = [

    new Product (
        0,
        '0.jpg',
        'ELLERY X M\'O CAPSULE 0',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        55.00,
    ),

    new Product (
        1,
        '1.jpg',
        'ELLERY X M\'O CAPSULE 1',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        50.00,
    ),

    new Product (
        2,
        '2.jpg',
        'ELLERY X M\'O CAPSULE 2',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        150.00,
    ),

    new Product (
        3,
        '3.jpg',
        'ELLERY X M\'O CAPSULE 3',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        39.00,
    ),

    new Product (
        4,
        '4.jpg',
        'ELLERY X M\'O CAPSULE 4',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        28.50,
    ),

    new Product (
        5,
        '5.jpg',
        'ELLERY X M\'O CAPSULE 5',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        17.05,
    ),

    new Product (
        6,
        '6.jpg',
        'ELLERY X M\'O CAPSULE 6',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        46.00,
    ),

    new Product (
        7,
        '7.jpg',
        'ELLERY X M\'O CAPSULE 7',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        33.30,
    ),

    new Product (
        8,
        '8.jpg',
        'ELLERY X M\'O CAPSULE 8',
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        11.99,
    ),

];