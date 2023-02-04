document.querySelectorAll('.accordion__button').forEach((item) => {
  item.addEventListener('click', (event) => {
    item.classList.toggle('open');
    item.nextElementSibling.classList.toggle('open');

  })
})