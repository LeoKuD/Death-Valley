document.querySelectorAll('.gallery img').forEach((image) => {
  image.onclick = () => {
    function hide(e) {
      if (e.target !== img) {
        popup.style.display = 'none';
        popup.removeEventListener('click', hide);
        document.body.style.overflow = 'visible';
      }
    }

    let img = document.querySelector('.popup img');
    let popup = document.querySelector('.popup');
    popup.style.display = 'block';
    let smileImg = image.getAttribute('src');
    let bigImg = smileImg.slice(0, smileImg.indexOf('.web')) + 'big.webp';
    img.src = bigImg;
    console.log(bigImg);
    document.body.style.overflow = 'hidden';
    popup.addEventListener('click', hide);
  };
});

document.querySelector('.form').onsubmit = function submit(e) {
  e.preventDefault();
  document.querySelectorAll('input').forEach((input) => console.log(input.name, ': ', input.value))
};
