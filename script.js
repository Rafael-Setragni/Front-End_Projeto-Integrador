
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#formContato');
  const nomeCampo = document.querySelector('#nomeUsuario');
  const caixa = document.querySelector('#caixaMensagem');

  console.log("DOM carregado");
  console.log("form:", form);
  console.log("nomeCampo:", nomeCampo);
  console.log("caixa:", caixa);

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = nomeCampo.value.trim();
    if (nome === "") return;

    caixa.innerHTML = `💌 Obrigado por entrar em contato, <strong>${nome}</strong>! Em breve retornaremos sua mensagem.`;
    caixa.classList.add("visivel");

    form.reset();

    setTimeout(() => {
      caixa.classList.remove("visivel");
    }, 5000);
  });

  // CARROSSEL
    const slides = document.querySelector('#slides');
    const btnProximo = document.querySelector('#proximo');
    const btnAnterior = document.querySelector('#anterior');

      if (!slides || !btnProximo || !btnAnterior) {
        console.error("Elementos do carrossel não encontrados!");
        return; // Sai se faltar algum elemento
      }

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
});