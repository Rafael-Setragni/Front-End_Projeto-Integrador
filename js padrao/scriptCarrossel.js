

// CARROSSEL
const slides = document.querySelector('#slides');
const btnProximo = document.querySelector('#proximo');
const btnAnterior = document.querySelector('#anterior');

if (!slides || !btnProximo || !btnAnterior) {
  console.error("Elementos do carrossel não encontrados!");
}else{
  const imagens = slides.querySelectorAll('img');
  let indice = 0;
  const total = imagens.length;

  function mostrarSlide() {
    const largura = document.querySelector('#carrossel').clientWidth;
    slides.style.transform = `translateX(${-indice * largura}px)`;
  }

  btnProximo.addEventListener('click', () => {
    indice = (indice + 1) % total;
    mostrarSlide();
  });

  btnAnterior.addEventListener('click', () => {
    indice = (indice - 1 + total) % total;
    mostrarSlide();
  });

  window.addEventListener('resize', mostrarSlide);

  setInterval(() => {
    indice = (indice + 1) % total;
    mostrarSlide();
  }, 5000);

  mostrarSlide();
}
