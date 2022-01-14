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

// GERENCIAR TELAS

const menus = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');

menus.forEach((menu, index) => {
  menu.addEventListener('click', () => {
    removerAtivo();
    menu.classList.add('ativo');
    removerAtivoSection();
    sections[index].classList.add('ativo');
  });
});

function removerAtivo() {
  menus.forEach((menu) => {
    if (menu.classList.contains('ativo')) {
      menu.classList.remove('ativo');
    }
  });
}

sections.forEach((section) => {
  section.addEventListener('click', () => {
    removerAtivoSection();
    section.classList.add('ativo');
  });
});

function removerAtivoSection() {
  sections.forEach((section) => {
    if (section.classList.contains('ativo')) {
      section.classList.remove('ativo');
    }
  });
}

// SCRIPT

const outputScript = document.querySelector('.output-script');
const opcaoScript = document.querySelector('.selecionar-script');

const data = new Date();
const anoAnterior = +data.getFullYear() - 1;
const ano = data.getFullYear();
const mes = (+data.getMonth() - 1) < 0 ? 12 : +data.getMonth() - 1;

let periodo = '';

switch (mes) {
  case 12:
    periodo = `'01.${mes}.${anoAnterior}' and '31.${mes}.${anoAnterior}'`;
    break;
  case 1:
    periodo = `'01.${mes}.${ano}' and '31.${mes}.${ano}'`;
    break;
  case 2:
    periodo = `'01.${mes}.${ano}' and '28.${mes}.${ano}'`;
    break;
  case 3:
    periodo = `'01.${mes}.${ano}' and '31.${mes}.${ano}'`;
    break;
  case 4:
    periodo = `'01.${mes}.${ano}' and '30.${mes}.${ano}'`;
    break;
  case 5:
    periodo = `'01.${mes}.${ano}' and '31.${mes}.${ano}'`;
    break;
  case 6:
    periodo = `'01.${mes}.${ano}' and '30.${mes}.${ano}'`;
    break;
  case 7:
    periodo = `'01.${mes}.${ano}' and '31.${mes}.${ano}'`;
    break;
  case 8:
    periodo = `'01.${mes}.${ano}' and '31.${mes}.${ano}'`;
    break;
  case 9:
    periodo = `'01.${mes}.${ano}' and '30.${mes}.${ano}'`;
    break;
  case 10:
    periodo = `'01.${mes}.${ano}' and '31.${mes}.${ano}'`;
    break;
  case 11:
    periodo = `'01.${mes}.${ano}' and '30.${mes}.${ano}'`;
    break;
  case 12:
    periodo = `'01.${mes}.${ano}' and '31.${mes}.${ano}'`;
    break;
}

opcaoScript.addEventListener('change', () => {
  if (opcaoScript.value === 'nfce') {
    outputScript.innerHTML = `select idnfmaster, 1 as tratado, subserie, current_timestamp as datahora from nfmaster where dataentsai between ${periodo} and serie = 'NFC-E' and protocolo = '' and chavenfe <> '' and situacao = 0`;
  } else if (opcaoScript.value === 'exportar') {
    outputScript.innerHTML = `select n.* from nfmaster n\n--join nfdet d on n.idnfmaster = d.idnfmaster\n--join vendas v on v.idnfmaster = n.idnfmaster\n--join areceber a on v.idcompra = a.idcompra\nwhere n.situacao = 0 and n.serie = 'NFC-E' and n.dataentsai between ${periodo}`
  } else if (opcaoScript.value === 'exportar-numero') {
    outputScript.innerHTML = `select n.* from nfmaster n\n--join nfdet d on n.idnfmaster = d.idnfmaster\n--join vendas v on v.idnfmaster = n.idnfmaster\n--join areceber a on v.idcompra = a.idcompra\nwhere n.situacao = 0 and n.serie = 'NFC-E' and n.dataentsai between ${periodo} and n.numnota in (${outputNFCE.innerHTML})`
  }
})

// UTEIS

const opcaoUteis = document.querySelector('.selecionar-uteis');
const outputUteis = document.querySelector('.output-uteis');

opcaoUteis.addEventListener('change', () => {
  if (opcaoUteis.value === 'portas') {
    outputUteis.innerHTML = '65123, 65100, 64123, 9092, 4899, 4096, 3050,992, 993, 995, 587, 465, 445, 80, 21'
  }
})