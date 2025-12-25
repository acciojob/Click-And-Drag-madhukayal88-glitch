const container = document.getElementById('boundary');
const cubes = document.querySelectorAll('.cube');

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

// Initialize grid layout
cubes.forEach((cube, index) => {
  const col = index % 3;
  const row = Math.floor(index / 3);
  cube.style.left = (col * 60 + 10) + 'px';
  cube.style.top = (row * 60 + 10) + 'px';

  cube.addEventListener('mousedown', (e) => {
    activeCube = cube;
    // Calculate where inside the cube the user clicked
    offsetX = e.clientX - cube.getBoundingClientRect().left;
    offsetY = e.clientY - cube.getBoundingClientRect().top;
  });
});

window.addEventListener('mousemove', (e) => {
  if (!activeCube) return;

  // Calculate new position relative to the container
  const containerRect = container.getBoundingClientRect();
  let newX = e.clientX - containerRect.left - offsetX;
  let newY = e.clientY - containerRect.top - offsetY;

  // Boundary Constraints
  const maxX = containerRect.width - activeCube.offsetWidth;
  const maxY = containerRect.height - activeCube.offsetHeight;

  // Clamp values between 0 and max dimensions
  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  activeCube.style.left = newX + 'px';
  activeCube.style.top = newY + 'px';
});

window.addEventListener('mouseup', () => {
  activeCube = null;
});
