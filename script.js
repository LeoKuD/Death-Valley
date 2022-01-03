const gallery = document.querySelector('.gallery');
const img = document.querySelector('.popup img');
const popup = document.querySelector('.popup');
const body = document.body;

gallery.addEventListener('click', ({target}) => {
  if (target.tagName === 'IMG') {
    img.src = target.getAttribute('src');
    body.classList.add('overflow');
    popup.classList.add('popup_visible');
  }
});
popup.addEventListener('click', ({target}) => {
  if (target.tagName !== 'IMG') {
    popup.classList.remove('popup_visible')
    body.classList.remove('overflow');
  }
});

document.forms.form.addEventListener('submit', (e) => {
  e.preventDefault();
  document
    .querySelectorAll('input')
    .forEach((input) => console.log(`${input.name} : ${input.value}`));
})