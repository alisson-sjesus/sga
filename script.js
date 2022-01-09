const btnCopiar = document.querySelector('.btn-copiar');
const btnGerar = document.querySelector('.btn-nfce');

btnGerar.addEventListener('click', () => {
  let inputNFCE = document.querySelector('.input-nfce');
  inputNFCE = inputNFCE.value;

  limpar(inputNFCE);

  btnGerar.innerText = 'Gerado ✔';
  btnGerar.style.width = '120px';
  setTimeout(() => {
    btnGerar.style.width = '90px';
    btnGerar.innerText = 'Gerar';
  }, 2000);
});

btnCopiar.addEventListener('click', () => {
  btnCopiar.innerText = 'Copiado ✔';
  btnCopiar.style.width = '120px';
  setTimeout(() => {
    btnCopiar.style.width = '90px';
    btnCopiar.innerText = 'Copiar';
  }, 2000);
});

function limpar(nfce) {
  const outputNFCE = document.querySelector('.output-nfce');
  const regex = /(?:0{2,})(\d+)(?:\s\d+)?/gm;
  let regexpResult;

  while ((regexpResult = regex.exec(nfce)) !== null) {
    outputNFCE.innerHTML += regexpResult[1] + ',';
  }

  const resultadoArray = outputNFCE.innerHTML
    .split(',')
    .filter((arr) => arr)
    .join(',');
  outputNFCE.innerHTML = resultadoArray;
}
