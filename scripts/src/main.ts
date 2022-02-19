import { setUpSlideShow } from "./slideshow";

const header = document.querySelector('.header') as HTMLDivElement;
const prevButton = document.querySelector('.prev-button') as HTMLButtonElement;
const nextButton = document.querySelector('.next-button') as HTMLButtonElement;
const files = [
  'resources/F100030305.jpg',
  'resources/F100030307.jpg',
  'resources/F100031056.jpg'
]

if (header && prevButton && nextButton)
  setUpSlideShow(
    header,
    prevButton,
    nextButton,
    files
);
