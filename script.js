const btnCopiar = document.querySelector('.btn-copiar');
const btnGerar = document.querySelector('.btn-nfce');

btnCopiar.addEventListener('click', () => {
  btnCopiar.innerText = 'Copiado ✔';
  btnCopiar.style.width = '120px';
  setTimeout(() => {
    btnCopiar.style.width = '90px';
    btnCopiar.innerText = 'Copiar';
  }, 2000);
});

btnGerar.addEventListener('click', () => {
  btnGerar.innerText = 'Gerado ✔';
  btnGerar.style.width = '120px';
  setTimeout(() => {
    btnGerar.style.width = '90px';
    btnGerar.innerText = 'Gerar';
  }, 2000);
});
