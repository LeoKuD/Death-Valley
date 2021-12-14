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
    img.src = smileImg;
    document.body.style.overflow = 'hidden';
    popup.addEventListener('click', hide);
  };
});

document.body.addEventListener(
  "load",
  (e) => {
    if (e.target.tagName != "IMG") {
      return;
    }
    // Remove the blurry placeholder.
    e.target.style.backgroundImage = "none";
  },
  /* capture */ true
);