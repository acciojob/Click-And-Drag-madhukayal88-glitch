const items = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

items.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
});

items.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const x = e.pageX - items.offsetLeft;
  const walk = startX - x;
  items.scrollLeft = scrollLeft + walk;
});

items.addEventListener('mouseup', () => {
  isDown = false;
});

items.addEventListener('mouseleave', () => {
  isDown = false;
});
