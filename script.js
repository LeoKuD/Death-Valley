const gallery = document.querySelector('.gallery');
const img = document.querySelector('.popup img');
const popup = document.querySelector('.popup');
const body = document.body;

gallery.addEventListener('click', ({target}) => {
  if (target.tagName === 'IMG') {
    img.src = target.getAttribute('src');
    body.classList.add('overflow-hidden');
    popup.classList.add('display-block');
  }
});
popup.addEventListener('click', ({target}) => {
  if (target.tagName !== 'IMG') {
    popup.classList.remove('display-block')
    body.classList.remove('overflow-hidden');
  }
});

document.forms.form.addEventListener('submit', (e) => {
  e.preventDefault();
  document
    .querySelectorAll('input')
    .forEach((input) => console.log(`${input.name} : ${input.value}`));
})