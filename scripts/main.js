const header = document.querySelector('.header');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', () => {
    header.style.backgroundImage = "url(resources/IMG_3569.JPG)";
})

nextButton.addEventListener('click', () => {
    header.style.backgroundImage = "url(resources/20210516_152128.jpg)";
});
