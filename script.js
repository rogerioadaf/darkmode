const themeToggleBtn = document.getElementById('theme-toggle');
const imagemElement = document.getElementById('imagem');

const imagem1URL = 'images/lua.png';
const imagem2URL = 'images/sol.png';

let imagemAtual = 1;

themeToggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');

  if (imagemAtual === 1) {
    imagemElement.src = imagem2URL;
    imagemAtual = 2;
  } else {
    imagemElement.src = imagem1URL;
    imagemAtual = 1;
  }
});