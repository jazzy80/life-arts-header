"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var slideshow_1 = require("./slideshow");
var header = document.querySelector('.header');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var files = [
    'resources/F100030305.jpg',
    'resources/F100030307.jpg',
    'resources/F100031056.jpg'
];
if (header && prevButton && nextButton)
    slideshow_1.setUpSlideShow(header, prevButton, nextButton, files);
