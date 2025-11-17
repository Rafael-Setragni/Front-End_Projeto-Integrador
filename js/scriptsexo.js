const radios = document.querySelectorAll('input[name="sexo"]');
const icone = document.getElementById('icone-sexo');

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.value === 'masculino') {
      icone.style.backgroundImage = "url('img/masculino.png')";
    } else if (radio.value === 'feminino') {
      icone.style.backgroundImage = "url('img/feminino.png')";
    }
  });
});