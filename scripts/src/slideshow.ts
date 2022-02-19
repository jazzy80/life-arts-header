//TODO Code opschonen wellicht functioneel krijgen ipv states
export function setUpSlideShow(
    header: HTMLDivElement,
    prevButton: HTMLButtonElement,
    nextButton: HTMLButtonElement,
    files: String[]
  ): void
  {

    if (files.length == 0) return;
    if (files.length == 1) {
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
    }
    else {
      resetSlideShow(header, files);
      let index = 0;
      prevButton.addEventListener('click', () => {
        if (index == 0) index = files.length - 1;
        else --index;
        setImage(header, files[index]);
      });

      nextButton.addEventListener('click', () => {
        if (index == files.length - 1) index = 0;
        else ++index;
        header.style.backgroundImage = '';
        setImage(header, files[index]);
      });
    }
};

function resetSlideShow(header: HTMLDivElement, files: String[]): void {
  header.style.backgroundImage = `url(${files[0]}`;
}

function setImage(header: HTMLDivElement, file: String): void {
  header.style.backgroundImage = `url(${file})`;
}
