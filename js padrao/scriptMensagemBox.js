const form = document.querySelector('#formContato');
const nomeCampo = document.querySelector('#nomeUsuario');
const caixa = document.querySelector('#caixaMensagem');

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