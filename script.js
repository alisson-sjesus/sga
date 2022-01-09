const btnCopiar = document.querySelector('.btn-copiar');
const btnGerar = document.querySelector('.btn-nfce');
const btnLimpar = document.querySelector('.btn-limpar');
const outputNFCE = document.querySelector('.output-nfce');
let inputNFCE = document.querySelector('.input-nfce');
let resultadoArray = '';

// ESTILIZAÇÃO DE FUNCIONAMENTO DO BOTÃO DE GERAR

btnGerar.addEventListener('click', () => {
  inputNFCE = inputNFCE.value;

  corrigirNFCE(inputNFCE);

  btnGerar.innerText = 'Gerado ✔';
  btnGerar.style.width = '120px';
  setTimeout(() => {
    btnGerar.style.width = '90px';
    btnGerar.innerText = 'Gerar';
  }, 2000);
});

// ESTILIZAÇÃO E FUNCIONAMENTO DO BOTÃO DE COPIAR

btnCopiar.addEventListener('click', () => {
  btnCopiar.innerText = 'Copiado ✔';
  btnCopiar.style.width = '120px';
  setTimeout(() => {
    btnCopiar.style.width = '90px';
    btnCopiar.innerText = 'Copiar';
  }, 2000);

  copiar();
});

// ATUALIZAR A PÁGINA QUANDO CLICAR EM "LIMPAR"

btnLimpar.addEventListener('click', () => {
  window.location.reload();
});

function corrigirNFCE(nfce) {
  const regex = /(?:0{2,})(\d+)(?:\s\d+)?/gm;
  let regexpResult;

  while ((regexpResult = regex.exec(nfce)) !== null) {
    outputNFCE.innerHTML += regexpResult[1] + ',';
  }

  resultadoArray = outputNFCE.innerHTML
    .split(',')
    .filter((arr) => arr)
    .join(',');
  outputNFCE.innerHTML = resultadoArray;
}

function copiar() {
  window.navigator.clipboard.writeText(resultadoArray);
}
