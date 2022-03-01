'use strict';

const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

let textEl = document.querySelector('.text');

let navEl = document.querySelectorAll('.nav-link');

navEl.forEach (function(link) {
    link.addEventListener ('click', function(event){
    changeText(event);
    changeActiveClass(event);
    });
});

function changeActiveClass(event) {
    let activBtn = document.querySelector (".active");
    activBtn.classList.remove ("active");
    event.target.classList.add ("active");
}

function changeText (event) {
    switch (event.target.textContent) {
        case "Link 1":
            textEl.textContent = texts.text1;
            break;
        case "Link 2":
            textEl.textContent = texts.text2;
            break;
        case "Link 3":
            textEl.textContent = texts.text3;
            break;
    }
}