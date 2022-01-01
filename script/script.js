const tela = document.querySelector('#tela');
const historicoCalculoAtual = document.querySelector('#historico-calculo-atual');
const numeros = document.querySelectorAll('.numeros');
const operacoes = document.querySelectorAll('.operacoes');
const numerosPressionados = [];

(function preencherNumerosPressionados() {
  numeros.forEach(numero => {
    numero.addEventListener('click', ()=>{
      numerosPressionados.push(numero.textContent);
      if (numerosPressionados.length > 0) {
        let zero = document.querySelector('#zero');
        zero.disabled = false;
        zero.enabled = true;
      }
    });
  });
  return numerosPressionados;
})();

(function mostrarNumerosPressionados() {
  numeros.forEach(numero => {
    numero.addEventListener('click', ()=>{ 
      if (numerosPressionados.length == 1) {
        tela.textContent = tela.textContent.replace(tela.textContent, numerosPressionados[0]);
      }
      else {
        tela.textContent += numerosPressionados[numerosPressionados.length - 1];
      }

      if (tela.textContent.includes(',')) {
        let virgula = document.querySelector('#virgula');
        virgula.enabled = false;
        virgula.disabled = true;
      }
    });
  }); 
  return tela.textContent;
})();

(function detectarOperacao() {
  operacoes.forEach(operacao => {
    operacao.addEventListener('click', ()=>{
      var primeiroNumeroSemFormatacao = tela.textContent;
      numerosPressionados.length = 0;
      switch (operacao.textContent) {
        case '+':
          historicoCalculoAtual.textContent = `${primeiroNumeroSemFormatacao} +`;
          break;

        case '-':
          historicoCalculoAtual.textContent = `${primeiroNumeroSemFormatacao} -`;
          break;

        case 'x':
          historicoCalculoAtual.textContent = `${primeiroNumeroSemFormatacao} x`;
          break;

        case '/':
          historicoCalculoAtual.textContent = `${primeiroNumeroSemFormatacao} ÷`;
          break;

        default:
          break;
      };
    });
  });
})();

(function operacoesLimpadoras(){
  let ce = document.querySelector('#limpa');

  ce.addEventListener('click', ()=>{
    tela.textContent = 0;
    numerosPressionados.length = 0;
  });

  let c = document.querySelector('#limpa-tudo');

  c.addEventListener('click', ()=>{
    tela.textContent = 0;
    historicoCalculoAtual.textContent = '';
    numerosPressionados.length = 0;
  });

  let backspace = document.querySelector('#backspace');

  backspace.addEventListener('click', ()=>{
    tela.textContent = '';
    numerosPressionados.pop();
    for (let i = 0; i < numerosPressionados.length; i++) {
      tela.textContent += numerosPressionados[i];
    }
    if (numerosPressionados.length == 0) {
      tela.textContent = 0;
    }
  });
})();