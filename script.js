const muñeco = document.getElementById('muñeco');
const mensaje = document.getElementById('mensaje');

muñeco.addEventListener('click', () => {
  muñeco.classList.add('jumping');
  mensaje.style.display = 'block';
  setTimeout(() => {
    muñeco.classList.remove('jumping');
    mensaje.style.display = 'none';
  }, 600);
});
