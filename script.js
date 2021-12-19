const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    let img = document.querySelector('.popup img');
    let popup = document.querySelector('.popup');
    let smallImg = event.target.getAttribute('src');
    let bigImg = smallImg.slice(0, smallImg.indexOf('.web')) + 'big.webp';
    img.src = bigImg;
    document.body.style.overflow = 'hidden';
    popup.style.display = 'block';
    popup.addEventListener('click', (event) => {
      if (event.target.tagName !== 'IMG') {
        popup.style.display = 'none';
        document.body.style.overflow = 'visible';
      }
    });
  }
});
let form = document.forms.form;
form.onsubmit = function submit(e) {
  e.preventDefault();
  document
    .querySelectorAll('input')
    .forEach((input) => console.log(input.name, ': ', input.value));
};
